import styles from './ActiveCurrencies.module.scss';
import { useGetAllCurrenciesQuery, useGetBaseCurrValuesQuery } from '../../ReduxSlices/CurrencySlice';
import ClickableCurrency from '../ClickableCurrencies/ClickableCurrency';

type CurrencyProp = {
  baseCurr: string,
}

const ActiveCurrencies = ({ baseCurr }: CurrencyProp) => {
  const activeCurrency = useGetBaseCurrValuesQuery(baseCurr);
  const { data } = useGetAllCurrenciesQuery();
  const gettingData = () => activeCurrency.isFetching || activeCurrency.isError;

  return (
    gettingData() ? <h1>Loading...</h1> : (
      <div className={styles.container}>
        {Object.keys(activeCurrency.data[baseCurr]).map((key) => {
          const curr = activeCurrency.data[baseCurr][key];

          return (
            <ClickableCurrency value={curr} token={key} name={data[key]} key={key} />
          );
        })}
      </div>
    )
  );
};

export default ActiveCurrencies;
