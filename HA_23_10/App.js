import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/layout/footer/Footer"; 
import Divneu from "./components/layout/navbar/Divneu";
import CustomTextField from "./components/CustomTextField";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="main-container">
      <Divneu />
      
      <div style={{ padding: '20px' }}>
        <h1>Custom Text Field Example</h1>
        <CustomTextField
          placeholder="Enter some text..."
          value={text}
          onChange={handleInputChange}
        />
        <p>You typed: {text}</p>
      </div>

      <Footer />
      <footer>This is my footer</footer>
    </div>
  );
}

export default App;