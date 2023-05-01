// @ts-ignore
import React from "react";
import { render } from "@testing-library/react";
import Life from "./Life";

describe("HungryComponent", () => {
  // 既存のテストケース...

  it("renders data-value attribute correctly", () => {
    const value = 5;
    const { container } = render(<Life value={value} />);
    const element = container.firstChild;

    expect(element).toHaveAttribute("data-value", value.toString());
  });
});
