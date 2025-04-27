import { FC, PropsWithChildren } from "react";

type GoalProps = PropsWithChildren<{
  title: string;
  id: number;
  onDelete: (id: number) => void;
}>;

const Goal: FC<GoalProps> = ({ title, children, id, onDelete }) => {
  return (
    <article>
      <div>
        <h3>{title}</h3>
        {children}
      </div>
      <button onClick={() => onDelete(id)} aria-label={`Delete goal: ${title}`}>Delete</button>
    </article>
  );
};

export default Goal;
