import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseCrust } from "../../reduxtoolkit/slice";

export default function Step2() {
  const dispatch = useDispatch();
  const history = useHistory();
  const crust = useSelector((state) => state.crust);
  const { register, handleSubmit } = useForm({
    defaultValue: {
      crust: crust,
    },
  });

  const onSubmit = (data) => {
    dispatch(chooseCrust(data.crust));
    history.push("./step3");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="crust">Select Crust: </label>
          <select id="crust" name="crust" {...register("crust")}>
            <option value="classic">Classic</option>
            <option value="cheeseburst">Cheeseburst</option>
            <option value="pantossed">Pan Tossed</option>
          </select>
          <button>Next</button>
        </div>
      </form>
    </>
  );
}
