import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/layout/footer/Footer"; 
import Divneu from "./components/layout/navbar/Divneu";

function App() {
  return (
    <div className="main-container">
      <Divneu />
      <Footer />
      <footer>This is my footer</footer>
    </div>
  );
}

export default App;
