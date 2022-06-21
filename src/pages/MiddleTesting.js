import React, { Component } from "react";

export class MiddleTesting extends Component {
  constructor() {
    super();
    this.state = {
      weathehourly_one: [],
      weathehourly_two: [],
      weathehourly_three: [],
      weathehourly_four: [],
      weathehourly_five: [],
    };
  }
  converClock = (i) => {
    var today = new Date(i * 1000);
    var h = today.toLocaleString("en-IN", { weekday: "long" });
    var m = today.toLocaleString("en-IN", { day: "numeric" });
    var s = today.toLocaleString("en-IN", { month: "long" });
    var r = h + " " + m + " " + s;
    return r;
  };
  converWeekday = (i) => {
    var today = new Date(i * 1000);
    var h = today.toLocaleString("en-IN", { weekday: "short" });
    var r = h;
    return r;
  };
  convertTemp = (i) => {
    var C = i - 273.15;
    var CT = Math.floor(C);
    return CT;
  };
  render() {
    var weathehourly_one = this.props.weathehourly_one;
    console.log(weathehourly_one);
    var weathehourly_two = this.props.weathehourly_two;
    console.log(weathehourly_two);
    var weathehourly_three = this.props.weathehourly_three;
    console.log(weathehourly_three);
    var weathehourly_four = this.props.weathehourly_four;
    console.log(weathehourly_four);
    var weathehourly_five = this.props.weathehourly_five;
    console.log(weathehourly_five);
    var value = this.props.default;
    console.log(value);

    var weathehourly = weathehourly_one.map((e) => {
      var rain = "";
      if (e.rain == undefined) {
        rain = "NA";
      } else {
        rain = e.rain["3h"] + "mm";
      }
      var x = e.weather["0"].icon;
      var f = "";
      if (x == "01d") {
        f = (
          <>
            <img src="./images/01d.png" width={80} alt="123" />
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
            <img src="./images/09d.png" width={80} alt="" />
          </>
        );
      }
      if (x == "09n") {
        f = (
          <>
            <img src="./images/09d.png" width={80} alt="" />
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
            <img src="./images/10n.png" width={130} alt="" />
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
          <div className="next-5-days__row">
            <div className="next-5-days__date">
              {this.converWeekday(e.dt)}
              <div className="next-5-days__label">{this.converClock(e.dt)}</div>
            </div>
            <div className="next-5-days__low">
              {this.convertTemp(e.main.temp_min)}
              <div className="next-5-days__label">Low</div>
            </div>
            <div className="next-5-days__high">
              {this.convertTemp(e.main.temp_max)}
              <div className="next-5-days__label">High</div>
            </div>
            <div className="next-5-days__icon">{f}</div>
            <div className="next-5-days__rain">
              {rain}
              <div className="next-5-days__label">Rain</div>
            </div>
            <div className="next-5-days__wind">
              {e.wind.speed}m/s
              <div className="next-5-days__label">Wind</div>
            </div>
          </div>
        </>
      );
    });
    var weathehourly_1 = weathehourly_two.map((e) => {
      var rain = "";
      if (e.rain == undefined) {
        rain = "NA";
      } else {
        rain = e.rain["3h"] + "mm";
      }
      var x = e.weather["0"].icon;
      var f = "";
      if (x == "01d") {
        f = (
          <>
            <img src="./images/01d.png" width={80} alt="123" />
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
            <img src="./images/09d.png" width={80} alt="" />
          </>
        );
      }
      if (x == "09n") {
        f = (
          <>
            <img src="./images/09d.png" width={80} alt="" />
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
            <img src="./images/10n.png" width={130} alt="" />
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
          <div className="next-5-days__row">
            <div className="next-5-days__date">
              {this.converWeekday(e.dt)}
              <div className="next-5-days__label">{this.converClock(e.dt)}</div>
            </div>
            <div className="next-5-days__low">
              {this.convertTemp(e.main.temp_min)}
              <div className="next-5-days__label">Low</div>
            </div>
            <div className="next-5-days__high">
              {this.convertTemp(e.main.temp_max)}
              <div className="next-5-days__label">High</div>
            </div>
            <div className="next-5-days__icon">{f}</div>

            <div className="next-5-days__rain">
              {rain}
              <div className="next-5-days__label">Rain</div>
            </div>
            <div className="next-5-days__wind">
              {e.wind.speed}m/s
              <div className="next-5-days__label">Wind</div>
            </div>
          </div>
        </>
      );
    });
    var weathehourly_2 = weathehourly_three.map((e) => {
      var rain = "";
      if (e.rain == undefined) {
        rain = "NA";
      } else {
        rain = e.rain["3h"] + "mm";
      }
      var x = e.weather["0"].icon;
      var f = "";
      if (x == "01d") {
        f = (
          <>
            <img src="./images/01d.png" width={80} alt="123" />
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
            <img src="./images/09d.png" width={80} alt="" />
          </>
        );
      }
      if (x == "09n") {
        f = (
          <>
            <img src="./images/09d.png" width={80} alt="" />
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
            <img src="./images/10n.png" width={130} alt="" />
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
          <div className="next-5-days__row">
            <div className="next-5-days__date">
              {this.converWeekday(e.dt)}
              <div className="next-5-days__label">{this.converClock(e.dt)}</div>
            </div>
            <div className="next-5-days__low">
              {this.convertTemp(e.main.temp_min)}
              <div className="next-5-days__label">Low</div>
            </div>
            <div className="next-5-days__high">
              {this.convertTemp(e.main.temp_max)}
              <div className="next-5-days__label">High</div>
            </div>
            <div className="next-5-days__icon">{f}</div>
            <div className="next-5-days__rain">
              {rain}
              <div className="next-5-days__label">Rain</div>
            </div>
            <div className="next-5-days__wind">
              {e.wind.speed}m/s
              <div className="next-5-days__label">Wind</div>
            </div>
          </div>
        </>
      );
    });
    var weathehourly_3 = weathehourly_four.map((e) => {
      var rain = "";
      if (e.rain == undefined) {
        rain = "NA";
      } else {
        rain = e.rain["3h"] + "mm";
      }
      var x = e.weather["0"].icon;
      var f = "";
      if (x == "01d") {
        f = (
          <>
            <img src="./images/01d.png" width={80} alt="123" />
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
            <img src="./images/09d.png" width={80} alt="" />
          </>
        );
      }
      if (x == "09n") {
        f = (
          <>
            <img src="./images/09d.png" width={80} alt="" />
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
            <img src="./images/10n.png" width={130} alt="" />
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
            <img src="./images/50.png" width={80} alt="" />
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
          <div className="next-5-days__row">
            <div className="next-5-days__date">
              {this.converWeekday(e.dt)}
              <div className="next-5-days__label">{this.converClock(e.dt)}</div>
            </div>
            <div className="next-5-days__low">
              {this.convertTemp(e.main.temp_min)}
              <div className="next-5-days__label">Low</div>
            </div>
            <div className="next-5-days__high">
              {this.convertTemp(e.main.temp_max)}
              <div className="next-5-days__label">High</div>
            </div>
            <div className="next-5-days__icon">{f}</div>
            <div className="next-5-days__rain">
              {rain}
              <div className="next-5-days__label">Rain</div>
            </div>
            <div className="next-5-days__wind">
              {e.wind.speed}m/s
              <div className="next-5-days__label">Wind</div>
            </div>
          </div>
        </>
      );
    });
    var weathehourly_4 = weathehourly_five.map((e) => {
      var rain = "";
      // console.log(e.rain['3h'])
      if (e.rain == undefined) {
        rain = "NA";
      } else {
        rain = e.rain["3h"] + "mm";
      }
      var x = e.weather["0"].icon;
      var f = "";
      if (x == "01d") {
        f = (
          <>
            <img src="./images/01d.png" width={80} alt="123" />
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
            <img src="./images/10n.png" width={130} alt="" />
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
          <div className="next-5-days__row">
            <div className="next-5-days__date">
              {this.converWeekday(e.dt)}
              <div className="next-5-days__label">{this.converClock(e.dt)}</div>
            </div>
            <div className="next-5-days__low">
              {this.convertTemp(e.main.temp_min)}
              <div className="next-5-days__label">Low</div>
            </div>
            <div className="next-5-days__high">
              {this.convertTemp(e.main.temp_max)}
              <div className="next-5-days__label">High</div>
            </div>
            <div className="next-5-days__icon">{f}</div>
            <div className="next-5-days__rain">
              {rain}
              <div className="next-5-days__label">Rain</div>
            </div>
            <div className="next-5-days__wind">
              {e.wind.speed}m/s
              <div className="next-5-days__label">Wind</div>
            </div>
          </div>
        </>
      );
    });
    return (
      <>
        {value ? (
          <>
            <div className="main-container">
              <div className="next-5-days">
                <h2 className="next-5-days__heading">Next 5 days</h2>
                <div className="next-5-days__container">
                  {weathehourly}
                  {weathehourly_1}
                  {weathehourly_2}
                  {weathehourly_3}
                  {weathehourly_4}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="main-container">
              <div className="next-5-days">
                <h2 className="next-5-days__heading">Next 5 days</h2>
                <div className="next-5-days__container">
                  {weathehourly}
                  {weathehourly_1}
                  {weathehourly_2}
                  {weathehourly_3}
                  {weathehourly_4}
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default MiddleTesting;
