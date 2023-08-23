import React, { useState } from "react";

// import styling
import classes from "./UserInput.module.css";

const initialValue = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialValue);

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialValue);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prev) => {
      return { ...prev, [input]: +value };
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id={"current-savings"}
            value={userInput["current-savings"]}
            onChange={(e) =>
              inputChangeHandler("current-savings", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(e) =>
              inputChangeHandler("yearly-contribution", e.target.value)
            }
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput["expected-return"]}
            onChange={(e) =>
              inputChangeHandler("expected-return", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput["duration"]}
            onChange={(e) => inputChangeHandler("duration", e.target.value)}
          />
        </p>
      </div>
      <p className={classes["actions"]}>
        <button
          type="reset"
          className={classes["buttonAlt"]}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
