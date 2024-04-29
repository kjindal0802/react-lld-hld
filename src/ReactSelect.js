import React, { useEffect } from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import Select from "react-select";
import _ from "lodash";

let renderCount = 0;

export default function App() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "dimensions_suppresionfilter",
  });

  useEffect(() => {
    setValue("dimensions_suppresionfilter", [
      { label: "One", value: "1" },
      { label: "Two", value: "2" },
    ]);
  }, []);

  const onSubmit = (data) => console.log("data", data);

  renderCount++;

  const values = watch();
  console.log("Form values :", values);
  console.log("Form errors :", errors);

  const getOptions = () => {
    const options = [
      { label: "One", value: "1" },
      { label: "Two", value: "2" },
      { label: "Three", value: "3" },
    ];

    const selectedOptions = values.dimensions_suppresionfilter;
    console.log("selected options :", selectedOptions);

    if (selectedOptions.length > 0) {
      const updatedOptions = _.differenceWith(
        [
          { label: "One", value: "1" },
          { label: "Two", value: "2" },
          { label: "Three", value: "3" },
        ],
        [
          { label: "One", value: "1" },
          { label: "Two", value: "2" },
        ],
        _.isEqual
      );

      return updatedOptions;
    }
  };

  const renderFields = () => {
    return fields.map((item, index) => {
      return (
        <li key={item.id}>
          <Controller
            name={`dimensions_suppresionfilter[${index}]`}
            defaultValue={`dimensions_suppresionfilter[${index}`}
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => <Select {...field} options={getOptions()} />}
          />
          <button type="button" onClick={() => remove(index)}>
            Delete
          </button>
        </li>
      );
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Field Array </h1>
      <p>The following demo allow you to delete, append, prepend items</p>
      <span className="counter">Render Count: {renderCount}</span>
      <ul>
        <Controller
          name={`firstName`}
          defaultValue={`Hello`}
          control={control}
          render={({ field }) => <input {...field} />}
        />

        {renderFields()}
      </ul>
      <section>
        <button
          type="button"
          onClick={() => {
            append({ name: "", dataType: "" });
          }}
        >
          append
        </button>
      </section>

      <input type="submit" />
    </form>
  );
}
