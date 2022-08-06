import { evenOrOdd, multiply } from "@/playground";
describe("Maths", () => {
  it("Adding numbers", () => {
    expect(1 + 13).toBe(14);
    expect(3 + 7).toBe(10);
  });
  it("subtracts", () => {
    expect(190 - 10).toBe(180);
  });
  describe("EvenOrOdd", () => {
    describe("When Even number", () => {
      it("Number is even", () => {
        expect(evenOrOdd(4)).toBe("Even");
      });
    });
  });

  describe("EvenOrOdd", () => {
    it("When number is Odd", () => {
      expect(evenOrOdd(45)).toBe("Odd");
      expect(evenOrOdd(145)).toBe("Odd");
      expect(evenOrOdd(447)).toBe("Odd");
      expect(evenOrOdd(467)).toBe("Odd");
      expect(evenOrOdd(475)).toBe("Odd");
    });
  });
  describe("Multipley", () => {
    it("multiplication of two numbers", () => {
      expect(multiply(5, 6)).toBe(30);
    });
  });
});
