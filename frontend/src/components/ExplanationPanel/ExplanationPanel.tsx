import './ExplanationPanel.css';

interface ExplanationPanelProps {
  explanation: string;
}

const ExplanationPanel: React.FC<ExplanationPanelProps> = ({ explanation }) => {
  if (!explanation) {
    return (
      <div className="explanation-panel empty">
        <div className="empty-state">
          <div className="empty-icon">🤖</div>
          <h4>AI代码解释</h4>
          <p>点击"解释代码"按钮获取AI分析</p>
        </div>
      </div>
    );
  }

  return (
    <div className="explanation-panel">
      <div className="panel-header">
        <h3>🧠 AI解释</h3>
      </div>
      <div className="explanation-content">
        <div className="explanation-text">{explanation}</div>
      </div>
    </div>
  );
};

export default ExplanationPanel;