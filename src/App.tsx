import "./App.css";
import { useEffect, useState } from "react";

import { Button, Form, Logo } from "./Components";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [questions, setQuestions] = useState<QuestionType[]>([
    {
      question: "",
      answer: "",
    },
  ]);
  const [u, setU] = useState(0);

  useEffect(() => {}, [u]);

  return (
    <div className="container">
      <div className="navbar">
        <Logo />
        <div
          className="editable"
          contentEditable
          role="textbox"
          aria-multiline="false"
          aria-label="questionnaire editable"
        >
          New Questionnaire
        </div>
        <div className="auth-container">
          {isLoggedIn && <p className="auth-text">tom@fueled.com</p>}
          <Button
            aria-label="authentication button"
            variant="glass"
            onClick={() => setIsLoggedIn((prev) => !prev)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
        </div>
      </div>

      <div className="body-container">
        <div className="box-container">
          <div className="questions-container">
            {questions.map((question, index) => (
              <Form
                key={index}
                questionCount={questions.length}
                questionNumber={index + 1}
                onChange={(question) => {
                  setQuestions((prev) => {
                    prev[index] = question;
                    return prev;
                  });
                  setU((prev) => prev + 1);
                }}
                onDelete={() => {
                  const tmp = questions;
                  tmp.splice(index, 1);
                  setQuestions(tmp);
                  setU((prev) => prev + 1);
                }}
                onDowngrade={() => {
                  if (index === questions.length - 1) {
                    alert("This question is already the last question.");
                  } else {
                    const tmp = questions;
                    const lower = tmp[index + 1];
                    tmp[index + 1] = tmp[index];
                    tmp[index] = lower;
                    setQuestions(tmp);
                    setU((prev) => prev + 1);
                  }
                }}
                onUpgrade={() => {
                  if (index === 0) {
                    alert("This question is already the first question.");
                  } else {
                    const tmp = questions;
                    const upper = tmp[index - 1];
                    tmp[index - 1] = tmp[index];
                    tmp[index] = upper;
                    setQuestions(tmp);
                    setU((prev) => prev + 1);
                  }
                }}
                {...{ question }}
              />
            ))}
          </div>

          <Button
            aria-label="add question"
            fullWidth
            variant="ghost"
            haveIcon
            onClick={() => {
              const tmp = questions;
              tmp.push({ question: "", answer: "" });
              setQuestions(tmp);
              setU((prev) => prev + 1);
            }}
          >
            Add Question
          </Button>
          <Button
            aria-label="save and share"
            fullWidth
            style={{ marginTop: "16px" }}
            onClick={() => console.log(JSON.stringify(questions))}
          >
            Save & Share
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
