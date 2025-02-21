const SelectOperation = ({ value, onChange }) => {
    return (
      <select value={value} onChange={onChange}>
        <option value="encrypt">Crypter</option>
        <option value="decrypt">Décrypter</option>
      </select>
    );
  };
  
  export default SelectOperation;