import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";

import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal";

export type GoalState = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<GoalState[]>([]);

  // get goal in the local storage
  const getAllGoal = () => {
    const storedGoals = localStorage.getItem("mygoalList_goals");
    return storedGoals ? JSON.parse(storedGoals) : [];
  };

  useEffect(() => {
    const getGoals = getAllGoal();
    setGoals(getGoals);
  }, []);

  // save goals in the local storage
  const saveGoalsToLocalStorage = (goals: GoalState[]) => {
    if (goals.length > 0) {
      localStorage.setItem("mygoalList_goals", JSON.stringify(goals));
    }
  };

  useEffect(() => {
    if (goals.length > 0) {
      saveGoalsToLocalStorage(goals);
    }
  }, [goals]);

  const addGoalHandler = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: GoalState = {
        title: goal,
        description: summary,
        id: Math.random(),
      };

      return [...prevGoals, newGoal];
    });
  };

  const deleteGoalHandler = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <section className="App">
      {/* <Header image={{ src: goalsImg, alt: "A list of Gials" }}> */}
      <Header>
        <h1>MyGoalList</h1>
      </Header>
      <main>
        <NewGoal onAddGoal={addGoalHandler} />
        <GoalList goals={goals} onDelete={deleteGoalHandler} />
      </main>
    </section>
  );
}

export default App;
