import Goal from "./Goal";
import { type GoalState as GoalInfo } from "../App";
import EmptyStateImage from "../assets/nodata.svg";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type GoalListProps = {
  goals: GoalInfo[];
  onDelete: (id: number) => void;
};

const GoalList = ({ goals, onDelete }: GoalListProps) => {
  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning">You're collecting a lot of goals.</InfoBox>
    );
  }

  return (
    <div className="wrap-list">
      {goals.length > 0 ? (
        <>
          <ul aria-live="polite">
            {goals.map((goal) => (
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
            ))}
          </ul>
          {warningBox}
        </>
      ) : (
        <InfoBox mode="hint">
          <img src={EmptyStateImage} alt="empty data" className="no-data-image" />
          <p>You have no goals yet.</p>
        </InfoBox>
      )}
    </div>
  );
};

export default GoalList;
