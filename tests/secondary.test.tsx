import Secondary from "@/app/components/secondary";
import { render, screen, act } from "@testing-library/react";

// Mock timers for controlling setInterval
jest.useFakeTimers();

afterEach(() => {
  jest.clearAllTimers();
});

test("button toggles visibility every 3 seconds", () => {
  render(<Secondary />);

  // initially visible
  expect(
    screen.getByRole("button", { name: /click me!/i })
  ).toBeInTheDocument();

  //after 3 seconds - hidden
  act(() => {
    jest.advanceTimersByTime(3000);
  });
  expect(
    screen.queryByRole("button", { name: /click me!/i })
  ).not.toBeInTheDocument();

  // after another 3 seconds - visible again
  act(() => {
    jest.advanceTimersByTime(3000);
  });
  expect(
    screen.getByRole("button", { name: /click me!/i })
  ).toBeInTheDocument();

  // after another 3 seconds - hidden again
  act(() => {
    jest.advanceTimersByTime(3000);
  });
  expect(
    screen.queryByRole("button", { name: /click me!/i })
  ).not.toBeInTheDocument();
});

test("button click creates an alert", () => {
  window.alert = jest.fn(); // Mock the alert function
  render(<Secondary />);

  const button = screen.getByRole("button", { name: /click me!/i });
  button.click();
  expect(window.alert).toHaveBeenCalledWith("Button clicked!");
  expect(window.alert).toHaveBeenCalledTimes(1);
});

test("button has correct styles", () => {
  render(<Secondary />);

  const button = screen.getByRole("button", { name: /click me!/i });
  expect(button).toHaveClass(
    "px-6",
    "py-3",
    "bg-purple-500",
    "text-white",
    "rounded-lg",
    "hover:bg-purple-600",
    "transition-colors",
    "duration-200"
  );
});
