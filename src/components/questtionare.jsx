import React, { useState } from "react";
//import flat from "./images/Rectangle 10.png";

const questionsData = [
  {
    question: "Какая недвижимость вам нужна?",
    options: [
      { text: "Квартиры", image: "./images/Rectangle10.png" },
      { text: "Пентхаусы", image: "./images/Rectangle11.png" },
      { text: "Дуплексы", image: "./images/Rectangle12.png" },
      { text: "Виллы", image: "./images/Rectangle13.png" },
    ],
  },
  {
    question: "Какой стиль интерьера предпочтителен?",
    options: [
      { text: "Современный", image: "./images/Rectangle10.png" },
      { text: "Классический", image: "./images/Rectangle11.png" },
      { text: "Минимализм", image: "./images/Rectangle12.png" },
      { text: "Эклектика", image: "./images/Rectangle13.png" },
    ],
  },
  {
    question: "Какие цвета вам нравятся?",
    options: [
      { text: "Синий", image: "./images/Rectangle10.png" },
      { text: "Желтый", image: "./images/Rectangle11.png" },
      { text: "Крастный", image: "./images/Rectangle12.png" },
      { text: "Зеленый", image: "./images/Rectangle13.png" },
    ],
  },
  // ... ещё вопросы аналогично
];

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [checkedOptions, setCheckedOptions] = useState([]);

  const handleNextQuestion = () => {
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setCheckedOptions([]); // Сброс состояния чекбоксов
    } else {
      setCurrentQuestion(0); // Сброс к первому вопросу
      setCheckedOptions([]);
    }
    setProgress(((currentQuestion + 1) / questionsData.length) * 100);
  };

  const handleCheckboxChange = (optionIndex) => {
    if (checkedOptions.includes(optionIndex)) {
      setCheckedOptions(
        checkedOptions.filter((index) => index !== optionIndex)
      );
    } else {
      setCheckedOptions([...checkedOptions, optionIndex]);
    }
  };

  return (
    <div className="quests">
      <p className="quest-title">{questionsData[currentQuestion].question}</p>
      <ul className="list-quest">
        {questionsData[currentQuestion].options.map((option, index) => (
          <li key={index}>
            <img src={option.image} alt={`Изображение для ${option.text}`} />
            <label
              className={`quest-title label ${
                checkedOptions.includes(index) ? "selected" : ""
              }`}
            >
              <span>{option.text}</span>
              <input
                type="checkbox"
                name={`option-${index}`}
                checked={checkedOptions.includes(index)}
                onChange={() => handleCheckboxChange(index)}
              />
            </label>
          </li>
        ))}
      </ul>
      <p className="question-indicator">
        Вопрос {currentQuestion + 1}/{questionsData.length}
      </p>
      <div
        style={{
          width: "95%",
          height: "20px",
          background: "grey",
          marginBottom: "10px",
        }}
      >
        <div
          style={{ width: `${progress}%`, height: "100%", background: "white" }}
        />
      </div>
      <div>
        <button className="aptChoose-btn btn-width-630px">
          Ответить на вопрос
        </button>
        <button
          className="header__btn wTxt btn-width-630px"
          onClick={handleNextQuestion}
        >
          Перейти к следующему <img src="/images/Vector 1.png" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;
