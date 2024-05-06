// 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
import React, { useState, useEffect, useRef } from "react";

function InfiniteScroll() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const containerRef = useRef();
  const [hasMore, setHasMore] = useState();
  const [intersecting, setIntersecting] = useState(false);
  const pageRef = useRef(1);

  const fetchProducts = async (page = pageRef.current) => {
    setLoading(true);
    try {
      let response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          (page - 1) * 10
        }&select=title,price`
      );
      response = await response.json();
      setData((prev) => {
        console.log(response);
        const newData = [...prev, ...response.products];
        console.log(newData.length);
        if (newData.length < response.total) {
          setHasMore(true);
        } else {
          setHasMore(false);
        }
        return newData;
      });
    } catch (err) {
      setHasMore(false);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts(pageRef.current + 1);
    pageRef.current = pageRef.current + 1;
  }, [intersecting]);

  useEffect(() => {
    console.log(containerRef);
    const ref = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);
        setIntersecting(entry.isIntersecting);
      },
      {
        threshold: 1,
        root: null,
        rootMargin: "10px",
      }
    );
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      ref && observer.unobserve(ref);
    };
  }, [containerRef]);

  console.log(intersecting, hasMore);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map(({ id, title, price }) => (
          <div>
            <p>{title}</p>
            <p>{price}</p>
            <p>{id}</p>
          </div>
        ))
      )}
      {<div ref={containerRef}>Loading more products</div>}
    </div>
  );
}

export default InfiniteScroll;
