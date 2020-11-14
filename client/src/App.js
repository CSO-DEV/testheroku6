import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import fetchFromApi from "./lib/fetch";

function App() {

// Get Post
const getPosts = () => {
  /*fetchFromApi("GET", "/posts", {}, false).then(
    (data) => {
      if (Array.isArray(data.posts)) {
        setPost(data.posts);
      }
    },
    (error) => {
      console.error("An error has occured while fetching posts");
    }
  );*/
  }



  return (
    <div className="App">
      {getPosts()}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {process.env.NODE_ENV}
          {process.env.ORIGIN + "*"}
        </a>
      </header>
    </div>
  );
}

export default App;
