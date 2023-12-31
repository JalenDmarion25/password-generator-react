import '../CSS/passwordGenerator.css';
import scriptGenerator from './generatorScript';

const passwordGenerator = () => {

  const {
    sliderValue,
    generatedPassword,
    handleSliderChange,
    generatePassword,
    isPasswordGenerated,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    handleCheckboxChange,
    copyToClipboard,
    isCopiedVisible,
    strength,
    getSignalText,
    getTrackColor 

    
    

  } = scriptGenerator();


  return (
    <section className="main-container">
              <h1>Password Generator</h1>

      <div className="the-generator">
        <div className="screen flex">
        
        <span className={`password-text ${isPasswordGenerated ? 'password-white-text' : ''}`}>
          {generatedPassword || 'P4$5W0rD!'}</span>
          <div className="clipboard flex" onClick={copyToClipboard}>
          <span className={`copied-text ${isCopiedVisible ? 'visible' : ''}`}>copied</span>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
                fill="#A4FFAF"
              />
            </svg>
          </div>
        </div>
        <div>
          <div className="interface">
            <div className="character-length flex">
              <span className="char-length-text">Character Length</span>
              <span className="length-count-text">{sliderValue}</span>
            </div>
            <input
        type="range"
        min={4}
        max={16}
        value={sliderValue}
        onChange={handleSliderChange}
        className="slider"
        style={{ background: getTrackColor() }}
      />

<div className="checkbox-container flex">
        <label className="checkbox-item">
          Include Uppercase Letters
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => handleCheckboxChange('uppercase')}
        
          />
          <span className="custom-check"></span>
        </label>
        <label className="checkbox-item">
          Include Lowercase Letters
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => handleCheckboxChange('lowercase')}
          />
          <span className="custom-check"></span>
        </label>
        <label className="checkbox-item">
          Include Numbers
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => handleCheckboxChange('numbers')}
          />
          <span className="custom-check"></span>
        </label>
        <label className="checkbox-item">
          Include Symbols
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => handleCheckboxChange('symbols')}
          />
          <span className="custom-check"></span>
        </label>
      </div>





            <div className="strength-container flex">
              <span className="stength-text">Strength</span>

              <div className="bar-strength flex">
  <span className="signal-text">{getSignalText(strength)}</span>
  <span className={`bar-one bars ${strength === 0 ? 'too-weak' : strength === 1 ? 'weak': strength === 2 ? 'medium': strength === 3 ? 'strong': ''}`}></span>
  <span className={`bar-two bars ${strength === 1 ? 'weak' : strength === 2 ? 'medium' : strength === 3 ? 'strong' : ''}`}></span>
  <span className={`bar-three bars ${strength === 2 ? 'medium' : strength === 3 ? 'strong' : ''}`}></span>
  <span className={`bar-four bars ${strength >= 3 ? 'strong' : ''}`}></span>
</div>
            </div>
            <button className="gen-btn" onClick={generatePassword}>
              Generate
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#24232C"
                  d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default passwordGenerator;