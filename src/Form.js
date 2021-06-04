import React from "react";
import './App.css';

export default function Form(props) {
  return (
    <div className="Form">
      <form id="search-form">
        <input
          type="search"
          class="input-field"
          id="search-city"
          placeholder="Type a City"
          autocomplete="off"
          autofocus="on"
        />
        <input type="submit" class="search-button" value="Search" />
      </form>
    </div>
  );
}
