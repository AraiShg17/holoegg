// @ts-ignore
import React from "react";
import { render } from "@testing-library/react";
import Hungry from "./Hungry";

describe("HungryComponent", () => {
  // 既存のテストケース...

  it("renders data-value attribute correctly", () => {
    const value = 5;
    const { container } = render(<Hungry value={value} />);
    const element = container.firstChild;

    expect(element).toHaveAttribute("data-value", value.toString());
  });
});
