import React from "react";
import './App.css';

export default function Weather(props) {
  return (
    <div className="Weather">
      <div class="clearfix">
        <div class="float-left">
          <span class="snowflake">
            <i class="far fa-snowflake"></i>
          </span>
        </div>

        <div class="float-left">
          <ul>
            <li>
              <span class="current-temperature" id="temperature">
                -2
              </span>
              <span class="unit">°C</span>
            </li>
            <li>
              <span class="weather-description" id="description">
                Snow Shower
              </span>
            </li>
            <li>
              <small class="text-muted" id="feelsLike">
                Feels like -8
              </small>
            </li>
            <li>
              <small class="text-muted">
                <span id="min">-1</span>/<span id="max">-9</span>
              </small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}