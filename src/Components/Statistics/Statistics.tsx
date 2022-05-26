import { useSelector } from 'react-redux';
import { dateFinder } from '../../Data/date';
import { useGetSpecificDateDataQuery } from '../../ReduxSlices/CurrencySlice';
import { RootState } from '../../store';
import styles from './Statistics.module.scss';

type StatisticsProp = {
    baseCurr: string,
}

const Statistics = ({ baseCurr }: StatisticsProp) => {
  const chosenCurr = useSelector((state: RootState) => state.chosenCurr.chosenCurrency);
  const today = useGetSpecificDateDataQuery(`${dateFinder(0)}/currencies/${baseCurr}`);
  const dayAgo = useGetSpecificDateDataQuery(`${dateFinder(1)}/currencies/${baseCurr}`);
  const weekAgo = useGetSpecificDateDataQuery(`${dateFinder(7)}/currencies/${baseCurr}`);
  const monthAgo = useGetSpecificDateDataQuery(`${dateFinder(30)}/currencies/${baseCurr}`);
  const twoMonthAgo = useGetSpecificDateDataQuery(`${dateFinder(60)}/currencies/${baseCurr}`);

  const checking = () => (
    twoMonthAgo.isFetching || monthAgo.isFetching || weekAgo.isFetching || dayAgo.isFetching
    || today.isError || twoMonthAgo.isError || monthAgo.isError || weekAgo.isError || dayAgo.isError || today.isError
  );

  return (
    checking()
      ? (
        <div className={styles.statistics}>
          <h4><i>no data available...</i></h4>
        </div>
      ) : (
        <div className={styles.statistics}>
          <h3>{`Rate Statistics (for 1 ${baseCurr.toUpperCase()})`}</h3>
          <p className={styles.stats}>
            {`Rate (2m): ${twoMonthAgo.data[baseCurr][chosenCurr]}${chosenCurr.toUpperCase()}`}
          </p>
          <p className={styles.stats}>
            {`Rate (1m): ${monthAgo.data[baseCurr][chosenCurr]}${chosenCurr.toUpperCase()}`}
          </p>
          <p className={styles.stats}>
            {`Rate (1w): ${weekAgo.data[baseCurr][chosenCurr]}${chosenCurr.toUpperCase()}`}
          </p>
          <p className={styles.stats}>
            {`Rate (1d): ${dayAgo.data[baseCurr][chosenCurr]}${chosenCurr.toUpperCase()}`}
          </p>
          <hr className={styles.statsHr} />
          <p className={styles.stats}>
            <b>
              {`Today: ${today.data[baseCurr][chosenCurr]}${chosenCurr.toUpperCase()}`}
            </b>
          </p>
        </div>
      ));
};

export default Statistics;
