const { exec, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 要尝试的端口列表（从 5000 开始）
const PORTS_TO_TRY = [
  5000, 5001, 5002, 5003, 5004, 5005,
  6000, 6001, 6002, 6003, 6004, 6005,
  7000, 7001, 7002, 7003, 7004, 7005,
  8000, 8001, 8002, 8003, 8004, 8005
];

// 检查端口是否被占用
function isPortAvailable(port) {
  return new Promise((resolve) => {
    const command = process.platform === 'win32'
      ? `netstat -ano | findstr ":${port}"`
      : `lsof -i:${port}`;
    
    exec(command, (error, stdout) => {
      if (error) {
        // 命令执行出错，通常表示端口可用
        resolve(true);
        return;
      }
      
      // 如果有输出，表示端口被占用
      const isOccupied = stdout.trim().length > 0;
      resolve(!isOccupied);
    });
  });
}

// 更新.env 文件中的端口
function updateEnvFile(port) {
  const envPath = path.join(__dirname, '.env');
  
  if (!fs.existsSync(envPath)) {
    console.log('❌ .env 文件不存在，创建默认文件...');
    fs.writeFileSync(envPath, `PORT=${port}\nNODE_ENV=development\nCORS_ORIGIN=http://localhost:3000`);
    return;
  }
  
  let envContent = fs.readFileSync(envPath, 'utf8');
  
  // 更新或添加 PORT 配置
  if (envContent.includes('PORT=')) {
    envContent = envContent.replace(/PORT=.*/m, `PORT=${port}`);
  } else {
    envContent = `PORT=${port}\n${envContent}`;
  }
  
  fs.writeFileSync(envPath, envContent);
  console.log(`✅ 更新.env 文件：PORT=${port}`);
}

// 更新前端 API 地址
function updateFrontendApi(port) {
  const frontendPath = path.join(__dirname, '..', 'frontend', 'src', 'pages', 'MainPage.tsx');
  
  if (!fs.existsSync(frontendPath)) {
    console.log('⚠️  找不到前端文件：', frontendPath);
    return;
  }
  
  let frontendContent = fs.readFileSync(frontendPath, 'utf8');
  
  // 替换所有 API 地址中的端口
  frontendContent = frontendContent.replace(
    /http:\/\/localhost:3001\/api/g,
    `http://localhost:${port}/api`
  );
  
  frontendContent = frontendContent.replace(
    /http:\/\/localhost:\d+\/api/g,
    `http://localhost:${port}/api`
  );
  
  fs.writeFileSync(frontendPath, frontendContent);
  console.log(`✅ 更新前端 API 地址：http://localhost:${port}/api`);
}

// 启动后端服务器
function startBackendServer(port) {
  console.log(`
===========================================
🚀 启动 CodeMind AI 后端服务器
📡 使用端口：${port}
🌐 环境：development
🔗 健康检查：http://localhost:${port}/health
🔗 前端地址：http://localhost:3000
===========================================
`);
  
  // 启动 TypeScript 开发服务器
  const server = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, PORT: port.toString() }
  });
  
  // 处理退出
  server.on('close', (code) => {
    console.log(`服务器退出，代码：${code}`);
  });
  
  // 处理错误
  server.on('error', (err) => {
    console.error('启动服务器失败:', err);
  });
  
  return server;
}

// 主函数
async function main() {
  console.log('🔍 寻找可用端口...\n');
  
  // 检查可用端口
  let availablePort = null;
  
  for (const port of PORTS_TO_TRY) {
    const isAvailable = await isPortAvailable(port);
    
    if (isAvailable) {
      availablePort = port;
      console.log(`✅ 找到可用端口：${port}`);
      break;
    } else {
      console.log(`⏳ 端口 ${port} 被占用，尝试下一个...`);
    }
  }
  
  if (!availablePort) {
    console.log('❌ 没有找到可用端口，尝试使用 5000');
    availablePort = 5000;
  }
  
  // 更新配置文件
  updateEnvFile(availablePort);
  updateFrontendApi(availablePort);
  
  // 启动服务器
  const server = startBackendServer(availablePort);
  
  // 处理控制台输入
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  console.log('\n📝 命令:');
  console.log('  r - 重启服务器');
  console.log('  q - 退出');
  console.log('  h - 显示帮助');
  
  rl.on('line', (input) => {
    switch (input.trim().toLowerCase()) {
      case 'r':
        console.log('🔄 重启服务器...');
        server.kill();
        startBackendServer(availablePort);
        break;
      case 'q':
        console.log('👋 退出...');
        server.kill();
        process.exit(0);
        break;
      case 'h':
        console.log(`
帮助信息:
  r - 重启服务器
  q - 退出程序
  h - 显示帮助
        `);
        break;
      default:
        console.log(`未知命令："${input}"，输入 h 查看帮助`);
    }
  });
  
  // 处理退出信号
  process.on('SIGINT', () => {
    console.log('\n👋 收到退出信号，关闭服务器...');
    server.kill();
    process.exit(0);
  });
}

// 启动
main().catch(console.error);
