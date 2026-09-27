import React, { useReducer } from 'react';

// 1. Dữ liệu câu hỏi và state ban đầu theo đúng tài liệu[cite: 16]
const initialState = {
  questions: [
    {
      id: 1,
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      answer: 'Canberra',
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
    {
      id: 3,
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      answer: 'Pacific Ocean',
    }
  ],
  currentQuestion: 0,
  selectedOption: '',
  score: 0,
  showScore: false,
};

// 2. Reducer function xử lý chuyển câu, tính điểm, restart[cite: 16]
function quizReducer(state, action) {
  switch (action.type) {
    case 'SELECT_OPTION':
      return {
        ...state,
        selectedOption: action.payload,
      };

    case 'NEXT_QUESTION': {
      const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
      const nextScore = isCorrect ? state.score + 1 : state.score;
      const nextQuestion = state.currentQuestion + 1;

      if (nextQuestion < state.questions.length) {
        return {
          ...state,
          currentQuestion: nextQuestion,
          selectedOption: '',
          score: nextScore,
        };
      } else {
        return {
          ...state,
          score: nextScore,
          showScore: true,
        };
      }
    }

    case 'RESTART_QUIZ':
      return {
        ...initialState,
      };

    default:
      return state;
  }
}

const QuestionBank = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const currentQ = state.questions[state.currentQuestion];

  return (
    <div className="card shadow-sm p-4 text-center bg-dark text-white border-0 h-100">
      <h5 className="text-warning mb-3">Exercise 2: Question Bank (useReducer)</h5>

      <div className="my-auto py-2">
        {state.showScore ? (
          // Màn hình kết thúc hiển thị tổng điểm[cite: 16]
          <div>
            <h1 className="display-4 fw-bold mb-4">
              Your Score: {state.score}/{state.questions.length}
            </h1>
            <button
              className="btn btn-light px-4 py-2 fs-5 fw-bold border border-2 border-dark"
              style={{ boxShadow: '2px 2px 0px #000' }}
              onClick={() => dispatch({ type: 'RESTART_QUIZ' })}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          // Màn hình hiển thị câu hỏi và đáp án[cite: 16]
          <div>
            <h2 className="fw-semibold mb-2">Question {state.currentQuestion + 1}</h2>
            <h4 className="fw-bold mb-4">{currentQ.question}</h4>

            {/* Danh sách nút chọn đáp án bám sát giao diện mẫu[cite: 16] */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
              {currentQ.options.map((option, index) => {
                const isSelected = state.selectedOption === option;
                return (
                  <button
                    key={index}
                    onClick={() => dispatch({ type: 'SELECT_OPTION', payload: option })}
                    className={`btn px-3 py-2 fs-5 border border-2 border-dark ${
                      isSelected ? 'btn-warning fw-bold' : 'btn-light'
                    }`}
                    style={{ boxShadow: '2px 2px 0px #000' }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Nút Next chuyển câu[cite: 16] */}
            <div>
              <button
                className="btn btn-secondary px-4 py-2 fs-5 border border-2 border-dark"
                style={{ boxShadow: '2px 2px 0px #000' }}
                disabled={!state.selectedOption}
                onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionBank;