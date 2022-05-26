import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Currency Exchange Rates</h1>
      <div className={styles.pics}>
        <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg" alt="btc" className={styles.btc} />
        <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg" alt="eth" className={styles.eth} />
        <img src="https://cryptologos.cc/logos/cardano-ada-logo.svg" alt="ada" className={styles.ada} />
        <img src="https://cryptologos.cc/logos/terra-luna-luna-logo.svg" alt="luna" className={styles.luna} />
        <img src="https://cryptologos.cc/logos/crypto-com-coin-cro-logo.svg" alt="ada" className={styles.cro} />
      </div>
      <button onClick={() => navigate('/currencies')}>Launch App</button>
    </div>
  );
};

export default HomePage;
