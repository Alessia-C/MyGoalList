import { render, screen, waitFor, } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  const setItemMock = jest.fn();
  const getItemMock = jest.fn(() => JSON.stringify([]));

  Object.defineProperty(window, "localStorage", {
    value: {
      setItem: setItemMock,
      getItem: getItemMock,
      clear: jest.fn(),
    },
    writable: true,
  });
});

describe('App component', () => {
  it('renders the header and the goal list', () => {
    render(<App />);
    // check if the title exists
    expect(screen.getByText('MyGoalList')).toBeInTheDocument();
  });
})

it('should add a new goal to the list', async () => {
  render(<App />);
  // simulate the insertion of a new goal
  userEvent.type(screen.getByPlaceholderText('Title'), 'New Goal');
  userEvent.type(screen.getByPlaceholderText('Description'), 'This is a new Goal');
  userEvent.click(screen.getByText('Add Goal'));

 const newGoal = await screen.findByText('Add Goal');
 expect(newGoal).toBeInTheDocument();
})

it('should delete a goal from the list', async () => {
  render(<App /> );

  userEvent.type(screen.getByPlaceholderText('Title'), 'Goal to be deleted');
  userEvent.type(screen.getByPlaceholderText('Description'), 'This goal will be deleted');
  userEvent.click(screen.getByText('Add Goal'));

  const deleteCta = screen.getByText("Delete");
  userEvent.click(deleteCta);

  await waitFor(() =>  expect(screen.queryByText('Goal to be deleted')).not.toBeInTheDocument());
})