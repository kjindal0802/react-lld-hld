import React, { useEffect } from "react";

export default function App() {
  return (
    <FetchAPI
      render={(data) => {
        return <p>{data}</p>;
      }}
    />
  );
}

function FetchAPI(props) {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData("Hello Gokaran");
    }, 2000);
  }, []);

  let { render } = props;

  console.log(data);

  return <div>{data ? render(data) : <p>Loading...</p>}</div>;
}
