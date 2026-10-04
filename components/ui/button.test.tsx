import { describe, it, expect } from "vitest";
import { buttonVariants } from "./button";

describe("Button", () => {
  it("applies variant class", () => {
    const classes = buttonVariants({ variant: "outline", size: "default" });
    expect(classes).toContain("border-border");
  });

  it("applies size class", () => {
    const classes = buttonVariants({ variant: "default", size: "sm" });
    expect(classes).toContain("h-7");
  });

  it("defaults to default variant and size", () => {
    const classes = buttonVariants();
    expect(classes).toContain("bg-primary");
    expect(classes).toContain("h-8");
  });
});
