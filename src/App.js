
import './App.css';
import Navbar from './components/navBar/Navbar';
import Searchbar from './components/searchBar/Searchbar';
import Container from './containers/Container';
import {useState , useEffect } from 'react';
function App() {
  // states
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState('dark');

  // custom functions
  const onSearchChange = (event) => {
    setSearch(event.target.value);
  }
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  // fetch countries
  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name,capital,population,region,flags')
    .then(res => res.json())
    .then(data => setCountries(data))
    console.log('ran the effect');
  } , [])

  // filter countries
  const filteredCountries = countries.filter(country => {
    return country.name.toLowerCase().includes(search.toLowerCase())
  } )


  return (
    <div  
        className=
        {
        theme === 'light' ? 
        'App-light App' :
        'App-dark App'
        }>

        <Navbar theme={theme} toggleTheme={toggleTheme}/>

        <Searchbar theme={theme} onSearchChange = {onSearchChange}/>
        {
          filteredCountries.length > 0 ? <Container  theme={theme} countries = {filteredCountries}/> : <h1 className='message'>Opps! Seems like we don't have any countries to show</h1>
        }
     
    </div>
  );
}

export default App;
