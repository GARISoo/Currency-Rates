import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../ActiveCurrencies/ActiveCurrencies.module.scss';
import '../../App.scss';
import { AppDispatch } from '../../store';
import { newChosenCurrency } from '../../ReduxSlices/SpecificCurrency';

type ClickableCurrencyProps = {
  name: string,
  value: number,
  token: string,
}

const ClickableCurrency = ({ name, value, token }: ClickableCurrencyProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="data tooltip" onClick={() => dispatch(newChosenCurrency(token))}>
      <span>{token.toUpperCase()}</span>
      <span className={styles.value}>{value.toFixed(4)}</span>
      <div className="tooltip-text">
        <span>{name}</span>
        <span>{`${value}${token.toUpperCase()}`}</span>
      </div>
    </div>
  );
};

export default ClickableCurrency;
