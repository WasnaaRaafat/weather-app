const Details = ({cityName, mainData, name}) => {
  return (
    <div>
      <div className='container'>
        <div className='card'>
          <div className='card-body'>
            <h3 className='card-title'>{name}</h3>
            <p className='card-text'>
              Current temperature: <span>{Math.round(mainData.temp)}°C </span>
            </p>
            <p className='card-text'>
              Feels Like: <span> {Math.round(mainData.feels_like)}°C </span>
            </p>
            <p className='card-text'>
              Max:
              <span> {Math.round(mainData.temp_max)}°C </span> .......... Min:
              <span> {Math.round(mainData.temp_min)}°C</span>
            </p>
            <p className='card-text'>
              Humidity:
              <span> {mainData.humidity} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
