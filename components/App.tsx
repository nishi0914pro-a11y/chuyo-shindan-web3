"use client";

import { DiagnosisProvider, useDiagnosis } from "@/lib/diagnosis-context";
import HomeScreen from "./HomeScreen";
import DiagnosisScreen from "./DiagnosisScreen";
import ResultScreen from "./ResultScreen";

function AppContent() {
  const { state } = useDiagnosis();

  if (state.phase === "diagnosis") return <DiagnosisScreen />;
  if (state.phase === "result") return <ResultScreen />;
  return <HomeScreen />;
}

export default function App() {
  return (
    <DiagnosisProvider>
      <AppContent />
    </DiagnosisProvider>
  );
}
