import User from "./User";

export default function Users(props) {
  return (
    <div>
      {props.data.map((user) => (
        <User data={user}></User>
      ))}
    </div>
  );
}
