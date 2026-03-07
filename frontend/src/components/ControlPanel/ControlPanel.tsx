import { useState } from 'react';
import './ControlPanel.css';

const languages = [
  { value: 'c', label: 'C', icon: 'c' },
  { value: 'cpp', label: 'C++', icon: 'cpp' },
  { value: 'javascript', label: 'JavaScript', icon: 'js' },
  { value: 'typescript', label: 'TypeScript', icon: 'ts' },
  { value: 'python', label: 'Python', icon: 'py' },
  { value: 'html', label: 'HTML', icon: 'html' },
  { value: 'css', label: 'CSS', icon: 'css' },
  { value: 'java', label: 'Java', icon: 'java' },
  { value: 'go', label: 'Go', icon: 'go' },
  { value: 'rust', label: 'Rust', icon: 'rust' }
];

interface ControlPanelProps {
  language: string;
  onLanguageChange: (lang: string) => void;
  onAnalyze: () => void;
  onExplain: () => void;
  onTeachMe: (topic: string) => void;
}

function ControlPanel({ language, onLanguageChange, onAnalyze, onExplain, onTeachMe }: ControlPanelProps) {
  const [teachingTopic, setTeachingTopic] = useState('');
  const [stats, setStats] = useState({
    todayAnalysis: 0,
    problemsSolved: 0,
    learningTime: 0
  });

  // 更新统计数据
  const updateStats = (type: 'analysis' | 'problem' | 'time') => {
    setStats(prev => ({
      ...prev,
      todayAnalysis: type === 'analysis' ? prev.todayAnalysis + 1 : prev.todayAnalysis,
      problemsSolved: type === 'problem' ? prev.problemsSolved + 1 : prev.problemsSolved,
      learningTime: type === 'time' ? prev.learningTime + 1 : prev.learningTime
    }));
  };

  // 监听 AI 功能调用 (通过拦截回调函数)
  const wrappedAnalyze = () => {
    updateStats('analysis');
    onAnalyze();
  };

  const wrappedExplain = () => {
    updateStats('analysis');
    onExplain();
  };

  const wrappedTeachMe = (topic: string) => {
    updateStats('time');
    onTeachMe(topic);
  };

  const handleTeachSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (teachingTopic.trim()) {
      wrappedTeachMe(teachingTopic);
      setTeachingTopic('');
    }
  };

  return (
    <div className="control-panel glass-panel">
      <div className="panel-header">
        <h2>控制面板</h2>
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span>AI 就绪</span>
        </div>
      </div>

      <div className="panel-content">
        {/* 语言选择 */}
        <div className="control-section">
          <label className="section-label">编程语言</label>
          <div className="language-grid">
            {languages.map((lang) => (
              <button
                key={lang.value}
                className={`language-btn ${language === lang.value ? 'active' : ''}`}
                onClick={() => onLanguageChange(lang.value)}
                title={lang.label}
              >
                <span className="lang-icon">{lang.icon}</span>
                <span className="lang-label">{lang.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="control-divider"></div>

        {/* 主要操作 */}
        <div className="control-section">
          <label className="section-label">AI 功能</label>
          
          <div className="action-buttons">
            <button className="action-btn analyze" onClick={wrappedAnalyze}>
              <div className="action-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.5 2.5002C18.8978 2.10238 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.10238 21.5 2.5002C21.8978 2.89802 22.1214 3.43758 22.1214 4.0002C22.1214 4.56282 21.8978 5.10238 21.5 5.5002L12 15.0002L8 16.0002L9 12.0002L18.5 2.5002Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="action-text">
                <strong>分析代码</strong>
                <span>检测错误和问题</span>
              </div>
            </button>

            <button className="action-btn explain" onClick={wrappedExplain}>
              <div className="action-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="8" r="1" fill="currentColor"/>
                </svg>
              </div>
              <div className="action-text">
                <strong>解释代码</strong>
                <span>AI 详细说明</span>
              </div>
            </button>
          </div>
        </div>

        <div className="control-divider"></div>

        {/* 教学功能 */}
        <div className="control-section">
          <label className="section-label">AI 教学</label>
          <form onSubmit={handleTeachSubmit} className="teach-form">
            <input
              type="text"
              className="teach-input"
              placeholder="输入想学习的主题..."
              value={teachingTopic}
              onChange={(e) => setTeachingTopic(e.target.value)}
            />
            <button type="submit" className="teach-btn" disabled={!teachingTopic.trim()}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
          
          <div className="quick-topics">
            <span className="quick-label">热门主题:</span>
            <button className="topic-tag" onClick={() => onTeachMe('闭包')}>闭包</button>
            <button className="topic-tag" onClick={() => onTeachMe('异步编程')}>异步编程</button>
            <button className="topic-tag" onClick={() => onTeachMe('设计模式')}>设计模式</button>
          </div>
        </div>

        <div className="control-divider"></div>

        {/* 统计信息 */}
        <div className="control-section">
          <label className="section-label">使用统计</label>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">{stats.todayAnalysis}</div>
              <div className="stat-label">今日分析</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{stats.problemsSolved}</div>
              <div className="stat-label">解决问题</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{stats.learningTime}min</div>
              <div className="stat-label">学习时长</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
