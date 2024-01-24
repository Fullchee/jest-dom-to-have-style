import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App>", () => {
  it("should have an aspect-ratio", () => {
    render(<App />);
    const app = screen.getByText("Hello");
    /*
    expect(element).toHaveStyle()

    - Expected
    - aspect-ratio: 1; */
    // expect(app).toHaveStyle({ aspectRatio: 1 });
    expect(app).toHaveStyle({ "aspect-ratio": 1 });
  });

  it("should have a custom property", () => {
    render(<App />);
    const app = screen.getByText("Hello");

    // workaround
    expect(app.style._values).toMatchObject({
      "--my-property": "1", // string instead of a number
    });

    // Compared values have no visual difference
    expect(app).toHaveStyle({ "--my-property": 1 });
  });
});
