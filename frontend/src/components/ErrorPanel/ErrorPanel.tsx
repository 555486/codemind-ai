import './ErrorPanel.css';

interface ErrorItem {
  type: 'error' | 'warning' | 'info';
  line: number;
  message: string;
}

interface ErrorPanelProps {
  results: ErrorItem[];
}

const ErrorPanel: React.FC<ErrorPanelProps> = ({ results }) => {
  if (results.length === 0) {
    return (
      <div className="error-panel empty">
        <div className="empty-state">
          <div className="empty-icon">✅</div>
          <h4>代码检查完成</h4>
          <p>未发现错误或警告</p>
        </div>
      </div>
    );
  }

  return (
    <div className="error-panel">
      <div className="panel-header">
        <h3>🔍 分析结果</h3>
      </div>
      <div className="error-list">
        {results.map((result, index) => (
          <div key={index} className={`error-item ${result.type}`}>
            <div className="error-type">{result.type.toUpperCase()}</div>
            <div className="error-line">第 {result.line} 行</div>
            <div className="error-message">{result.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ErrorPanel;