import './App.css';
import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchConfiguration} from "./redux/actions/configuration";
import {fetchLoan} from "./redux/actions/loan";
import Calculator from "./components/Calculator";
import ContentWrapper from "./components/ContentWrapper";
import LoanDetail from "./components/LoanDetail";
import Grid from "@material-ui/core/Grid";

function App() {

  const dispatch = useDispatch();
  const configuration = useSelector(state => state.configuration);
  const loan = useSelector(state => state.loan);

  const {loanStatus, loanObject} = loan;
  const {configurationStatus, configurationObject} = configuration;
  const {amountInterval, termInterval} = configurationObject;
  const initAmount = amountInterval?.defaultValue;
  const initTerm = termInterval?.defaultValue;

  const [lastAmount, setLastAmount] = useState(0);
  const [lastTerm, setLastTerm] = useState(0);
  const [initFetching, setInitFetching] = useState(true);

  useEffect(() => {
    dispatch(fetchConfiguration());
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchLoan(initAmount,initTerm));
    setLastAmount(initAmount);
    setLastTerm(initTerm);
  }, [configurationObject])

  useEffect(() => {
    if (initFetching) {
      setInitFetching(false);
    }
  }, [loanObject])

  // const changeAmount = useCallback(amount => () => {
  //   console.log(amount, lastAmount);
  //   if (amount !== lastAmount) {
  //     setLastAmount(amount);
  //     dispatch(fetchLoan(amount, lastTerm))
  //   }
  // }, [])
  //
  // const changeTerm = useCallback(term => () => {
  //   console.log(term, lastTerm)
  //   if (term !== lastTerm) {
  //     setLastTerm(term);
  //     dispatch(fetchLoan(lastAmount, term))
  //   }
  // }, [])

  const changeAmount = amount => {
    if (amount !== lastAmount) {
      setLastAmount(amount);
      dispatch(fetchLoan(amount, lastTerm))
    }
  };

  const changeTerm = term => {
    if (term !== lastTerm) {
      setLastTerm(term);
      dispatch(fetchLoan(lastAmount, term))
    }
  };

  return (
        <Grid container justifyContent="center" alignItems="center" direction="column" style={{height: "100vh"}}>
          <Grid>
            <ContentWrapper initFetching={initFetching} deps={[loanStatus, configurationStatus]}>
              <Calculator
                  changeTerm={changeTerm}
                  changeAmount={changeAmount}
                  {...configurationObject}
              />
              <LoanDetail {...loanObject} />
            </ContentWrapper>
          </Grid>
        </Grid>
  );
}

export default App;
