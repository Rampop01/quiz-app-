export type Question = {
    question: string;
    options: string[];
    answer: string;
  };
  
  const questions: Question[] = [
    { question: "What is TypeScript?", options: ["A framework", "A library", "A superset of JavaScript", "A database"], answer: "A superset of JavaScript" },
    { question: "Which React hook is used for state management?", options: ["useState", "useEffect", "useRef", "useContext"], answer: "useState" },
    { question: "What does JSX stand for?", options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Xtreme"], answer: "JavaScript XML" },
    { question: "Which lifecycle method runs after a component is mounted?", options: ["componentDidMount", "componentWillUnmount", "shouldComponentUpdate", "getDerivedStateFromProps"], answer: "componentDidMount" },
    { question: "What will `typeof null` return?", options: ["null", "undefined", "object", "string"], answer: "object" },
    { question: "Which operator checks both value and type?", options: ["==", "===", "!=", "!=="], answer: "===" },
    { question: "What does `useEffect` do?", options: ["Handles side effects", "Manages state", "Creates components", "Handles event listeners"], answer: "Handles side effects" },
    { question: "What is the output of `console.log(2 + '2')`?", options: ["4", "22", "TypeError", "NaN"], answer: "22" },
    { question: "Which HTTP method updates a resource?", options: ["GET", "POST", "PUT", "DELETE"], answer: "PUT" },
    { question: "What is the purpose of 'key' in React lists?", options: ["Unique identity", "Performance", "Sorting", "Styling"], answer: "Unique identity" },
  ];
  
  export default questions;
  