import React from "react";
import './App.css';

export default function Footer(props) {
  return (
    <div className="Footer">
      <span>
        <small class="OpenSourceLink">
          <a href="https://github.com/brenann-lsf/weather-react-app">
            Open-source code
          </a>
          , by Brenann Francis
        </small>
      </span>
    </div>
  );
}