import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Task from "../components/Task";

test("displays the task text", () => {
  render(<Task text={"text!"} category={"category!"} />);
  expect(screen.getByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  render(<Task text={"text!"} category={"category!"} />);
  expect(screen.getByText("category!")).toBeInTheDocument();
});

test("calls onDeleteTask callback when delete button is clicked", () => {
  const mockDelete = jest.fn();
  render(
    <Task
      text={"text!"}
      category={"category!"}
      onDeleteTask={mockDelete} // Changed from onDelete to onDeleteTask
    />
  );

  const deleteButton = screen.getByRole("button", { name: /delete/i });
  fireEvent.click(deleteButton);

  expect(mockDelete).toHaveBeenCalled();
});
