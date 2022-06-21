import axios from "axios";
import React, { Component } from "react";
import TodayTesting from "./TodayTesting";
import "../App.css";
import MainTesting from "./MainTesting";
import MiddleTesting from "./MiddleTesting";

export class Testing extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      currentcondition: [],
      currentcondition_Main: [],
      //   today
      weathehourly_Today: [],
      someState: "",
      //   middle
      weathehourly: [],
      weathehourly_1: [],
      weathehourly_2: [],
      weathehourly_3: [],
      weathehourly_4: [],
      default: false,
    };
  }

  fixed = async () => {

    var e = "mumbai";
    const res = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=39fe84953a8e68d57ebb24695364f8db`
    );
    console.log(res.data.main);
    this.setState({
      currentcondition: [res.data.weather[0]],
      currentcondition_Main: [res.data],
      default: false,
    });

    // today
    const forecast = await axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${e}&APPID=39fe84953a8e68d57ebb24695364f8db`
    );
    console.log(forecast.data.list);
    var c = forecast.data.list;
    var t = c.splice(0, 6);
    console.log(t);
    //   middle log
    console.log([forecast.data.list[38]]);
    this.setState({
      weathehourly_Today: t,
      // middle
      weathehourly: [forecast.data.list[5]],
      weathehourly_1: [forecast.data.list[12]],
      weathehourly_2: [forecast.data.list[20]],
      weathehourly_3: [forecast.data.list[28]],
      weathehourly_4: [forecast.data.list[33]],
      default: false,
    });
  };
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
    var h = today.toLocaleString("en-IN", { weekday: "long" });
    var m = today.toLocaleString("en-IN", { day: "numeric" });
    var s = today.toLocaleString("en-IN", { month: "long" });
    var r = h + " " + m + " " + s;
    return r;
  };
  InputHender = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  Savadate = async (e) => {
    e.preventDefault();
    //

    const res = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.search}&APPID=39fe84953a8e68d57ebb24695364f8db`
    );
    console.log(res.data.main);
    this.setState({
      currentcondition: [res.data.weather[0]],
      currentcondition_Main: [res.data],
      default: true,
    });

    // today
    const forecast = await axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.search}&APPID=39fe84953a8e68d57ebb24695364f8db`
    );
    console.log(forecast.data.list);
    var c = forecast.data.list;
    var t = c.splice(0, 6);
    console.log(t);
    //   middle log
    console.log([forecast.data.list[38]]);
    this.setState({
      weathehourly_Today: t,
      // middle
      weathehourly: [forecast.data.list[5]],
      weathehourly_1: [forecast.data.list[12]],
      weathehourly_2: [forecast.data.list[20]],
      weathehourly_3: [forecast.data.list[28]],
      weathehourly_4: [forecast.data.list[33]],
      default: true,
    });
  };

  componentDidMount() {
    this.fixed();
  }
  Add = async () => {

    const res = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.search}&APPID=39fe84953a8e68d57ebb24695364f8db`
    );
    console.log(res.data.main);
    this.setState({
      currentcondition: [res.data.weather[0]],
      currentcondition_Main: [res.data],
      default: true,
    });
    let id = 1;
    if (localStorage.getItem("e")) {
      id = localStorage.getItem("e").length + 1;
    }

    const data = {
      id: id,
      city: res.data.name,
      dt: res.data.dt,
      weather: res.data.weather[0],
      main: res.data.main,
    };
    if (localStorage.getItem("e") == null) {
      localStorage.setItem("e", "[]");
    }
    var update = JSON.parse(localStorage.getItem("e"));
    update.push(data);
    localStorage.setItem("e", JSON.stringify(update));
    return alert("add in localStorage");
  };
  render() {
    console.log(process.env.REACT_APP_WEATHER_API_KEY)
    return (
      <>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/history">
                  Weather History
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container mt-3">
          <form onSubmit={this.Savadate}>
            <div class="d-flex">
              <input
                class="form-control mr-1"
                type="text"
                placeholder="Enter Your City"
                name="search"
                onChange={this.InputHender}
                value={this.state.search}
                required
              />
              <button class="btn btn-primary mr-2">search</button>
              {this.state.default ? (
                <>
                  <button
                    class="btn btn-success"
                    title="Save weather Data"
                    onClick={this.Add}
                  >
                    <i class="fa fa-plus-square" aria-hidden="true"></i>
                  </button>
                </>
              ) : (
                <>
                  <button class="btn btn-danger" disabled onClick={this.Add}>
                    <i class="fa fa-plus-square" aria-hidden="true"></i>
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
        <MainTesting
          Currentcondition={this.state.currentcondition}
          Main={this.state.currentcondition_Main}
          default={this.state.default}
        />
        <TodayTesting
          weathehourlyToday={this.state.weathehourly_Today}
          default={this.state.default}
        />
        <MiddleTesting
          weathehourly_one={this.state.weathehourly}
          weathehourly_two={this.state.weathehourly_1}
          weathehourly_three={this.state.weathehourly_2}
          weathehourly_four={this.state.weathehourly_3}
          weathehourly_five={this.state.weathehourly_4}
          default={this.state.default}
        />
      </>
    );
  }
}

export default Testing;
