import "../styles/Form.css";
import { ArrowDown, ArrowUp, Trash } from "./Icons";

interface FormProps {
  question: QuestionType;
  questionNumber: number;
  questionCount: number;
  onChange: (question: QuestionType) => void;
  onDelete: () => void;
  onUpgrade: () => void;
  onDowngrade: () => void;
}

const Form = ({
  question,
  questionCount,
  questionNumber,
  onChange,
  onDelete,
  onUpgrade,
  onDowngrade,
}: FormProps) => {
  return (
    <div className="form-container">
      <p className="label">Question</p>

      <input
        id="question box"
        aria-label="Question"
        className="question-box"
        placeholder="What do you want to ask?"
        defaultValue={question.question}
        value={question.question}
        onChange={(e) =>
          onChange({ question: e.target.value, answer: question.answer })
        }
      />

      <div className="divider" />

      <p className="label">Answer</p>

      <div className="select-box">
        <select id="question types" aria-label="Question type">
          <option value="shortAnswer" tabIndex={0}>
            Short Answer
          </option>
        </select>
      </div>

      <input
        className="question-box disabled"
        aria-label="Answer"
        placeholder="Short answer text"
        defaultValue={question.answer}
        value={question.answer}
        onChange={(e) =>
          onChange({ question: question.question, answer: e.target.value })
        }
      />

      <div className="divider" />

      <div className="footer">
        <span className="info">
          {questionNumber} of {questionCount}
        </span>

        <div className="icon-container" >
          <ArrowUp onClick={onUpgrade} />
          <ArrowDown onClick={onDowngrade} />
          <Trash onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default Form;
