import React from "react";
import JobList from "./Components/JobList.jsx";
import NavBar from "./Components/NavBar.jsx";
import Filters from "./Components/Filters.jsx";
import "./App.css";

function App() {
  return (
    <div className="background">
      <NavBar />
      <div className="homepage-header">
        <div style={{ paddingTop: "20px" }}>
          <div style={{ color: "#323232", fontWeight: 500, fontSize: "20px" }}>
            What could you be working on?
          </div>
          <div style={{ fontSize: "100px", color: "#c3ddad" }}>
            <span style={{ fontWeight: "bold", color: "white" }}>Jobs</span> for
            Designers
          </div>
        </div>
        <div>
          <div className="large-button">
            <div className="large-button-contents">
              <div style={{ fontWeight: "bold" }}>
                Post a Job + Find Designer
              </div>
              <div style={{ color: "#828f73", fontWeight: 600 }}>
                375$ for 30 days
              </div>
            </div>
          </div>
          <div className="follow">
            <div
              style={{
                display: "flex",
                alignItems: "top",
                paddingRight: "20px"
              }}
            >
              {/* icône feed RSS  */}
              <img
                alt=""
                src="rss_icon.svg"
                height="20px"
                className="icon-white"
              />{" "}
              Jobs RSS
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "top",
                paddingRight: "20px"
              }}
            >
              {/* icône Twitter */}
              <img
                alt=""
                src="twitter_icon.svg"
                height="20px"
                className="icon-white"
              />@dribblejobs
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <JobList />
        <div>
          <Filters />
          <div className="blurb">
            Hiring designers? <a href="link">Create a team</a> to get the most
            exposure for your jobs
          </div>

          <div className="blurb" style={{ marginTop: "60px" }}>
            <span style={{ color: "#000000" }}>Previously</span> on Dribble
          </div>

          <div style={{ marginTop: "20px" }}>
            <img alt="facebook" src="/facebook.png" height="70px" />
            <img alt="microsoft" src="/microsoft.png" height="70px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
