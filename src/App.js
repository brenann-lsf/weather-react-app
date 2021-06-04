import './App.css';
import Row from "./Row";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="weather-app">
          <Form />
          <Row />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
