import React, { useState, useEffect, useRef } from "react";

function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    loadItems();

    // Initialize IntersectionObserver only once
    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "10px",
      threshold: 1.0,
    });

    // Clean up the observer when component unmounts
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (loaderRef.current) {
      observer.current.observe(loaderRef.current);
    }
  }, [loaderRef]);

  useEffect(() => {
    if (!isLoading) return;

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
        console.log(data);
        setItems((prevItems) => [...prevItems, ...data.docs]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [pageNumber, isLoading]);

  const handleIntersection = ([entry]) => {
    if (entry.isIntersecting) {
      console.log("Inside intersection");
      setIsLoading(true);
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  const loadItems = () => {
    setIsLoading(true);
    setPageNumber(1);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.key}>{item.title}</li>
        ))}
      </ul>
      {isLoading && <div>Loading...</div>}
      <div ref={loaderRef}></div>
    </div>
  );
}

export default InfiniteScroll;
