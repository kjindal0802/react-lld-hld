export default function User(props) {
  return (
    <div>
      <p>
        Name : {props.data.name} || Age : {props.data.age}
      </p>
    </div>
  );
}
