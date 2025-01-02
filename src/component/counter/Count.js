import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementByOne } from "./CountSlice";
import { decrementByOne } from "./CountSlice";
import { incrementByAmount } from "./CountSlice";
function Count() {
  const initialvalue = useSelector((state) => state.counter.value);
  console.log(initialvalue);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(incrementByOne());
  };

  const decrement = () => {
    dispatch(decrementByOne());
  };
  const incrementamount = () => {
    dispatch(incrementByAmount(10));
  };
  return (
    <div>
      <h1>{initialvalue}</h1>
      <button type="button" onClick={() => increment()}>
        {" "}
        +
      </button>
      <button type="button" onClick={() => decrement()}>
        -
      </button>
      <button type="button" on onClick={() => incrementamount(10)}>
        increment
      </button>
    </div>
  );
}

export default Count;
