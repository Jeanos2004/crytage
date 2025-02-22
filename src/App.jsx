import { useState, useEffect } from 'react';
import InputField from './components/InputField';
import SelectOperation from './components/SelectOperation';
import Button from './components/Button';
import KeyInput from './components/KeyInput';
import History from './components/History';
import HeroSection from './components/HeroSection';
import './index.css';
import ProgressBar from './components/ProgressBar';

const App = () => {
  // Charger l'historique depuis le localStorage
  const loadHistory = () => {
    const savedHistory = localStorage.getItem('history');
    return savedHistory ? JSON.parse(savedHistory) : [];
  };

  const [inputText, setInputText] = useState('');
  const [operation, setOperation] = useState('encrypt');
  const [key, setKey] = useState(3);
  const [history, setHistory] = useState(loadHistory());

  // Sauvegarder l'historique dans le localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history));
  }, [history]);

  const handleEncryptDecrypt = () => {
    let result = '';

    for (let i = 0; i < inputText.length; i++) {
      let char = inputText[i];

      if (char.match(/[A-Z]/)) {
        const code = inputText.charCodeAt(i);
        let shiftedChar;
        if (operation === 'encrypt') {
          shiftedChar = String.fromCharCode(((code - 65 + key) % 26) + 65);
        } else {
          shiftedChar = String.fromCharCode(((code - 65 - key + 26) % 26) + 65);
        }
        result += shiftedChar;
      } else if (char.match(/[a-z]/)) {
        const code = inputText.charCodeAt(i);
        let shiftedChar;
        if (operation === 'encrypt') {
          shiftedChar = String.fromCharCode(((code - 97 + key) % 26) + 97);
        } else {
          shiftedChar = String.fromCharCode(((code - 97 - key + 26) % 26) + 97);
        }
        result += shiftedChar;
      } else if (char.match(/[0-9]/)) {
        const code = inputText.charCodeAt(i);
        let shiftedChar;
        if (operation === 'encrypt') {
          shiftedChar = String.fromCharCode(((code - 48 + key) % 10) + 48);
        } else {
          shiftedChar = String.fromCharCode(((code - 48 - key + 10) % 10) + 48);
        }
        result += shiftedChar;
      } else if (char === ' ' && operation=== 'encrypt') {
        result += '-';
      }else if(char === '-' && operation=== 'decrypt') {
        result += ' ';
      } else {
        result += char;
      }
    }


    const newHistoryEntry = { input: inputText, output: result, operation, key };
    setHistory([...history, newHistoryEntry]);
    setInputText(result);
  };

  // Effacer l'historique
  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('history');
  };

  return (
    <div className="app-container">
      <HeroSection />
      <div className="form-container">
        <h1>Application de Cryptage/Décryptage</h1>
        <InputField value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <KeyInput value={key} onChange={(e) => setKey(parseInt(e.target.value))} />
        <ProgressBar keyStrength={key} /> {/* Barre de progression */}
        <SelectOperation value={operation} onChange={(e) => setOperation(e.target.value)} />
        <Button onClick={handleEncryptDecrypt} />
        <History history={history} onClearHistory={clearHistory} />
      </div>
    </div>
  );
};

export default App;