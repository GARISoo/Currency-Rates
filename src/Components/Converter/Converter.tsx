import { useState } from 'react';
import { useGetAllCurrenciesQuery, useGetComparisonQuery } from '../../ReduxSlices/CurrencySlice';
import styles from './Converter.module.scss';

const Converter = () => {
  const { data } = useGetAllCurrenciesQuery();
  const tokensArr = data && Object.getOwnPropertyNames(data);
  const [inputValue, setInputValue] = useState(1);
  const [firstToken, setFirstToken] = useState('');
  const [secondToken, setSecondToken] = useState('');
  const tokenInfo = useGetComparisonQuery(`${firstToken}/${secondToken}`);
  const checkBothInputs = () => firstToken && secondToken;
  const gettingData = () => tokenInfo.isFetching || tokenInfo.isError;
  const convertedValue = gettingData() ? '' : tokenInfo.data[secondToken] * inputValue;

  return (
    <div className={styles.container}>
      <h3>Convertor</h3>
      <p>Convert Your Favorite Currencies</p>
      <div className={styles.box}>
        <input
          type="number"
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <select
          defaultValue=""
          className={styles.select}
          onChange={(e) => setFirstToken(e.target.value)}
        >
          <option value="" disabled>Select</option>
          {tokensArr && tokensArr.map((el: string) => (
            <option value={el} key={el}>{el.toUpperCase()}</option>
          ))}
        </select>
      </div>
      <div className={styles.arrowBox}>
        <img src="https://www.svgrepo.com/show/22231/down-arrow.svg" alt="arrow" className={styles.arrow} />
      </div>
      <div className={styles.box}>
        <input
          type="number"
          readOnly
          className={styles.input}
          value={convertedValue}
        />
        <select
          defaultValue=""
          className={styles.select}
          onChange={(e) => setSecondToken(e.target.value)}
        >
          <option value="" disabled>Select</option>
          {tokensArr && tokensArr.map((el: string) => (
            <option value={el} key={el}>{el.toUpperCase()}</option>
          ))}
        </select>
      </div>
      {checkBothInputs() ? (
        <div>
          <p className={styles.names}>
            <i>
              {`${data[firstToken]} ---> ${data[secondToken]}`}
            </i>
          </p>
          <p className={styles.info}>
            <i>
              {`${inputValue}(${firstToken}) = ${convertedValue}(${secondToken})`}
            </i>
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Converter;
