import { useEffect, useState } from 'react'


const generatorScript = () => {
    const [sliderValue, setSliderValue] = useState(4);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
    const [isCopiedVisible, setIsCopiedVisible] = useState(false);
    const [strength, setStrength] = useState(0);
    const [generatedPassword, setGeneratedPassword] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {
        updateStrength();


      }, [generatedPassword]);


      const updateStrength = () => {
        // Calculate strength based on your criteria
        const calculatedStrength = calculateStrength(generatedPassword.length);
        setStrength(calculatedStrength);
      };
    
      const calculateStrength = (length: number) => {
        // Implement your own logic to calculate strength based on the length
        
        if(length === 0){
            return -1;
        }else if (length < 6) {
          return 0; // Too Weak
        } else if (length < 9) {
          return 1; // Weak
        } else if (length < 12) {
          return 2; // Medium
        } else {
          return 3; // Strong
        }
      };

      const getSignalText = (strength: number) => {
        switch (strength) {
          case 0:
            return "Too Weak!!!";
          case 1:
            return "Weak";
          case 2:
            return "Medium";
          case 3:
            return "Strong";
          default:
            return "Signal";
        }
      };

  
    const handleSliderChange = (event: { target: { value: string } }) => {
      const value = parseInt(event.target.value, 10);
      setSliderValue(value);
    };
    
    const getTrackColor = () => {
      const percentage = ((sliderValue - 4) / (16 - 4)) * 100;
      return `linear-gradient(90deg, #A4FFAF ${percentage}%, #18171F ${percentage}%)`;
    };


    

    const handleCheckboxChange = (checkboxType: string) => {
        switch (checkboxType) {
          case 'uppercase':
            setIncludeUppercase(!includeUppercase);
            break;
          case 'lowercase':
            setIncludeLowercase(!includeLowercase);
            break;
          case 'numbers':
            setIncludeNumbers(!includeNumbers);
            break;
          case 'symbols':
            setIncludeSymbols(!includeSymbols);
            break;
          default:
            break;
        }
      };

      const copyToClipboard = () => {
        if (generatedPassword) {
          navigator.clipboard.writeText(generatedPassword);
          setIsCopiedVisible(true);
    
          // Hide the "copied" text after a brief delay (e.g., 2 seconds)
          setTimeout(() => {
            setIsCopiedVisible(false);
          }, 2000);
        }
      };
  
    const generatePassword = () => {
        const selectedOptions = includeUppercase || includeLowercase || includeNumbers || includeSymbols;


        if (!selectedOptions) {
            setError('Please check at least one option.');
            return '';
          }
          
      const characters = buildCharacterList();
      let password = '';
      for (let i = 0; i < sliderValue; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }
      setGeneratedPassword(password);
      setIsPasswordGenerated(true);

    };

    const buildCharacterList = () => {
        let characters = '';
        if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
        if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeNumbers) characters += '0123456789';
        if (includeSymbols) characters += '!@#$%^&*()_+';
        return characters;
      };
  
    return {
      sliderValue,
      generatedPassword,
      handleSliderChange,
      generatePassword,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
      handleCheckboxChange,
      isPasswordGenerated,
      copyToClipboard,
      error,
      isCopiedVisible,
      strength,
      getSignalText,
      getTrackColor,



    };
  };
export default generatorScript
