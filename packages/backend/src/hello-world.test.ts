import { describe, expect, it } from 'vitest';
import { helloWorld } from "./hello-world";

describe("hello-world", () => {
  it("should return hello world", () => {
    const result = helloWorld();

    expect(result).toEqual("Hello, world!");
  });
});
