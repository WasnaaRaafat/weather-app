const Details = ({cityName, mainData, name}) => {
  return (
    <div>
      <div className='container'>
        <div className='card'>
          <div className='card-body'>
            <h4 className='card-title'>{name}</h4>
            <h5 className='card-subtitle mb-2'>
              Current temperature: {Math.round(mainData.temp)}°C
            </h5>
            <p className='card-text'>
              Feels Like: {Math.round(mainData.feels_like)} °C
            </p>
            <p className='card-text'>
              Max: {Math.round(mainData.temp_max)} °C, Min:{' '}
              {Math.round(mainData.temp_min)} °C
            </p>
            <p className='card-text'>
              {' '}
              <i
                className='fa fa-tint mr-2'
                aria-hidden='true'
              ></i>Humidity: {mainData.humidity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
