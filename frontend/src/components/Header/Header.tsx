import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="logo-text">
            <h1>CodeMind AI</h1>
            <span>智能代码助手</span>
          </div>
        </div>
        
        <nav className="header-nav">
          <a href="#" className="nav-link active">代码分析</a>
          <a href="#" className="nav-link">学习中心</a>
          <a href="#" className="nav-link">文档</a>
        </nav>
        
        <div className="header-actions">
          <button className="btn-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 1V6M12 18V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H6M18 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="btn-primary">
            <span>开始使用</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
