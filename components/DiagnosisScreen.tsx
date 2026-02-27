"use client";

import { useDiagnosis } from "@/lib/diagnosis-context";
import { QUESTIONS, CATEGORIES, ANSWER_LABELS } from "@/lib/diagnosis-data";

const DEEP_BLUE = "#003366";
const GOLD = "#D4AF37";

export default function DiagnosisScreen() {
  const { state, answerQuestion, nextQuestion, prevQuestion } = useDiagnosis();
  const { currentQuestionIndex, answers } = state;

  const question = QUESTIONS[currentQuestionIndex];
  const category = CATEGORIES.find((c) => c.id === question.categoryId);
  const currentAnswer = answers[question.id] ?? null;
  const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;
  const canGoNext = currentAnswer !== null;

  const handleAnswer = (value: number) => {
    answerQuestion(question.id, value);
  };

  const handleNext = () => {
    if (canGoNext) nextQuestion();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-6 px-4">
      <div className="w-full max-w-md">

        {/* プログレスバー */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-gray-500">
              {currentQuestionIndex + 1} / {QUESTIONS.length}
            </span>
            <span className="text-xs font-semibold" style={{ color: DEEP_BLUE }}>
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${DEEP_BLUE}, ${GOLD})`,
              }}
            />
          </div>
        </div>

        {/* カテゴリバッジ */}
        {category && (
          <div className="mb-4">
            <span
              className="text-xs font-semibold px-3 py-1.5 rounded-full border"
              style={{
                backgroundColor: category.color + "18",
                borderColor: category.color + "50",
                color: category.color,
              }}
            >
              {category.wireLabel}
            </span>
          </div>
        )}

        {/* 質問カード */}
        <div
          key={question.id}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 animate-scale-in"
        >
          <p className="text-base font-semibold leading-relaxed" style={{ color: DEEP_BLUE }}>
            Q{currentQuestionIndex + 1}. {question.text}
          </p>
        </div>

        {/* 選択肢 */}
        <div className="flex flex-col gap-3 mb-8">
          {ANSWER_LABELS.map((label, index) => {
            const isSelected = currentAnswer === index;
            const colors = [
              { bg: "#EF5B5B18", border: "#EF5B5B80", text: "#EF5B5B" },
              { bg: "#D4874A18", border: "#D4874A80", text: "#D4874A" },
              { bg: "#C9A22718", border: "#C9A22780", text: "#C9A227" },
              { bg: "#3AB8A018", border: "#3AB8A080", text: "#3AB8A0" },
              { bg: "#3ABF6B18", border: "#3ABF6B80", text: "#3ABF6B" },
            ];
            const c = colors[index];

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full py-4 px-5 rounded-xl border-2 text-sm font-semibold text-left transition-all duration-150 active:scale-98"
                style={{
                  backgroundColor: isSelected ? c.bg : "white",
                  borderColor: isSelected ? c.border : "#e5e7eb",
                  color: isSelected ? c.text : "#374151",
                  transform: isSelected ? "scale(1.01)" : "scale(1)",
                  boxShadow: isSelected ? `0 2px 12px ${c.border}60` : "none",
                }}
              >
                <span className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                    style={{
                      borderColor: isSelected ? c.text : "#d1d5db",
                      backgroundColor: isSelected ? c.text : "transparent",
                    }}
                  >
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </span>
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        {/* ナビゲーションボタン */}
        <div className="flex gap-3">
          {currentQuestionIndex > 0 && (
            <button
              onClick={prevQuestion}
              className="flex-1 py-4 rounded-xl border-2 text-sm font-semibold transition-all duration-150 hover:bg-gray-50"
              style={{ borderColor: DEEP_BLUE + "40", color: DEEP_BLUE }}
            >
              ← 前の質問
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className="flex-1 py-4 rounded-xl text-sm font-bold transition-all duration-150"
            style={{
              backgroundColor: canGoNext ? DEEP_BLUE : "#e5e7eb",
              color: canGoNext ? GOLD : "#9ca3af",
              border: canGoNext ? `1.5px solid ${GOLD}` : "none",
              cursor: canGoNext ? "pointer" : "not-allowed",
            }}
          >
            {currentQuestionIndex === QUESTIONS.length - 1 ? "結果を見る →" : "次の質問 →"}
          </button>
        </div>
      </div>
    </div>
  );
}
