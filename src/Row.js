import React from "react";
import './App.css';
import Current from "./Current";
import Weather from "./Weather";

export default function Row(props) {
  return (
    <div className="Row">
      <div class="container-current-weather-row">
        <div class="row">
          <div class="col-6">
            <Weather />
          </div>

          <div class="col-6">
            <Current />
          </div>
        </div>
      </div>
    </div>
  );
}