import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllCurrenciesQuery } from '../../ReduxSlices/CurrencySlice';
import styles from './CurrencyPage.module.scss';
import Converter from '../../Components/Converter/Converter';
import Statistics from '../../Components/Statistics/Statistics';
import { RootState } from '../../store';
import ActiveCurrencies from '../../Components/ActiveCurrencies/ActiveCurrencies';

const CurrencyPage = () => {
  const { data } = useGetAllCurrenciesQuery();
  const nativeTokenArr = data && Object.getOwnPropertyNames(data);
  const [baseCurr, setBaseCurr] = useState('eur');
  const [converterVisibility, setConverterVisibility] = useState(false);
  const chosenCurr = useSelector((state: RootState) => state.chosenCurr.chosenCurrency);

  return (
    nativeTokenArr ? (
      <div className={styles.container}>
        {converterVisibility
          ? (
            <div
              className={styles.close}
              onClick={() => setConverterVisibility(!converterVisibility)}
            />
          ) : (
            <div
              className={styles.open}
              onClick={() => setConverterVisibility(!converterVisibility)}
            >
              Converter
            </div>
          )}
        {converterVisibility && <Converter />}
        <div className={styles.top}>
          {chosenCurr && <Statistics baseCurr={baseCurr} />}
          <div className={styles.selector}>
            <select defaultValue="" onChange={(e) => setBaseCurr(e.target.value)}>
              <option value="" disabled>Select</option>
              {nativeTokenArr && nativeTokenArr.map((el: string) => (
                <option value={el} key={el}>{el.toUpperCase()}</option>
              ))}
            </select>
          </div>
          <hr />
          <div className={styles.info}>
            <h5>Current base currency</h5>
            <h2>{`1 ${data[baseCurr]}`}</h2>
            <h2>=</h2>
          </div>
        </div>
        <ActiveCurrencies baseCurr={baseCurr} />
      </div>
    ) : <h1>Loading...</h1>);
};

export default CurrencyPage;
