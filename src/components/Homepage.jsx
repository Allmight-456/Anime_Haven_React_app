// src/App.jsx
import React from 'react';
import './App.css'; // Import the CSS file for styling

const Homepage = () => {
  return (
    <div className="app">
      <nav id="abc">
        <h1>ANIME HAVEN</h1>
      </nav>
      <header>
        <nav id="xyz">
          <ul>
            <div>
              <li><a href="#">Home</a></li>
              <li><a href="#">Anime Recommendations</a></li>
              <li><a href="#">Genres</a></li>
              <li><a href="#">Must Watches</a></li>
              <li><a href="#">Upcoming Blasts</a></li>
              <input id="ghi" type="text" placeholder="Search.." />
            </div>
          </ul>
          <p>Don't have an account? <a href="signup_page.jsx">Sign Up</a></p>
        </nav>
      </header>
      <a href="#">
        <h2>Manga readers Come this way..</h2>
      </a>
      <h3>Would love to hear your suggestions to improve our Content</h3>
      <ul id="d">
        Comments
        <input type="text" placeholder="Interaction is the Key.." />
      </ul>
    </div>
  );
};

export default Homepage;
