import React, { Component } from "react";

export class MainTesting extends Component {
  constructor() {
    super();
    this.state = {
      Currentcondition: [],
      Main: [],
    };
  }

  convertTemp = (i) => {
    var C = i - 273.15;
    var CT = Math.floor(C);
    return CT;
  };

  convertKm = (i) => {
    var C = i / 1000;
    var CT = Math.floor(C);
    return CT;
  };
  converClock = (i) => {
    var today = new Date(i * 1000);
    var w = today.toLocaleString("en-IN", { weekday: "long" });
    var d = today.toLocaleString("en-IN", { day: "numeric" });
    var m = today.toLocaleString("en-IN", { month: "long" });
    var h = today.getHours(16, 24);
    var mi = today.toLocaleString("en-In", { minute: "2-digit" });

    var r = w + " " + d + " " + m + " " + h + ":" + mi;
    return r;
  };
  render() {
    var Currentcondition = this.props.Currentcondition;
    console.log(Currentcondition);
    var Main = this.props.Main;
    console.log(Main);
    var value = this.props.default;
    console.log(value);

    var directions = [
      "North",
      "North-East",
      "East",
      "South-East",
      "South",
      "South-West",
      "West",
      "North-West",
    ];

    const getDirection = (heading) => {
      var index = Math.round(heading / 8 / 5, 625);
      return directions[index];
    };

    var img = Currentcondition.map((e) => {
      var x = e.icon;
      console.log(x);
      var f = "";
      if (x == "01d") {
        f = (
          <>
            <img src="./images/01d.png" width={180} alt="123" />
          </>
        );
      }
      if (x == "01n") {
        f = (
          <>
            <img src="./images/01n.png" width={180} alt="" />
          </>
        );
      }
      if (x == "02d") {
        f = (
          <>
            <img src="./images/02d.png" width={180} alt="" />
          </>
        );
      }
      if (x == "02n") {
        f = (
          <>
            <img src="./images/02n.png" width={180} alt="" />
          </>
        );
      }
      if (x == "03d") {
        f = (
          <>
            <img src="./images/03d.png" width={180} alt="" />
          </>
        );
      }
      if (x == "03n") {
        f = (
          <>
            <img src="./images/03d.png" width={180} alt="" />
          </>
        );
      }
      if (x == "04d") {
        f = (
          <>
            <img src="./images/04d.png" width={180} alt="" />
          </>
        );
      }
      if (x == "04n") {
        f = (
          <>
            <img src="./images/04d.png" width={180} alt="" />
          </>
        );
      }
      if (x == "09d") {
        f = (
          <>
            <img src="./images/9d.png" width={180} alt="" />
          </>
        );
      }
      if (x == "09n") {
        f = (
          <>
            <img src="./images/9d.png" width={180} alt="" />
          </>
        );
      }
      if (x == "10d") {
        f = (
          <>
            <img src="./images/10d.png" width={180} alt="" />
          </>
        );
      }
      if (x == "10n") {
        f = (
          <>
            <img src="./images/10n.png" width={180} alt="" />
          </>
        );
      }
      if (x == "11d") {
        f = (
          <>
            <img src="./images/11d.png" width={180} alt="" />
          </>
        );
      }
      if (x == "11n") {
        f = (
          <>
            <img src="./images/11n.png" width={180} alt="" />
          </>
        );
      }
      if (x == "13d") {
        f = (
          <>
            <img src="./images/13d.png" width={180} alt="" />
          </>
        );
      }
      if (x == "13n") {
        f = (
          <>
            <img src="./images/13n.png" width={180} alt="" />
          </>
        );
      }
      if (x == "50d") {
        f = (
          <>
            <img src="./images/50d.png" width={180} alt="" />
          </>
        );
      }
      if (x == "50n") {
        f = (
          <>
            <img src="./images/50n.png" width={180} alt="" />
          </>
        );
      }
      return <>{f}</>;
    });

    var sys = Main.map((e) => {
      return (
        <>
          <h1 className="location-and-date__location">
            {e.name},{e.sys.country}
          </h1>
          <div>{this.converClock(e.dt)}</div>
        </>
      );
    });

    var weather = Currentcondition.map((e) => {
      return (
        <>
          <div className="current-temperature__summary">{e.main}</div>
        </>
      );
    });

    var temp = Main.map((e) => {
      return (
        <>
          <div className="current-temperature__value">
            {this.convertTemp(e.main.temp)}&deg;
          </div>
        </>
      );
    });
    var v = Main.map((e) => {
      return (
        <>
          <div>
            <div className="current-stats__value">
              {this.convertTemp(e.main.feels_like)}&deg;
            </div>
            <div className="current-stats__label">FeelsLikeC</div>
            <div className="current-stats__value">
              {this.convertTemp(e.main.temp_min)}&deg;
            </div>
            <div className="current-stats__label">temp_min</div>
            <div className="current-stats__value">
              {this.convertTemp(e.main.temp_max)}&deg;
            </div>
            <div className="current-stats__label">temp_max</div>
          </div>
          <div>
            <div className="current-stats__value">{e.main.pressure}mbar</div>
            <div className="current-stats__label">pressure</div>
            <div className="current-stats__value">{e.main.humidity}%</div>
            <div className="current-stats__label">humidity</div>
            <div className="current-stats__value">
              {this.convertKm(e.visibility)}Km
            </div>
            <div className="current-stats__label">visibility</div>
          </div>
          <div>
            <div className="current-stats__value">{e.wind.speed}m/s</div>
            <div className="current-stats__label">speed</div>
            <div className="current-stats__value">
              {getDirection(e.wind.deg)}
            </div>
            <div className="current-stats__label">deg</div>
            <div className="current-stats__value">{e.clouds.all}%</div>
            <div className="current-stats__label">clouds</div>
          </div>
          {/* <p>uvIndex:{e.uvIndex}</p>  */}
        </>
      );
    });

    return (
      <>
        {value ? (
          <>
            <div className="main-container">
              <div className="location-and-date">{sys}</div>

              <div className="current-temperature">
                <div className="current-temperature__icon-container">{img}</div>
                <div className="current-temperature__content-container">
                  {temp}
                  {weather}
                </div>
              </div>

              <div className="current-stats">{v}</div>
            </div>
          </>
        ) : (
          <>
            <div className="main-container">
              <div className="location-and-date">{sys}</div>

              <div className="current-temperature">
                <div className="current-temperature__icon-container">{img}</div>
                <div className="current-temperature__content-container">
                  {temp}
                  {weather}
                </div>
              </div>

              <div className="current-stats">{v}</div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default MainTesting;
