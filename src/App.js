import './App.css';
import SearchBar  from './Components/SearchBar'
import BookData from './helpers/Data.json'
function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter Boooks" data={BookData}/>
    </div>
  );
}

export default App;
