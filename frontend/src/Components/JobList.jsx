import React, { Component } from "react";
import "./JobList.css";

class JobList extends Component {
  constructor() {
    super();
    this.state = {
      postings: []
    };
  }
  componentDidMount = async () => {
    let promise = await fetch("/get-postings", {
      method: "POST"
    });
    let response = await promise.text();
    let responseBody = JSON.parse(response);
    console.log("response body", responseBody);
    this.setState({ postings: responseBody.rows });
  };

  render = () => {
    return (
      <div className="job-listing-container">
        <div
          style={{
            color: "#a1a19f",
            paddingLeft: "20px",
            paddingBottom: "20px"
          }}
        >
          NOW HIRING
        </div>
        <div>
          {this.state.postings.map(posting => {
            return (
              <div className="job-listing">
                {posting.image !== "null"
                  ? <div className="thumbnail">
                      <img src={posting.image} className="thumbnail-image" />
                    </div>
                  : null}
                <div>
                  <div style={{ width: "850px" }}>
                    <div className="header1">
                      {posting.company}
                    </div>
                    <div className="header2">
                      {posting.job_title}
                    </div>
                  </div>
                </div>
                <div className="header3">
                  {posting.location}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
}

export default JobList;
