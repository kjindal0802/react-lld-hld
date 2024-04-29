import { useState, useEffect } from "react";
import PodcastGrid from "./PodcastGrid";
import "./App.css";

export default function Podcast() {
  const [rssFeed, setRssFeed] = useState(
    "https://feeds.simplecast.com/tOjNXec5"
  );
  const [quickFilter, setQuickFilter] = useState("");

  const handleLoadFeedClick = () => {
    const inputRssFeed = document.getElementById("rssFeedUrl").value;
    setRssFeed(inputRssFeed);
  };
  const handleFilterChange = (event) => {
    setQuickFilter(event.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>Podcast Grid</h1>
        <div>
          <label htmlFor="rssFeedUrl">RSS Feed URL:</label>
          <input
            type="text"
            id="rssFeedUrl"
            name="rssFeedUrl"
            style={{ width: "80%" }}
            defaultValue={rssFeed}
          />
          <button onClick={handleLoadFeedClick}>Load Feed</button>
        </div>
        <div>
          <label htmlFor="quickfilter">Quick Filter:</label>
          <input
            type="text"
            id="quickfilter"
            name="quickfilter"
            value={quickFilter}
            onChange={handleFilterChange}
          />
        </div>
      </header>
      <PodcastGrid
        width="100%"
        height="400px"
        rssfeed={rssFeed}
        quickFilter={quickFilter}
      ></PodcastGrid>
    </div>
  );
}
