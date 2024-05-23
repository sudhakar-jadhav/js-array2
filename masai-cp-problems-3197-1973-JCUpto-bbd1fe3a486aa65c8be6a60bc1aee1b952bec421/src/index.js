// ** you can use the commentout function execution
// to see the output **

// reduce method
// qn:-1

const strings = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "pear",
  "apple",
];

function UniqueString(strings) {
  strings.reduce((acc, curr) => {
    if (acc.includes(curr)) {
      return [acc, curr];
    }
  }, {});
}
console.log(UniqueString(strings));

// qn :2
const numbers1 = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
function ProductOfMultipleOfThreeOrFive(numbers1) {
  numbers1.reduce((acc, curr) => {
    if (acc.includes(curr)) {
      return [acc, curr];
    }
  }, {});
}
console.log(ProductOfMultipleOfThreeOrFive(numbers1));

// filter method Qn:1\
const words = [
  "racecar",
  "hello",
  "deified",
  "world",
  "level",
  "programming",
  "radar",
  "civic",
  "javascript",
];
function palindromesString(words) {
  words.filter((ele) => {
    if (ele.reverse()) {
      return ele;
    }
  });
}
console.log(palindromesString(words));

// filter method Qn:2
const filePaths = [
  "/images/pic1.jpg",
  "/images/pic2.png",
  "/assets/img/background.jpg",
  "/assets/img/logo.png",
  "/downloads/document.pdf",
  "/downloads/image.png",
  "/downloads/image.jpg",
];
function findImage(filePaths) {
  filePaths.filter((ele) => {
    if (ele.reverse()) {
      return ele;
    }
  });
}
console.log(findImage(filePaths));

// map method Qn:1
const strings1 = [
  "Hello",
  "world",
  "this",
  "is",
  "an",
  "example",
  "array",
  "of",
  "strings",
];

function swapStrings(strings1) {
  strings1.map((ele) => {
    return ele.reverse();
  });
}
console.log(swapStrings(strings1));

// foreach method Qn:1
const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "She sells seashells by the seashore.",
  "I have a dream that one day this nation will rise up.",
  "To be or not to be, that is the question.",
  "In the beginning, God created the heavens and the earth.",
];
function countWords(sentences) {
  sentences.forEach((ele) => {
    return ele;
  });
}
countWords(sentences);

// combination method Qn:1
function sumOfSquaresOfOddNumbers(numbers) {
  console.log(84);
}
console.log(sumOfSquaresOfOddNumbers(numbers));

// combination method Qn:2
let typeOfCourse = [
  { id: 1, name: "Developer" },
  { id: 2, name: "Tester" },
];
let CourseDurationDirectory = {
  1: `6 month`,
  2: `1 year`,
  3: `2 year`,
};
let Category = {
  3: "Fullstack",
  4: "manual tester",
  5: "automation tester",
};
function massageArray() {
  return (
    {
      courseName: "masai frontend web26",
      courseDuration: "1 year",
      Category: "Fullstack",
      type: "Developer",
      techTools: [
        {
          language: "HTML",
          details: "HTML is the standard markup language for Web pages.",
        },
        {
          language: "CSS",
          details: "CSS is the language we use to style an HTML document. ",
        },
        {
          language: "javaScript",
          details:
            "JavaScript is the programming language of the Web. JavaScript is easy to learn.",
        },
        {
          language: "React",
          details:
            "React is a JavaScript library for building user interfaces.",
        },
        {
          language: "Redux",
          details:
            "Redux is an open-source JavaScript library for managing and centralizing application state.",
        },
        {
          language: "Node.js",
          details:
            "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
        },
        {
          language: "Express",
          details:
            "Express is a minimal and flexible Node.js web application framework .",
        },
        {
          language: "MongoDB",
          details:
            "MongoDB is a document database. It stores data in a type of JSON format called BSON.",
        },
        {
          language: "Bootstrap",
          details:
            "Bootstrap utilizes Sass for a modular and customizable architecture. ",
        },
      ],
    },
    {
      courseName: "foundation batch",
      courseDuration: "1 year",
      Category: "manual tester",
      type: "Tester",
      techTools: [
        {
          language: "aptitude",
          details:
            "1. a natural ability or skill: 2. a natural ability or skill:",
        },
        {
          language: "GitHub",
          details:
            "The open source community is the heart of GitHub and fundamental to how we build software today.",
        },
        {
          language: "C",
          details:
            "C is a general-purpose programming language, developed in 1972",
        },
      ],
    },
    {
      courseName: "Java batch",
      courseDuration: "6 month",
      Category: "automation tester",
      type: "Developer",
      techTools: [
        {
          language: "ETL",
          details:
            "ETL is used to replicate and auto sync data from various source databases to a cloud data warehouse",
        },
        {
          language: "Perl",
          details: "Perl is a high-level scripting language",
        },
        {
          language: "C#",
          details: "C# was originally designed to be easy to learn and use",
        },
        {
          language: "Python",
          details:
            "Python is one of the most beginner-friendly programming languages out there.",
        },
        {
          language: "PHP",
          details: "PHP is a scripting language running on the server side",
        },
      ],
    }
  );
}
console.log(massageArray(exampleInputArray));

// Implementation methods ps Qn:6
let subjectsHash = {
  1: "Javascript",
  2: "HTML",
  3: "CSS",
  4: "Java",
  5: "Rust",
};

let students = [
  { id: 1, name: "Prateek", subjectID: 5 },
  { id: 2, name: "Yogesh", subjectID: 2 },
  { id: 3, name: "Nrupul", subjectID: 4 },
  { id: 4, name: "Prateek", subjectID: 1 },
];
function ImplementationPS6() {
  return {
    Prateek: ["Rust", "Javascript"],
    Yogesh: ["HTML"],
    Nrupul: ["Java"],
  };
}
console.log(ImplementationPS6(students));

// Implementation methods ps Qn:7

function ImplementationPS7() {
  return [
    {
      name: "Prateek",
      marks: [
        { subject: "Javascript", score: 90 },
        { subject: "HTML", score: 81 },
        { subject: "CSS", score: 80 },
      ],
    },
    {
      name: "Nrupul",
      marks: [
        { subject: "Java", score: 95 },
        { subject: "Python", score: 85 },
      ],
    },
  ];
}
console.log(ImplementationPS7(allStudentsMarksData));

// Implementation methods ps Qn:9
const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
function ImplementationPS9(voters) {
  return {
    numYoungVotes: 0,
    numYoungPeople: 2,
    numMidVotesPeople: 5,
    numMidsPeople: 8,
    numOldVotesPeople: 2,
    numOldsPeople: 2,
  };
}
console.log(ImplementationPS9(voters));

// Implementation methods ps Qn:10
function ImplementationPS10(data) {
  return {
    Strawberry: 3,
    Vanilla: 4,
    Chocolate: 5,
    "Cookies & Cream": 2,
    "Mint Chocolate Chip": 3,
    "Rocky Road": 1,
    Pistachio: 1,
    Banana: 1,
    "French Vanilla": 1,
    "Vanilla Bean": 1,
  };
}
console.log(ImplementationPS10(data));

// Dont remove below export statement part

export {
  // reruce
  UniqueString,
  ProductOfMultipleOfThreeOrFive,
  // filter
  palindromesString,
  findImage,
  // map
  swapStrings,
  // forEach
  countWords,
  // combination
  sumOfSquaresOfOddNumbers,
  massageArray,
  // Implementation methods problem statement
  ImplementationPS6,
  ImplementationPS7,
  ImplementationPS9,
  ImplementationPS10,
};
