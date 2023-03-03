import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './navigation/Navigation';
// import Footer from './components/footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>

  );
}

export default App;
