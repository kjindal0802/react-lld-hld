import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const observer = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    loadItems();

    observer.current = new IntersectionObserver(handleCallback, {
      root: null,
      rootMargin: "10px",
      threshold: 1.0,
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const loadItems = () => {
    setLoading(true);
    setPageNumber(1);
  };

  useEffect(() => {
    if (container.current) {
      observer.current.observe(container.current);
    }
  }, [container]);

  useEffect(() => {
    if (!loading) {
      return;
    }
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://openlibrary.org/search.json?" +
            new URLSearchParams({
              q: "abc",
              page: pageNumber,
            })
        );
        const data = await response.json();
        setData((prevItems) => [...prevItems, ...data.docs]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [pageNumber, loading]);

  const handleCallback = ([entry]) => {
    if (entry.isIntersecting && !loading) {
      setLoading(true);
      setPageNumber((prev) => prev + 1);
    }
  };

  return (
    <>
      <div>
        <ul>
          {data.map(({ title_sort }) => (
            <li>{title_sort}</li>
          ))}
        </ul>
        {loading && <div> Loading....</div>}
        <div ref={container}></div>
      </div>
    </>
  );
}
