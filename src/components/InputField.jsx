const InputField = ({ value, onChange }) => {
    return (
      <textarea
        value={value}
        onChange={onChange}
        placeholder="Entrez le texte à crypter/décrypter"
      />
    );
  };
  
  export default InputField;