import Main from "@/app/components/main";
import { render, screen } from "@testing-library/react";

test("main component matches snapshot", () => {
  const { asFragment } = render(<Main />);
  expect(asFragment()).toMatchSnapshot();
});

test("all static elements are rendered correctly", () => {
  render(<Main />);
  const header = screen.getByRole("heading", { name: /jest test/i });
  const description = screen.getByText(/Let's try writing some unit tests!/i);
  const image = screen.getByAltText("Test Image");

  expect(header).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});

test("test button and link elements work properly", () => {
  render(<Main />);

  const link = screen.getByTestId("pexels-link");
  const button = screen.getByRole("button", {
    name: /go to secondary section/i,
  });
  const buttonLink = button.querySelector("a");

  expect(link).toBeInTheDocument();
  window.open = jest.fn(); // Mock window.open to prevent actual navigation
  link.click();
  expect(window.open).toHaveBeenCalledWith(
    "https://www.pexels.com/photo/time-displayed-on-top-of-a-building-1824273/",
    "_blank"
  );

  expect(button).toBeInTheDocument();
  expect(buttonLink).toHaveAttribute("href", "#secondary");
});
