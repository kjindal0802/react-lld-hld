import React, { useEffect, useState } from "react";

const lastMountTime = "LAST_MOUNT_TIME";
const LIMIT = 300000;
const USER_DATA = "USER_DATA";

function HOC(Component, data) {
  return function WrappedComponent() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetchApiData();
    }, []);

    const fetchApiData = () => {
      if (localStorage.getItem(lastMountTime)) {
        if (Date.now() - localStorage.getItem(lastMountTime) > LIMIT) {
          fetchApiCall();
        } else {
          setUserData(JSON.parse(localStorage.getItem(USER_DATA)));
        }
      } else {
        localStorage.setItem(lastMountTime, Date.now());
      }
    };

    const fetchApiCall = () => {
      setLoading(true);
      try {
        let res = fetch("/mock/call");
        res = res.json();
        localStorage.setItem(USER_DATA, JSON.stringify(res.data));
        setUserData(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    return <Component userData={userData} error={error} loading={loading} />;
  };
}

function App({ userData }) {
  return <p>Hello</p>;
}

export default HOC(App);
