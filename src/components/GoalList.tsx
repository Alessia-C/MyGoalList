import Goal from "./Goal";
import { type GoalState as GoalInfo } from "../App";
import EmptyStateImage from "../assets/nodata.svg";

type GoalListProps = {
  goals: GoalInfo[];
  onDelete: (id: number) => void;
};

const GoalList = ({ goals, onDelete }: GoalListProps) => {
  return (
    <ul aria-live="polite" className="wrap-list">
      {goals.length > 0 ? (
        goals.map((goal) => (
          <li key={goal.id}>
            <Goal
              id={goal.id}
              title={goal.title}
              onDelete={onDelete}
              aria-label={`Goal: ${goal.title}`}
            >
              <p>{goal.description}</p>
            </Goal>
          </li>
        ))
      ) : (
        <li>
          <img src={EmptyStateImage} alt="empty data" />
          <p>Your list is empty. Add a new goal!</p>
        </li>
      )}
    </ul>
  );
};

export default GoalList;
