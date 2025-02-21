const KeyInput = ({ value, onChange }) => {
    return (
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder="Clé de cryptage (décalage)"
        min="1"
      />
    );
  };
  
  export default KeyInput;