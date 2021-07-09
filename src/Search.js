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

  const handelOnSubmit = (e) => {
    if (cityName) {
      setIsPending(true);
      setError(false);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=65bd94edd330fcf61fa67b120888b455&units=metric`
        )
        .then((res) => {
          setIsPending(false);
          data = res.data.main;
          setName(res.data.name);
          setMainData(data);
          document.querySelector('input').value = '';
          setCityName('');
        })
        .catch((errr) => {
          if (errr.response.status !== 200)
            setError('Name of the city is not correct...!');
          setIsPending(false);
          setMainData(null);
        });
    } else {
      setError('Please enter a city name...!');
      setIsPending(false);
    }

    // try {
    //   if (!cityName) setError('Please enter a city name');
    // } catch (err) {
    //   setIsPending(false);
    // }
    // axios
    //   .get(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=65bd94edd330fcf61fa67b120888b455&units=metric`
    //   )
    //   .then((res) => {
    //     setError(false);
    //     setIsPending(false);
    //     data = res.data.main;
    //     console.log(res);
    //     setName(res.data.name);
    //     setMainData(data);
    //     document.querySelector('input').value = '';
    //     setCityName('');
    //   })
    //   .catch((errr) => {
    //     if (errr.response.status !== 200) console.log(errr.response);
    //     // setError('Name of the city is not correct... ');
    //     setIsPending(false);
    //     setMainData(null);
    //   });

    setMainData(null);
    e.preventDefault();
  };
  return (
    <div className='search-container'>
      <form className='search-form' onSubmit={handelOnSubmit}>
        <input
          type='text'
          className='search-input'
          placeholder='Enter you city name'
          onChange={handelOnChange}
        />
        <button type='submit'>Check</button>

        <br />
        {mainData && (
          <Details cityName={cityName} mainData={mainData} name={name} />
        )}
        {IsPending && <div>Loading... </div>}
        {error && <h4 className='error-text'>{error}</h4>}
        <br />
      </form>
    </div>
  );
};

export default Search;
