import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseSauce } from "../../reduxtoolkit/slice";

export default function Step3() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sauce = useSelector((state) => state.sauce);
  const { register, handleSubmit } = useForm({
    defaultValue: {
      sauce: sauce,
    },
  });

  const onSubmit = (data) => {
    dispatch(chooseSauce(data.sauce));
    history.push("./step4");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="sauce">Select Sauce: </label>
          <select id="sauce" name="sauce" {...register("sauce")}>
            <option value="pizza-sauce">Regular</option>
            <option value="chitpole">Chitpole</option>
            <option value="mint">Mint</option>
          </select>
          <button>Next</button>
        </div>
      </form>
    </>
  );
}
