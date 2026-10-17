
const grade9Content = {
  Mathematics: [
    {
      topic: "Fractions",
      notes: [
        "A fraction represents part of a whole.",
        "To add fractions with different denominators, first find a common denominator.",
        "To multiply fractions, multiply the numerators together and the denominators together.",
        "To divide by a fraction, multiply by its reciprocal."
      ],
      examples: [
        {
          question: "Calculate 1/2 + 1/4.",
          working: [
            "The common denominator is 4.",
            "1/2 = 2/4.",
            "2/4 + 1/4 = 3/4."
          ],
          answer: "3/4"
        },
        {
          question: "Calculate 2/3 × 3/5.",
          working: [
            "Multiply the numerators: 2 × 3 = 6.",
            "Multiply the denominators: 3 × 5 = 15.",
            "Simplify 6/15 by dividing both numbers by 3."
          ],
          answer: "2/5"
        }
      ],
      questions: [
        {
          q: "Calculate 1/3 + 1/6.",
          options: ["1/9", "1/2", "2/9", "2/3"],
          answer: 1,
          explanation: "1/3 = 2/6, so 2/6 + 1/6 = 3/6 = 1/2."
        },
        {
          q: "Calculate 3/4 - 1/4.",
          options: ["1/2", "1/4", "2/8", "1"],
          answer: 0,
          explanation: "3/4 - 1/4 = 2/4 = 1/2."
        },
        {
          q: "Calculate 2/5 × 1/3.",
          options: ["3/8", "2/15", "2/8", "3/15"],
          answer: 1,
          explanation: "Multiply the numerators and denominators: 2 × 1 / (5 × 3) = 2/15."
        },
        {
          q: "Calculate 1/2 ÷ 1/4.",
          options: ["1/8", "2", "1/2", "4"],
          answer: 1,
          explanation: "1/2 × 4/1 = 4/2 = 2."
        },
        {
          q: "Simplify 12/18.",
          options: ["3/4", "2/3", "4/9", "6/8"],
          answer: 1,
          explanation: "Divide the numerator and denominator by 6 to get 2/3."
        }
      ]
    },
    {
      topic: "Algebra",
      notes: [
        "An algebraic expression contains numbers, variables and operations.",
        "Like terms have the same variables raised to the same powers.",
        "An equation states that two expressions are equal.",
        "To solve a simple equation, perform the same operation on both sides."
      ],
      examples: [
        {
          question: "Solve x + 7 = 15.",
          working: [
            "x + 7 = 15",
            "Subtract 7 from both sides.",
            "x = 15 - 7",
            "x = 8"
          ],
          answer: "x = 8"
        },
        {
          question: "Simplify 3a + 2a - a.",
          working: [
            "Collect like terms.",
            "(3 + 2 - 1)a = 4a."
          ],
          answer: "4a"
        }
      ],
      questions: [
        {
          q: "Simplify 4x + 3x.",
          options: ["7", "7x", "12x", "x"],
          answer: 1,
          explanation: "Add the coefficients: 4x + 3x = 7x."
        },
        {
          q: "Solve x - 5 = 9.",
          options: ["4", "14", "-14", "5"],
          answer: 1,
          explanation: "Add 5 to both sides: x = 9 + 5 = 14."
        },
        {
          q: "If a = 3, find 2a + 4.",
          options: ["10", "14", "7", "6"],
          answer: 0,
          explanation: "Substitute a = 3: 2(3) + 4 = 10."
        },
        {
          q: "Expand 3(x + 2).",
          options: ["3x + 2", "3x + 6", "x + 6", "5x"],
          answer: 1,
          explanation: "Multiply 3 by each term inside the brackets."
        },
        {
          q: "Solve 2x = 18.",
          options: ["9", "16", "20", "36"],
          answer: 0,
          explanation: "Divide both sides by 2: x = 9."
        }
      ]
    }
  ]
};

if (typeof module !== "undefined") {
  module.exports = grade9Content;
}
