import React, { Component } from "react";

export class TodayTesting extends Component {
  constructor() {
    super();
    this.state = {
      weathehourly_Today: [],
    };
  }

  convertTime = (i) => {
    var today = new Date(i * 1000);

    var h = today.getHours();
    var m = today.getMinutes();
    // add a zero in front of numbers<10
    var r = h + ":" + m;
    return r;
  };
  convertTemp = (i) => {
    var C = i - 273.15;
    var CT = Math.floor(C);
    return CT;
  };

  render() {
    var weathehourly_Today = this.props.weathehourlyToday;
    console.log(weathehourly_Today);
    var value = this.props.default;
    console.log(value);

    var weathehourly = weathehourly_Today.map((e) => {
      var x = e.weather[0].icon;
      var f = "";
      if (x == "01d") {
        f = (
          <>
            <img src="./images/01d.png" width={80} alt="" />
          </>
        );
      }
      if (x == "01n") {
        f = (
          <>
            <img src="./images/01n.png" width={80} alt="" />
          </>
        );
      }
      if (x == "02d") {
        f = (
          <>
            <img src="./images/02d.png" width={80} alt="" />
          </>
        );
      }
      if (x == "02n") {
        f = (
          <>
            <img src="./images/02n.png" width={80} alt="" />
          </>
        );
      }
      if (x == "03d") {
        f = (
          <>
            <img src="./images/03d.png" width={80} alt="" />
          </>
        );
      }
      if (x == "03n") {
        f = (
          <>
            <img src="./images/03d.png" width={80} alt="" />
          </>
        );
      }
      if (x == "04d") {
        f = (
          <>
            <img src="./images/04d.png" width={80} alt="" />
          </>
        );
      }
      if (x == "04n") {
        f = (
          <>
            <img src="./images/04d.png" width={80} alt="" />
          </>
        );
      }
      if (x == "09d") {
        f = (
          <>
            <img src="./images/9d.png" width={80} alt="" />
          </>
        );
      }
      if (x == "09n") {
        f = (
          <>
            <img src="./images/9d.png" width={80} alt="" />
          </>
        );
      }
      if (x == "10d") {
        f = (
          <>
            <img src="./images/10d.png" width={80} alt="" />
          </>
        );
      }
      if (x == "10n") {
        f = (
          <>
            <img src="./images/10n.png" width={80} alt="" />
          </>
        );
      }
      if (x == "11d") {
        f = (
          <>
            <img src="./images/11d.png" width={80} alt="" />
          </>
        );
      }
      if (x == "11n") {
        f = (
          <>
            <img src="./images/11n.png" width={80} alt="" />
          </>
        );
      }
      if (x == "13d") {
        f = (
          <>
            <img src="./images/13d.png" width={80} alt="" />
          </>
        );
      }
      if (x == "13n") {
        f = (
          <>
            <img src="./images/13n.png" width={80} alt="" />
          </>
        );
      }
      if (x == "50d") {
        f = (
          <>
            <img src="./images/50d.png" width={80} alt="" />
          </>
        );
      }
      if (x == "50n") {
        f = (
          <>
            <img src="./images/50n.png" width={80} alt="" />
          </>
        );
      }
      return (
        <>
          <div className="weather-by-hour__item ">
            <div className="weather-by-hour__hour">
              {this.convertTime(e.dt)}
            </div>
            {f}
            <div>{this.convertTemp(e.main.temp)}&deg;</div>
          </div>
        </>
      );
    });
    return (
      <>
        {value ? (
          <>
            <div className="main-container">
              <div className="weather-by-hour">
                <h2 className="weather-by-hour__heading">Today's weather</h2>
                <div className="weather-by-hour__container">{weathehourly}</div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="main-container">
              <div className="weather-by-hour">
                <h2 className="weather-by-hour__heading">Today's weather</h2>
                <div className="weather-by-hour__container">{weathehourly}</div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default TodayTesting;
