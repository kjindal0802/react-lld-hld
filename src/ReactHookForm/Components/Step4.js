import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseCheese } from "../../reduxtoolkit/slice";

export default function Step4() {
  const dispatch = useDispatch();
  const history = useHistory();
  const cheese = useSelector((state) => state.cheese);
  const { register, handleSubmit } = useForm({
    defaultValue: {
      cheese: cheese,
    },
  });

  const onSubmit = (data) => {
    dispatch(chooseCheese(data.cheese));
    history.push("./result");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="cheese">Select cheese: </label>
          <select id="cheese" name="cheese" {...register("cheese")}>
            <option value="no-cheese">No Extra Cheese</option>
            <option value="extra-cheese">Extra Cheese</option>
          </select>
          <button>Next</button>
        </div>
      </form>
    </>
  );
}
