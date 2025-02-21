import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';


const History = ({ history, onClearHistory }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Texte copié dans le presse-papier !');
    }).catch(err => console.error('Erreur de copie :', err));
  };

  const shareOnFacebook = (text) => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}&quote=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };
    return (

      
      <div className="history">
        <div className="history-header">
          <h2>Historique</h2>
          
        </div>
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              <strong>{item.operation === 'encrypt' ? 'Crypté' : 'Décrypté'} :</strong>
              <span><strong>Entrée : </strong> {item.input} <FontAwesomeIcon icon={faCopy} onClick={() => copyToClipboard(item.input)} className="copy-button" /></span>
              <span><strong>Sortie : </strong> {item.output} <FontAwesomeIcon icon={faCopy} onClick={() => copyToClipboard(item.output)} className="copy-button" /></span>
              <span><strong>Clé : </strong> {item.key}</span>
              <button
              onClick={() => shareOnFacebook(`Entrée : ${item.input}\nSortie : ${item.output}\nClé : ${item.key}`)}
              className="share-button"
            >
              Partager sur Facebook
            </button>

            </li>
          ))}
        </ul>
        { history.length > 0 && <button onClick={onClearHistory} className="clear-button">
            clear All
          </button>}
      </div>
    );
  };
  
  export default History;