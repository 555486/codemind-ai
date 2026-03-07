import { useState } from 'react';
import CodeEditor from '../components/CodeEditor/CodeEditor';
import ControlPanel from '../components/ControlPanel/ControlPanel';
import ErrorPanel from '../components/ErrorPanel/ErrorPanel';
import ExplanationPanel from '../components/ExplanationPanel/ExplanationPanel';
import './MainPage.css';

interface AnalysisResult {
  type: 'error' | 'warning' | 'info';
  line: number;
  message: string;
}

function MainPage() {
  const [code, setCode] = useState('// 输入你的代码...');
  const [language, setLanguage] = useState('javascript');
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult[]>([]);
  const [aiExplanation, setAiExplanation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code: code,
          language: language
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setAnalysisResults(data.results || []);
      } else {
        setAnalysisResults([{
          type: 'error',
          line: 1,
          message: data.error || '分析失败'
        }]);
      }
    } catch (error) {
      console.error('分析失败:', error);
      setAnalysisResults([{
        type: 'error',
        line: 1,
        message: '无法连接到后端服务器'
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleExplain = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/explain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code: code,
          language: language
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setAiExplanation(data.explanation || '无法生成解释');
      } else {
        setAiExplanation(data.error || '解释失败');
      }
    } catch (error) {
      console.error('解释失败:', error);
      setAiExplanation('无法连接到后端服务器');
    } finally {
      setLoading(false);
    }
  };

  const handleTeachMe = async (topic: string) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/teach', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          topic: topic,
          level: 'beginner'
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setAiExplanation(data.lesson || '无法生成教学内容');
      } else {
        setAiExplanation(data.error || '教学失败');
      }
    } catch (error) {
      console.error('教学失败:', error);
      setAiExplanation('无法连接到后端服务器');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <header className="header">
        <h1>🤖 CodeMind AI 代码智能助手</h1>
        <p className="subtitle">AI 驱动的代码分析、解释和教学工具</p>
      </header>
            
      <div className="content-wrapper">
        <div className="left-panel glass-effect">
          <ControlPanel
            language={language}
            onLanguageChange={setLanguage}
            onAnalyze={handleAnalyze}
            onExplain={handleExplain}
            onTeachMe={handleTeachMe}
          />
        </div>
                
        <div className="center-panel glass-effect">
          <CodeEditor
            code={code}
            language={language}
            onChange={setCode}
          />
        </div>
                
        <div className="right-panel glass-effect">
          <ErrorPanel results={analysisResults} />
          <ExplanationPanel explanation={aiExplanation} />
        </div>
      </div>
            
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>AI 处理中...</p>
        </div>
      )}
            
      <footer className="footer">
        <p>支持语言：C, C++, JavaScript, TypeScript, Python, HTML, CSS</p>
        <p>功能：代码分析 • AI 解释 • 智能教学 • 错误检测</p>
      </footer>
    </div>
  );
}

export default MainPage;
