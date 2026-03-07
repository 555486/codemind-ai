import { CodeSuggestion } from '../../pages/MainPage/MainPage';
import './CodeSuggestions.css';

interface CodeSuggestionsProps {
  code: string;
  language: string;
  suggestions?: CodeSuggestion[];
}

function CodeSuggestions({ suggestions = [] }: CodeSuggestionsProps) {
  if (suggestions.length === 0) {
    return (
      <div className="code-suggestions glass-panel">
        <div className="suggestions-header">
          <div className="suggestions-title">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.66347 17H14.3365C14.7628 17 15.1667 16.8127 15.4365 16.4809L17.954 13.3826C18.2886 12.9705 18.2255 12.3629 17.8134 12.0283C17.7366 11.966 17.6532 11.9125 17.564 11.8684L12.8909 9.56201C12.4788 9.35901 11.9833 9.53095 11.7803 9.94306C11.7362 10.0323 11.7056 10.1264 11.689 10.2235L11.3953 11.938C11.3431 12.2426 11.0562 12.4486 10.7516 12.3964C10.7025 12.388 10.6542 12.3754 10.6073 12.3588L6.43653 10.888C6.00761 10.7368 5.53929 10.9624 5.38811 11.3913C5.33519 11.5414 5.31807 11.7017 5.33843 11.8571L6.29999 19.1999C6.35805 19.6433 6.76326 19.958 7.20666 19.9001C7.25411 19.8939 7.30066 19.883 7.34583 19.8676L12.0189 18.2776C12.431 18.1376 12.6541 17.6896 12.5141 17.2775C12.4916 17.2111 12.4586 17.1485 12.4164 17.0919L9.66347 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 22C10 22 15 21 18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>AI 代码建议</span>
          </div>
        </div>
        <div className="suggestions-empty">
          <div className="empty-icon">💡</div>
          <p>点击"分析代码"获取 AI 建议</p>
          <span>优化代码质量、性能和最佳实践</span>
        </div>
      </div>
    );
  }

  return (
    <div className="code-suggestions glass-panel">
      <div className="suggestions-header">
        <div className="suggestions-title">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.66347 17H14.3365C14.7628 17 15.1667 16.8127 15.4365 16.4809L17.954 13.3826C18.2886 12.9705 18.2255 12.3629 17.8134 12.0283C17.7366 11.966 17.6532 11.9125 17.564 11.8684L12.8909 9.56201C12.4788 9.35901 11.9833 9.53095 11.7803 9.94306C11.7362 10.0323 11.7056 10.1264 11.689 10.2235L11.3953 11.938C11.3431 12.2426 11.0562 12.4486 10.7516 12.3964C10.7025 12.388 10.6542 12.3754 10.6073 12.3588L6.43653 10.888C6.00761 10.7368 5.53929 10.9624 5.38811 11.3913C5.33519 11.5414 5.31807 11.7017 5.33843 11.8571L6.29999 19.1999C6.35805 19.6433 6.76326 19.958 7.20666 19.9001C7.25411 19.8939 7.30066 19.883 7.34583 19.8676L12.0189 18.2776C12.431 18.1376 12.6541 17.6896 12.5141 17.2775C12.4916 17.2111 12.4586 17.1485 12.4164 17.0919L9.66347 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 22C10 22 15 21 18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>AI 代码建议 ({suggestions.length})</span>
        </div>
        <button className="clear-btn" onClick={() => {}}>
          清空
        </button>
      </div>
      <div className="suggestions-list">
        {suggestions.map((suggestion, index) => (
          <div key={suggestion.id || index} className="suggestion-item">
            <div className="suggestion-header">
              <div className="suggestion-icon">✨</div>
              <h4 className="suggestion-title">{suggestion.title}</h4>
            </div>
            <p className="suggestion-description">{suggestion.description}</p>
            {suggestion.code && (
              <pre className="suggestion-code">
                <code>{suggestion.code}</code>
              </pre>
            )}
            <div className="suggestion-actions">
              <button className="apply-btn">应用建议</button>
              <button className="dismiss-btn">忽略</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CodeSuggestions;
