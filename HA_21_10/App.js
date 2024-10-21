import logo from './logo.svg';
import './App.css';

function App() {
  var begruessung = "Hallo ich bin der neue";
  return (
    <>
    <h1>Willkommen zu meiner ersten React-App</h1>
    <h2>{begruessung}</h2>  
    <h3>Ergebnis: aus 2+2 ist {2+2}</h3>
    </>
  );
}

export default App;
