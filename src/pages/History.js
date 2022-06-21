import React, { Component } from "react";
import { Link } from "react-router-dom";

export class History extends Component {
  convertTemp = (i) => {
    var C = i - 273.15;
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
  Delete = (e, id) => {
    const thisClick = e.currentTarget;
    thisClick.innerText = "deleted";
    var v = localStorage.getItem("e");
    var j = JSON.parse(v);
    const index = j.map((object) => object.id).indexOf(id);
    console.log(index);

    if (index > -1) {
      var ls_data = JSON.parse(localStorage.getItem("e"));
      const data = ls_data.splice(index, 1);
      console.log(data);
      localStorage.setItem("e", JSON.stringify(ls_data));
    }
    thisClick.closest("tr").remove();
  };
  render() {
    var v = localStorage.getItem("e");
    console.log(v);
    var j = JSON.parse(v);
    console.log(j);
    var count = 1;
    var m = j.map((e) => {
      var x = e.weather.icon;
      var f = "";
      if (x == "01d") {
        f = (
          <>
            <img src="./images/01d.png" width={100} alt="123" />
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
          <tr key={e.id}>
            <th scope="row">{count++}</th>
            <td>{e.city}</td>
            <td>{this.converClock(e.dt)}</td>
            <td>{f}</td>
            <td>{e.weather.main}</td>
            <td>{e.weather.description}</td>
            <td>{this.convertTemp(e.main.temp)}&deg;</td>
            <td>{this.convertTemp(e.main.temp_max)}&deg;</td>
            <td>{this.convertTemp(e.main.temp_min)}&deg;</td>
            <td>{this.convertTemp(e.main.feels_like)}&deg;</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={(event) => this.Delete(event, e.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        </>
      );
    });

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
              <li className="nav-item ">
              <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item active">
              <Link to="history" className="nav-link">Weather History</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="text-center table-responsive">
          <table className="table table-striped table-dark table-bordered ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">City</th>
                <th scope="col">Time</th>
                <th scope="col">Weather Icons</th>
                <th scope="col">Weather Main</th>
                <th scope="col">Weather description</th>
                <th scope="col">temp</th>
                <th scope="col">temp_max</th>
                <th scope="col">temp_min</th>
                <th scope="col">feels_like</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>{m}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default History;
