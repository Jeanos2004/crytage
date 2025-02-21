const ProgressBar = ({ keyStrength }) => {
    let color, width, strengthText;
  
    if (keyStrength <= 5) {
      color = 'red';
      width = '33%';
      strengthText = 'Faible';
    } else if (keyStrength <= 10) {
      color = 'yellow';
      width = '66%';
      strengthText = 'Moyenne';
    } else {
      color = 'green';
      width = '100%';
      strengthText = 'Forte';
    }
  
    return (
      <div className="progress-bar-container">
         <span className="strength-text"><strong>Securisation : </strong>{strengthText}</span>
        <div
          className="progress-bar"
          style={{
            width: width,
            backgroundColor: color,
          }}
        ></div>
       
      </div>
    );
  };
  
  export default ProgressBar;