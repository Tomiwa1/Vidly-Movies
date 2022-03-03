import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import MovieList from './Component/MovieList';

function App() {
  return (
    <div className="App">
      <main className="container">
        <MovieList />
      </main>
    </div>
  );
}

export default App;
