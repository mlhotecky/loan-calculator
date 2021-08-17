import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchConfiguration} from "./redux/actions/configuration";
import {fetchLoan} from "./redux/actions/loan";

function App() {

  const dispatch = useDispatch();
  const configuration = useSelector(state => state.configuration);
  const loan = useSelector(state => state.loan);

  useEffect(() => {
    dispatch(fetchConfiguration());
    dispatch(fetchLoan(1000, 5));
  }, [])

  useEffect(() => {
  console.log(configuration);
  }, [configuration])

  useEffect(() => {
  console.log(loan);
  }, [loan])

  return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
  );
}

export default App;
