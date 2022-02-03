import './App.css';
import {Title} from './components/title'
import {SearchForm} from './components/SearchForm'


function App() {
  return (
    <div className="App">
      <Title>Search Movies</Title>
      <div className='SearchForm-Wrapper'>
      <SearchForm/>
      </div>
      
    </div>
  );
}

export default App;
