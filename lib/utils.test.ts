import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("concatenates class names", () => {
    expect(cn("px-4", "py-2", "rounded")).toBe("px-4 py-2 rounded");
  });

  it("filters falsy values", () => {
    expect(cn("px-4", false && "hidden", "rounded")).toBe("px-4 rounded");
  });
});
