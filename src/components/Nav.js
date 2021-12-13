import React from "react";

function Nav({ libraryStatus, setlibraryStatus }) {
  return (
    <nav>
      <h1>Cong's Chill Music</h1>
      <button onClick={() => setlibraryStatus(!libraryStatus)}>
        Library
        <i className="fas fa-music"></i>
      </button>
    </nav>
  );
}

export default Nav;
