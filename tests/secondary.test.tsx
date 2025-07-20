import Secondary from "@/app/secondary";
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
