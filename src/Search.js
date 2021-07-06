import {useState} from 'react';
import axios from 'axios';
import Details from './Details';
const Search = () => {
  const [cityName, setCityName] = useState(null);
  const [name, setName] = useState(null);
  const [mainData, setMainData] = useState(null);
  const [IsPending, setIsPending] = useState(false);
  const [error, setError] = useState(true);

  let data;

  const handelOnChange = (e) => {
    setCityName(e.target.value);
  };

  const handelOnClick = (e) => {
    setIsPending(true);
    try {
      if (!cityName) throw new Error('Please enter a city name');
    } catch (err) {
      setIsPending(false);
      setError('Error Ocurred! Try Again...');
    }
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=65bd94edd330fcf61fa67b120888b455&units=metric`
      )
      .then((response) => {
        if (response.data.cod !== 200)
          throw new Error("Can't fetch the data you want... ");
        setError(false);
        setIsPending(false);
        data = response.data.main;
        setName(response.data.name);
        setMainData(data);
        document.querySelector('input').value = '';
        setCityName('');
      })
      .catch((errr) => {
        setError('Error Ocurred! Try Again...');
        setIsPending(false);
        setMainData(null);
      });
    setError(false);
    setMainData(null);
  };
  return (
    <div className='search-container'>
      <input
        type='text'
        className='search-input'
        placeholder='Enter yout city name'
        onChange={handelOnChange}
      />
      <button onClick={handelOnClick}>Check</button>

      <br />
      {mainData && (
        <Details cityName={cityName} mainData={mainData} name={name} />
      )}
      {IsPending && <div>Loading... </div>}
      {error && <h4> {error}</h4>}
      <br />
    </div>
  );
};

export default Search;
