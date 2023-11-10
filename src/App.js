import logo from './logo.svg';
import './App.css';
import { Data } from './components/Data/Data';
import { Loading } from './components/Loading/Loading';
import { Error } from './components/Error';

function App() {
  return (
    <>
      <Data/>
      <Error/>
      <Loading/>
    </>
  );
}

export default App;
