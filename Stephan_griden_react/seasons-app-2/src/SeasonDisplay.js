import React from "react";
import "./SeasonDisplay.css";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat < 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  const text =
    season === "winter"
      ? "You are in winter Season"
      : "You are in Summer Season";

  const icon = season === "winter" ? "snowflake" : "sun";
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left huge ${icon} icon`} />
      <h2>{text}</h2>
      <i className={`icon-right huge ${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;

// Normall format of doing this
// ----------------------------------------------------------
// let month = new Date().getMonth();
//   if (month > 2 && month < 9) {
//     return <div>{props.lat > 0 ? "Summer" : "Winter"}</div>;
//   } else {
//     return <div>{props.lat < 0 ? "Winter" : "Summer"}</div>;
//   }
