
import './App.css';
import Navbar from './components/navBar/Navbar';
import Searchbar from './components/searchBar/Searchbar';
import Container from './containers/Container';
import {useState , useEffect} from 'react';
function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const onSearchChange = (event) => {
    setSearch(event.target.value);
  }

  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name,capital,population,region,flags')
    .then(res => res.json())
    .then(data => setCountries(data))
  } , [])



  const filteredCountries = countries.filter(country => {
    return country.name.toLowerCase().includes(search.toLowerCase())
  } )
  return (
    <div className="App">
      <Navbar/>
      <Searchbar onSearchChange = {onSearchChange}/>
      {
        filteredCountries.length > 0 ? <Container countries = {filteredCountries}/> : <h1 className='message'>Not found Try a different keyword</h1>
      }
     
    </div>
  );
}

export default App;
