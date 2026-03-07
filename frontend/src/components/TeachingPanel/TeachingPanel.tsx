import { useState } from 'react';
import './TeachingPanel.css';

interface TeachingPanelProps {
  onTeachMe: (topic: string) => void;
}

const commonTopics = [
  { icon: '📚', title: '基础语法', topics: ['变量', '数据类型', '函数', '循环'] },
  { icon: '🎯', title: '核心概念', topics: ['闭包', '原型链', '异步编程', '模块'] },
  { icon: '⚡', title: '进阶主题', topics: ['设计模式', '性能优化', '内存管理', '调试技巧'] },
  { icon: '🔧', title: '实用工具', topics: ['调试', '测试', '构建工具', '包管理'] },
];

function TeachingPanel({ onTeachMe }: TeachingPanelProps) {
  const [customTopic, setCustomTopic] = useState('');
  const [learningLevel, setLearningLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customTopic.trim()) {
      onTeachMe(customTopic);
      setCustomTopic('');
    }
  };

  const handleQuickTopic = (topic: string) => {
    onTeachMe(topic);
  };

  return (
    <div className="teaching-panel glass-panel">
      <div className="teaching-header">
        <div className="teaching-title">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 10V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 10C22 10 18 16 12 16C6 16 2 10 2 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>AI 教学</span>
        </div>
      </div>
      <div className="teaching-content">
        {/* 学习级别选择 */}
        <div className="level-selector">
          <label className="level-label">学习级别:</label>
          <div className="level-buttons">
            <button
              className={`level-btn ${learningLevel === 'beginner' ? 'active' : ''}`}
              onClick={() => setLearningLevel('beginner')}
            >
              入门
            </button>
            <button
              className={`level-btn ${learningLevel === 'intermediate' ? 'active' : ''}`}
              onClick={() => setLearningLevel('intermediate')}
            >
              进阶
            </button>
            <button
              className={`level-btn ${learningLevel === 'advanced' ? 'active' : ''}`}
              onClick={() => setLearningLevel('advanced')}
            >
              高级
            </button>
          </div>
        </div>

        {/* 自定义主题输入 */}
        <form onSubmit={handleSubmit} className="topic-form">
          <input
            type="text"
            className="topic-input"
            placeholder="输入想学习的主题..."
            value={customTopic}
            onChange={(e) => setCustomTopic(e.target.value)}
          />
          <button type="submit" className="topic-submit" disabled={!customTopic.trim()}>
            开始学习
          </button>
        </form>

        {/* 快速主题 */}
        <div className="quick-topics-section">
          <h3 className="section-title">快速入门</h3>
          {commonTopics.map((category, idx) => (
            <div key={idx} className="topic-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <span className="category-title">{category.title}</span>
              </div>
              <div className="category-topics">
                {category.topics.map((topic, tIdx) => (
                  <button
                    key={tIdx}
                    className="topic-chip"
                    onClick={() => handleQuickTopic(topic)}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 学习进度 */}
        <div className="learning-progress">
          <h3 className="section-title">学习进度</h3>
          <div className="progress-stats">
            <div className="progress-stat">
              <div className="stat-number">0</div>
              <div className="stat-label">已学主题</div>
            </div>
            <div className="progress-stat">
              <div className="stat-number">0</div>
              <div className="stat-label">学习时长</div>
            </div>
            <div className="progress-stat">
              <div className="stat-number">0</div>
              <div className="stat-label">掌握程度</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeachingPanel;
