import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import Movies from './components/movies/Movies';
import Books from './components/books/Books';
import Footer from './components/footer/Footer'
import './App.css'



function App() {
  return (
    <div className="App">
        <Header className="header"/>
        <Portfolio className="portfolio" />
        <Movies className="movies"/>
        <Books className="books"/>
        <Footer className="footer"/>
    </div>
  );
}

export default App;
