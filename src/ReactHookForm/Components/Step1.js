import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseBase } from "../../reduxtoolkit/slice";

export default function Step1() {
  const dispatch = useDispatch();
  const history = useHistory();
  const base = useSelector((state) => state.base);
  const { register, handleSubmit } = useForm({
    defaultValue: {
      base: base,
    },
  });

  const onSubmit = (data) => {
    dispatch(chooseBase(data.base));
    history.push("./step2");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="base">Select Base: </label>
          <select id="base" name="base" {...register("base")}>
            <option value="small">Regular</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          <button>Next</button>
        </div>
      </form>
    </>
  );
}
