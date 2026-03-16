import { useState } from 'react';
import CodeEditor from '../components/CodeEditor/CodeEditor';
import ControlPanel from '../components/ControlPanel/ControlPanel';
import ErrorPanel from '../components/ErrorPanel/ErrorPanel';
import ExplanationPanel from '../components/ExplanationPanel/ExplanationPanel';
import TeachingPanel from '../components/TeachingPanel/TeachingPanel';
import Header from '../components/Header/Header';
import './MainPage.css';

export interface CodeSuggestion {
  id: string;
  title: string;
  description: string;
  type: 'error' | 'warning' | 'info' | 'suggestion';
  line?: number;
  code?: string;
  message?: string;
}

function MainPage() {
  const [code, setCode] = useState<string>('function add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(10, 20));');
  const [language, setLanguage] = useState<string>('javascript');
  const [analysisResults, setAnalysisResults] = useState<CodeSuggestion[]>([]);
  const [explanation, setExplanation] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code, language: language })
      });
      const data = await response.json();
      if (data.success) {
        setAnalysisResults(data.results || []);
      }
    } catch (error) {
      console.error('分析失败:', error);
      setAnalysisResults([{
        id: '1',
        type: 'error',
        title: '连接错误',
        description: '无法连接到后端服务器',
        line: 1
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code, language: language })
      });
      const data = await response.json();
      if (data.success) {
        setExplanation(data.explanation || '');
      }
    } catch (error) {
      console.error('解释失败:', error);
      setExplanation('无法连接到后端服务器');
    } finally {
      setLoading(false);
    }
  };

  const handleTeachMe = async (topic: string) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/teach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topic, level: 'beginner' })
      });
      const data = await response.json();
      if (data.success) {
        console.log('教学成功:', data.lesson);
      }
    } catch (error) {
      console.error('教学失败:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-page">
      <Header />
      <div className="main-content">
        <ControlPanel
          language={language}
          onLanguageChange={setLanguage}
          onAnalyze={handleAnalyze}
          onExplain={handleExplain}
          onTeachMe={handleTeachMe}
        />
        <CodeEditor
          code={code}
          language={language}
          onChange={setCode}
        />
        <div className="right-panel">
          <ErrorPanel results={analysisResults} />
          <ExplanationPanel explanation={explanation} />
          <TeachingPanel onTeachMe={handleTeachMe} />
        </div>
      </div>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <div className="loading-text">AI 处理中...</div>
        </div>
      )}
    </div>
  );
}

export default MainPage;
