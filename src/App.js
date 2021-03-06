import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items : []
    };
  }

  componentDidMount() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=Yogyakarta,id&mode=json&appid=b22d1b99608da5b551220c1984e26dea&units=metric")
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.list.map(data => (
        {
          dateTime: `${data.dt_txt}` ,
          temp: `${data.main.temp}` ,
          tempMin: `${data.main.temp_min}` ,
          tempMax: `${data.main.temp_max}` ,
          weather: `${data.weather[0].main}` ,

        }
      )))
      .then(items => this.setState({
        items,
        isLoaded: false
      }))
      .catch(error => console.log('parsing failed', error))
  }
  render() {
    const {items} = this.state;

    return (
      <div className="component">
      <div className="container">
				<h1 style={{textAlign: "center"}}>Prakiraan Cuaca Yogyakarta</h1>
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<th>Date Time</th>
							<th>Temp</th>
							<th>Temp Min</th>
							<th>Temp Max</th>
							<th>Weather</th>
						</tr>
					</thead>
            <tbody>
              {
                items.length > 0 ? items.map(item => {
                  const {dateTime, temp, tempMax, tempMin, weather} = item;
                  return(
                    <tr>
                      <th>{dateTime}</th>
                      <td>{temp}</td>
                      <td>{tempMin}</td>
                      <td>{tempMax}</td>
                      <td>{weather}</td>
                    </tr>
                  );
                }) : null
              }
            </tbody>
          </table>          
        </div>
      </div>
    );
  }
}

export default App;