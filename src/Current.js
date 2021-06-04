import React from "react";
import './App.css';

export default function Current(props) {
  return (
    <div className="Current">
      <ul>
        <li>
          <span class="current" id="city">
            Toronto
          </span>
        </li>
        <li>
          <span class="currentDate" id="date">
            Thurs., March 4th, 2021
          </span>
        </li>
        <li>
          <span class="currentTime" id="time">
            8:30 PM
          </span>
        </li>
      </ul>
    </div>
  );
}
