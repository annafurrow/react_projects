import 'bootstrap/dist/js/bootstrap.js';
import 'bootswatch/dist/minty/bootstrap.min.css';
import Header from './components/Header';
import LibraryPortal from './components/LibraryPortal';

function App() {
  return (
    <div className="App">
      <Header />
      <br/> 
      <div className = "container">
        <LibraryPortal />
      </div>
    </div>
  );
}

export default App;
