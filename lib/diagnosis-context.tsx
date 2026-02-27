"use client";

import React, { createContext, useContext, useReducer, useCallback } from "react";
import { QUESTIONS } from "./diagnosis-data";

export type Phase = "home" | "diagnosis" | "result";

export interface DiagnosisState {
  phase: Phase;
  currentQuestionIndex: number;
  answers: Record<number, number>;
}

type Action =
  | { type: "START" }
  | { type: "ANSWER"; questionId: number; value: number }
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "RESET" };

const initialState: DiagnosisState = {
  phase: "home",
  currentQuestionIndex: 0,
  answers: {},
};

function reducer(state: DiagnosisState, action: Action): DiagnosisState {
  switch (action.type) {
    case "START":
      return { ...initialState, phase: "diagnosis" };
    case "ANSWER":
      return { ...state, answers: { ...state.answers, [action.questionId]: action.value } };
    case "NEXT": {
      const nextIndex = state.currentQuestionIndex + 1;
      if (nextIndex >= QUESTIONS.length) {
        return { ...state, phase: "result" };
      }
      return { ...state, currentQuestionIndex: nextIndex };
    }
    case "PREV":
      return { ...state, currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1) };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

interface DiagnosisContextValue {
  state: DiagnosisState;
  startDiagnosis: () => void;
  answerQuestion: (questionId: number, value: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  reset: () => void;
}

const DiagnosisContext = createContext<DiagnosisContextValue | null>(null);

export function DiagnosisProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const startDiagnosis = useCallback(() => dispatch({ type: "START" }), []);
  const answerQuestion = useCallback((questionId: number, value: number) =>
    dispatch({ type: "ANSWER", questionId, value }), []);
  const nextQuestion = useCallback(() => dispatch({ type: "NEXT" }), []);
  const prevQuestion = useCallback(() => dispatch({ type: "PREV" }), []);
  const reset = useCallback(() => dispatch({ type: "RESET" }), []);

  return (
    <DiagnosisContext.Provider value={{ state, startDiagnosis, answerQuestion, nextQuestion, prevQuestion, reset }}>
      {children}
    </DiagnosisContext.Provider>
  );
}

export function useDiagnosis() {
  const ctx = useContext(DiagnosisContext);
  if (!ctx) throw new Error("useDiagnosis must be used within DiagnosisProvider");
  return ctx;
}
