import { render, screen } from "@testing-library/react";
import Page from "./Page";

describe("Page", () => {
  it("renders hero headline", () => {
    render(<Page />);
    expect(screen.getByText(/Безупречные узлы/i)).toBeInTheDocument();
  });
});
