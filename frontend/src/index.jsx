import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
      details: [],
    };
  }

  async componentWillMount() {
    const weather = await getWeatherFromApi();
    this.setState({ icon: weather.weather[0].icon.slice(0, -1) });
  }

  render() {

    const getWeatherDetails = async () => {
      const weather = await getWeatherFromApi();
      this.setState({ details: [weather.weather[0].description, weather.main.temp, weather.wind.speed] });
    }

    const { icon } = this.state;
    const { details } = this.state;

    return (
      <div className="icon">
        {icon && <img src={`/img/${icon}.svg`} />}
        <h1>Helsinki</h1>
        <list>
        <ul style={{listStyleType: 'none'}}>
          <li>Description: {details[0]}</li>
          <li>Temperature: {details[1]} C</li>
          <li>Windspeed: {details[2]} m/s</li>
        </ul>
        </list>
        <button style={{
          backgroundColor: '#4CAF50', /* Green */
          Border: 'none',
          color: 'white',
          padding: '16 32',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: 16,
          margin: '4px 2px',
          webkitTransitionDuration: '0.4s', /* Safari */
          transitionDuration: '0.4s',
          cursor: 'pointer',
        }} onClick={getWeatherDetails}>Reveal secrets!</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
