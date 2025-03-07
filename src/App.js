import './App.css';
import Calculator from './components/calculator/calculator';
import Footer from './components/footer/footer';
import Header from './components/header/header';

function App() {
  return (
    <div className="containerApp">
      <Header />
      <div className="calculator">
        <Calculator />
      </div>
      <Footer />
    </div>
  );
}

export default App;
