import React, { useEffect, useState } from "react";

export default function WrappedIndicator(Component, value) {
  return function WrappedComponent(props) {
    let [data, setData] = useState();
    let [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      console.log("fetching Data");
      setTimeout(() => {
        setData(value);
        setTimeout(() => {
          setLoading(false);
        }, 100);
      }, 5000);
    }, []);

    return <Component loading={loading} data={data} {...props} />;
  };
}
