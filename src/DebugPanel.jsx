// DebugPanel.jsx

const DebugPanel = ({
  selectedText,
  animationConfigs,
  onConfigChange,
  onTextSelect,
  onSave,
}) => {
  const handleSave = () => {
    onSave();
    window.location.reload();
  };

  return (
    <div style={debugPanel}>
      <h2 style={debugTitle}>애니메이션 디버그 패널</h2>

      <div style={inputGroup}>
        <label style={labelStyle}>텍스트 선택</label>
        <select
          value={selectedText}
          onChange={(e) => onTextSelect(e.target.value)}
          style={selectStyle}
        >
          {Object.keys(animationConfigs).map((key) => (
            <option key={key} value={key}>
              텍스트 {key}
            </option>
          ))}
        </select>
      </div>

      <div style={inputGroup}>
        <label style={labelStyle}>Duration (초)</label>
        <input
          type='number'
          value={animationConfigs[selectedText].duration}
          onChange={(e) => onConfigChange('duration', e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={inputGroup}>
        <label style={labelStyle}>Y 오프셋 (px)</label>
        <input
          type='number'
          value={animationConfigs[selectedText].y}
          onChange={(e) => onConfigChange('y', e.target.value)}
          style={inputStyle}
        />
      </div>

      <button onClick={handleSave} style={buttonStyle}>
        설정 저장하기
      </button>

      <div style={configDisplay}>
        현재 설정: {JSON.stringify(animationConfigs[selectedText], null, 2)}
      </div>
    </div>
  );
};

const debugPanel = {
  position: 'fixed',
  top: '16px',
  right: '16px',
  backgroundColor: 'white',
  padding: '16px',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  width: '300px',
};

const debugTitle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '16px',
};

const inputGroup = {
  marginBottom: '16px',
};

const labelStyle = {
  display: 'block',
  fontSize: '14px',
  fontWeight: '500',
  marginBottom: '8px',
  color: '#333',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '14px',
};

const selectStyle = {
  ...inputStyle,
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 8px center',
  paddingRight: '24px',
};

const buttonStyle = {
  width: '100%',
  padding: '8px 16px',
  backgroundColor: '#007AFF',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px',
  marginBottom: '16px',
};

const configDisplay = {
  fontSize: '12px',
  color: '#666',
  whiteSpace: 'pre-wrap',
};

export default DebugPanel;
