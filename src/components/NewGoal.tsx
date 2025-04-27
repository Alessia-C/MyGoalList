import { FormEvent, useRef, useState } from "react";

type NewGoalProp = {
  onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal = ({ onAddGoal }: NewGoalProp) => {
  const [inputValues, setInputValues] = useState({
    goal: "",
    summary: "",
  });
  // const goal = useRef<HTMLInputElement>(null);
  // const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const enteredGoal = goal.current!.value.trim();
    // const enteredSummary = summary.current!.value.trim();
    const enteredGoal = inputValues.goal.trim();
    const enteredSummary = inputValues.summary.trim();

    // event.currentTarget.reset();
    setInputValues({ goal: "", summary: "" });
    onAddGoal(enteredGoal, enteredSummary);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter" && inputValues.goal.trim() && inputValues.summary.trim()) {
      handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
    }
  }

  const isFormValid = inputValues.goal.trim() !== "" && inputValues.summary.trim() !== "";

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Title</label>
        <input
          type="text"
          id="goal"
          name="goal"
          // ref={goal}
          placeholder="Title"
          value={inputValues.goal}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </p>
      <p>
        <label htmlFor="summary">Description</label>
        <input
          type="text"
          id="summary"
          name="summary"
          // ref={summary}
          placeholder="Description"
          value={inputValues.summary}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </p>
      <button disabled={!isFormValid} type="submit" className={!isFormValid ? "disabled" : ""}>
        Add Goal
      </button>
    </form>
  );
};

export default NewGoal;
