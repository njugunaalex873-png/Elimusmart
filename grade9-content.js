
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

grade9Content.Mathematics.push(
  {
    topic: "Percentages",
    notes: [
      "Percentage means out of 100.",
      "Percentage = (part / whole) × 100%.",
      "To find a percentage of a number, convert the percentage to a fraction or decimal and multiply.",
      "Percentage increase = (increase / original value) × 100%."
    ],
    examples: [
      {
        question: "Find 20% of 450.",
        working: [
          "20% = 20/100.",
          "20/100 × 450 = 9000/100.",
          "9000 ÷ 100 = 90."
        ],
        answer: "90"
      }
    ],
    questions: [
      {
        q: "Find 25% of 200.",
        options: ["25", "40", "50", "75"],
        answer: 2,
        explanation: "25/100 × 200 = 50."
      },
      {
        q: "Express 3/5 as a percentage.",
        options: ["30%", "50%", "60%", "80%"],
        answer: 2,
        explanation: "3/5 × 100% = 60%."
      }
    ]
  },
  {
    topic: "Ratio and Proportion",
    notes: [
      "A ratio compares two or more quantities.",
      "Simplify a ratio by dividing all its terms by their highest common factor.",
      "Equivalent ratios have the same value.",
      "Direct proportion means two quantities increase or decrease together at a constant rate."
    ],
    examples: [
      {
        question: "Simplify the ratio 18:24.",
        working: [
          "The highest common factor of 18 and 24 is 6.",
          "18 ÷ 6 = 3.",
          "24 ÷ 6 = 4."
        ],
        answer: "3:4"
      }
    ],
    questions: [
      {
        q: "Simplify 15:25.",
        options: ["3:5", "5:3", "2:5", "5:8"],
        answer: 0,
        explanation: "Divide both terms by 5."
      },
      {
        q: "If 2 books cost KSh 100, what do 6 books cost at the same rate?",
        options: ["KSh 150", "KSh 200", "KSh 300", "KSh 600"],
        answer: 2,
        explanation: "One book costs 100 ÷ 2 = KSh 50. Six cost 6 × 50 = KSh 300."
      }
    ]
  },
  {
    topic: "Indices",
    notes: [
      "An index shows how many times a number is multiplied by itself.",
      "For the same base, multiply powers by adding indices: aᵐ × aⁿ = aᵐ⁺ⁿ.",
      "When dividing powers with the same base, subtract the indices.",
      "A non-zero number raised to power zero equals 1."
    ],
    examples: [
      {
        question: "Simplify 2³ × 2².",
        working: [
          "Add the indices because the bases are equal.",
          "2³ × 2² = 2⁽³⁺²⁾.",
          "2⁵ = 2 × 2 × 2 × 2 × 2 = 32."
        ],
        answer: "32"
      }
    ],
    questions: [
      {
        q: "Evaluate 3².",
        options: ["6", "9", "8", "12"],
        answer: 1,
        explanation: "3² = 3 × 3 = 9."
      },
      {
        q: "Simplify 5⁴ ÷ 5².",
        options: ["5²", "5⁶", "1", "5⁸"],
        answer: 0,
        explanation: "Subtract the indices: 5⁽⁴⁻²⁾ = 5²."
      }
    ]
  },
  {
    topic: "Linear Equations",
    notes: [
      "An equation states that two expressions are equal.",
      "Keep an equation balanced by performing the same operation on both sides.",
      "Collect like terms before solving when necessary.",
      "Check a solution by substituting it into the original equation."
    ],
    examples: [
      {
        question: "Solve 3x + 4 = 19.",
        working: [
          "3x + 4 = 19.",
          "Subtract 4 from both sides: 3x = 15.",
          "Divide both sides by 3: x = 15 ÷ 3.",
          "x = 5."
        ],
        answer: "x = 5"
      }
    ],
    questions: [
      {
        q: "Solve 4x = 28.",
        options: ["6", "7", "8", "24"],
        answer: 1,
        explanation: "Divide both sides by 4: x = 7."
      },
      {
        q: "Solve 2x + 3 = 13.",
        options: ["4", "5", "6", "8"],
        answer: 1,
        explanation: "Subtract 3 to get 2x = 10, then divide by 2."
      }
    ]
  },
  {
    topic: "Geometry: Angles",
    notes: [
      "Angles on a straight line add up to 180°.",
      "Angles around a point add up to 360°.",
      "Vertically opposite angles are equal.",
      "The interior angles of a triangle add up to 180°.",
      "Corresponding angles are equal when parallel lines are crossed by a transversal."
    ],
    examples: [
      {
        question: "Two angles on a straight line are x and 65°. Find x.",
        working: [
          "Angles on a straight line add up to 180°.",
          "x + 65° = 180°.",
          "x = 180° - 65°.",
          "x = 115°."
        ],
        answer: "115°"
      }
    ],
    questions: [
      {
        q: "What is the sum of angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        answer: 1,
        explanation: "The interior angles of a triangle total 180°."
      },
      {
        q: "Angles around a point add up to:",
        options: ["90°", "180°", "270°", "360°"],
        answer: 3,
        explanation: "A complete turn is 360°."
      }
    ]
  },
  {
    topic: "Perimeter, Area and Volume",
    notes: [
      "Perimeter is the total distance around a two-dimensional shape.",
      "Area is the surface covered by a two-dimensional shape.",
      "Rectangle area = length × width.",
      "Triangle area = 1/2 × base × perpendicular height.",
      "Cuboid volume = length × width × height.",
      "Always use appropriate units: cm for length, cm² for area and cm³ for volume."
    ],
    examples: [
      {
        question: "Find the area of a rectangle 8 cm long and 5 cm wide.",
        working: [
          "Area = length × width.",
          "Area = 8 × 5.",
          "Area = 40 cm²."
        ],
        answer: "40 cm²"
      }
    ],
    questions: [
      {
        q: "Find the perimeter of a square of side 6 cm.",
        options: ["12 cm", "24 cm", "36 cm", "18 cm"],
        answer: 1,
        explanation: "Perimeter = 4 × 6 = 24 cm."
      },
      {
        q: "Find the volume of a cuboid measuring 3 cm × 4 cm × 5 cm.",
        options: ["12 cm³", "20 cm³", "60 cm³", "47 cm³"],
        answer: 2,
        explanation: "Volume = 3 × 4 × 5 = 60 cm³."
      }
    ]
  },
  {
    topic: "Statistics",
    notes: [
      "Statistics involves collecting, organising, presenting and interpreting data.",
      "The mean is the sum of all values divided by the number of values.",
      "The median is the middle value when data is arranged in order.",
      "The mode is the value that occurs most frequently.",
      "The range is the highest value minus the lowest value."
    ],
    examples: [
      {
        question: "Find the mean of 2, 4, 6, 8.",
        working: [
          "Add the values: 2 + 4 + 6 + 8 = 20.",
          "There are 4 values.",
          "Mean = 20 ÷ 4 = 5."
        ],
        answer: "5"
      }
    ],
    questions: [
      {
        q: "Find the mode of 2, 3, 3, 5, 7.",
        options: ["2", "3", "5", "7"],
        answer: 1,
        explanation: "3 appears more often than any other value."
      },
      {
        q: "Find the range of 4, 9, 2, 7.",
        options: ["5", "6", "7", "11"],
        answer: 2,
        explanation: "Range = 9 - 2 = 7."
      }
    ]
  },
  {
    topic: "Probability",
    notes: [
      "Probability measures how likely an event is to occur.",
      "Probability = number of favourable outcomes divided by total equally likely outcomes.",
      "Probability ranges from 0 to 1.",
      "An impossible event has probability 0; a certain event has probability 1."
    ],
    examples: [
      {
        question: "A fair die is rolled. Find the probability of getting a 4.",
        working: [
          "There are 6 equally likely outcomes.",
          "Only one outcome is a 4.",
          "Probability = 1/6."
        ],
        answer: "1/6"
      }
    ],
    questions: [
      {
        q: "What is the probability of getting a head when a fair coin is tossed?",
        options: ["0", "1/4", "1/2", "1"],
        answer: 2,
        explanation: "There are two equally likely outcomes and one is a head."
      },
      {
        q: "What is the probability of an impossible event?",
        options: ["0", "1/2", "1", "2"],
        answer: 0,
        explanation: "An impossible event has probability zero."
      }
    ]
  }
);
        
window.grade9Content = grade9Content;
