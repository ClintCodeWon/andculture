import React, {useEffect, useState} from 'react';
import './App.css';
import BreweryCard from './BreweryCard/BreweryCard';
import Grid from '@material-ui/core/Grid';
import BreweryMap from './BreweryCard/BreweryMap';


export type Brewery = {
  id: number | string, 
  name: string,
  brewery_type: string,
  street: string,
  address_2: string | null,
  address_3: string | null, 
  city: string,
  country_province? : string | null, 
  state: string,
  postal_code: string,
  country: string,
  latitude: string,
  longitude: string,
  phone: string,
  updated_at: string,
  created_at: string,
  website_url: string
}

function App() {

  const [brewData, setBrewData] = useState([] as Brewery[]);
  const [brewSearch, setBrewSearch] = useState('');

  const loadAllBrew = async () => {
    const result = await fetch(`https://api.openbrewerydb.org/breweries?per_page=25`);
    const json = await result.json();
    setBrewData(json);
    console.log(json);
  }

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let form = e.target as HTMLFormElement
    console.log('searching for ', brewSearch);
    let resp = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${brewSearch}`);
    let json = await resp.json();
    console.log('new resp', json);
    setBrewData(json);

  };
  const handleChange = (e: React.ChangeEvent) => {
    let form = e.target as HTMLFormElement;    
    setBrewSearch(form.value);
  };
  

  useEffect(() => {
    loadAllBrew();
  }, []);

  return (
    <div className="App">
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <h2>Search for Beer: </h2>
        <input type="text" value={brewSearch} required onChange={(e) => {handleChange(e)}}></input>
        <input type="submit" value="SEARCH"/>
      </form>

      <br></br>
      <br></br>
      <div>
      <Grid 
        container 
        spacing={3} 
        direction="row"
        justifyContent="center"
        alignItems="center">
        {brewData?.map(brewery => (
          <Grid item key={brewery.id} xs={12} sm={4}>
            <BreweryCard data={brewery} />
          </Grid>
        ))}
      </Grid>
      </div>
    </div>
  );
}

export default App;
