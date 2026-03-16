import { useRef, useCallback } from 'react';
import Editor, { OnMount, OnChange } from '@monaco-editor/react';
import './CodeEditor.css';

interface CodeEditorProps {
  code: string;
  language: string;
  onChange: (value: string) => void;
  onErrorHighlight?: (lineNumber: number) => void;
}

const languageMap: Record<string, string> = {
  c: 'c',
  cpp: 'cpp',
  javascript: 'javascript',
  typescript: 'typescript',
  python: 'python',
  html: 'html',
  css: 'css',
  java: 'java',
  go: 'go',
  rust: 'rust'
};

function CodeEditor({ code, language, onChange }: CodeEditorProps) {
  const editorRef = useRef<any>(null);

  // 复制代码功能
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      // 可以添加一个提示
      console.log('代码已复制到剪贴板');
    } catch (err) {
      console.error('复制失败:', err);
    }
  }, [code]);

  const handleEditorMount: OnMount = useCallback((editor, monaco) => {
    editorRef.current = editor;

    // 自定义主题
    monaco.editor.defineTheme('tech-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '6a9955', fontStyle: 'italic' },
        { token: 'string', foreground: 'ce9178' },
        { token: 'number', foreground: 'b5cea8' },
        { token: 'keyword', foreground: '569cd6' },
        { token: 'type', foreground: '4ec9b0' },
        { token: 'function', foreground: 'dcdcaa' },
        { token: 'variable', foreground: '9cdcfe' },
        { token: 'operator', foreground: 'd4d4d4' },
      ],
      colors: {
        'editor.background': '#0f172a',
        'editor.lineHighlightBackground': 'rgba(0, 212, 255, 0.15)',
        'editorCursor.foreground': '#00ff88',
        'editor.selectionBackground': 'rgba(0, 212, 255, 0.3)',
        'editorLineNumber.foreground': '#475569',
        'editorLineNumber.activeForeground': '#00d4ff',
        'editorWhitespace.foreground': '#475569',
      }
    });

    monaco.editor.setTheme('tech-dark');

    // 编辑器配置 - 禁用所有可能导致跳转的功能
    editor.updateOptions({
      minimap: { enabled: false },
      fontSize: 14,
      lineNumbers: 'on',
      renderWhitespace: 'selection',
      automaticLayout: true,
      scrollBeyondLastLine: false,
      padding: { top: 16, bottom: 16 },
      wordWrap: 'on',
      // 禁用所有可能导致跳转的功能
      suggestOnTriggerCharacters: false,
      quickSuggestions: false,
      hover: { enabled: false },
      links: false,
      linkedEditing: false,
      folding: false,
      glyphMargin: false,
      occurrencesHighlight: 'off' as const,
      selectionHighlight: false,
      find: {
        addExtraSpaceOnTop: false,
        autoFindInSelection: 'never',
        seedSearchStringFromSelection: 'never'
      },
      contextmenu: false,
      rulers: [],
    });

    // 禁用所有代码诊断和跳转
    monaco.editor.setModelMarkers(editor.getModel()!, [], []);
  }, []);

  const handleEditorChange: OnChange = useCallback((value) => {
    if (value !== undefined) {
      onChange(value);
    }
  }, [onChange]);

  const monacoLanguage = languageMap[language] || 'plaintext';

  return (
    <div className="code-editor-container glass-panel">
      <div className="editor-header">
        <div className="language-info">
          <div className="language-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="language-name">{language}</div>
          <div className="code-stats">{code.split('\n').length} 行</div>
        </div>
        <div className="editor-actions">
          <button className="action-btn" title="格式化代码">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 4H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>格式化</span>
          </button>
          <button className="action-btn" title="复制代码" onClick={handleCopy}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>复制</span>
          </button>
        </div>
      </div>
      <div className="editor-wrapper">
        <Editor
          height="100%"
          language={monacoLanguage}
          value={code}
          onChange={handleEditorChange}
          onMount={handleEditorMount}
          theme="tech-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            renderWhitespace: 'selection',
            automaticLayout: true,
            scrollBeyondLastLine: false,
            padding: { top: 16, bottom: 16 },
            wordWrap: 'on',
            tabSize: 2,
            // 禁用 Monaco 自带的代码检查和提示
            suggestOnTriggerCharacters: false,
            quickSuggestions: false,
            hover: { enabled: false },
            links: false,
            folding: false,
            glyphMargin: false,
            formatOnPaste: true,
            formatOnType: true,
          }}
        />
      </div>
    </div>
  );
}

export default CodeEditor;
