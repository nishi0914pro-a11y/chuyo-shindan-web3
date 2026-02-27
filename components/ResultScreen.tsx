"use client";

import { useState } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useDiagnosis } from "@/lib/diagnosis-context";
import {
  CATEGORIES,
  calculateCategoryScore,
  calculateOverallScore,
  getWeakestCategory,
  getCategoryFeedback,
  getScoreLevel,
} from "@/lib/diagnosis-data";

const DEEP_BLUE = "#003366";
const GOLD = "#D4AF37";

export default function ResultScreen() {
  const { state, reset } = useDiagnosis();
  const { answers } = state;
  const [openAdvice, setOpenAdvice] = useState<string | null>(null);

  const overallScore = calculateOverallScore(answers);
  const scoreLevel = getScoreLevel(overallScore);
  const weakestCategory = getWeakestCategory(answers);
  const weakestScore = calculateCategoryScore(weakestCategory.id, answers);
  const weakestFeedback = getCategoryFeedback(weakestCategory, weakestScore);

  // カテゴリスコアを計算（レーダーチャート用：外側=歪みが強い）
  const categoryScores = CATEGORIES.map((cat) => {
    const score = calculateCategoryScore(cat.id, answers);
    return {
      category: cat,
      score,
      distortion: 100 - score, // 歪み度（外側ほど大きい）
    };
  });

  // レーダーチャートデータ（外側=歪みが強い表示）
  const radarData = categoryScores.map(({ category, distortion }) => ({
    subject: category.name,
    value: distortion,
    fullMark: 100,
  }));

  // スコア順（歪みが強い順）にソート
  const sortedCategories = [...categoryScores].sort((a, b) => a.score - b.score);

  // SNSシェア
  const handleShare = () => {
    const text = `私を縛っていたのは『${weakestCategory.wireLabel}』でした！現在の中庸度は${overallScore}点。 #中庸度診断 #内向型研究所`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4">
      <div className="w-full max-w-md animate-fade-in">

        {/* ヘッダー */}
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-gray-500 mb-2">診断完了</p>
          <h1 className="text-2xl font-extrabold mb-1" style={{ color: DEEP_BLUE }}>
            あなたの中庸度
          </h1>
        </div>

        {/* 総合スコア */}
        <div
          className="bg-white rounded-3xl p-8 shadow-sm border mb-6 text-center"
          style={{ borderColor: GOLD + "40" }}
        >
          <div
            className="text-8xl font-extrabold mb-2 leading-none"
            style={{ color: scoreLevel.color }}
          >
            {overallScore}
          </div>
          <div className="text-sm text-gray-400 mb-3">/ 100点</div>
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-3"
            style={{ backgroundColor: scoreLevel.color + "20", color: scoreLevel.color }}
          >
            {scoreLevel.label}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{scoreLevel.description}</p>
        </div>

        {/* 言語化フィードバック */}
        <div
          className="rounded-2xl p-5 mb-6 border"
          style={{
            backgroundColor: weakestCategory.color + "10",
            borderColor: weakestCategory.color + "40",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-xs font-bold px-2 py-1 rounded-full"
              style={{ backgroundColor: weakestCategory.color + "20", color: weakestCategory.color }}
            >
              最も影響が強い認知の歪み
            </span>
          </div>
          <p className="text-sm font-bold mb-2" style={{ color: weakestCategory.color }}>
            {weakestCategory.wireLabel}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">{weakestFeedback}</p>
        </div>

        {/* レーダーチャート（外側=歪みが強い） */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
          <h2 className="text-sm font-bold mb-1" style={{ color: DEEP_BLUE }}>
            認知の歪みマップ
          </h2>
          <p className="text-xs text-gray-400 mb-4">外側ほど歪みが強い</p>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarData} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
              <PolarGrid stroke="rgba(0,51,102,0.12)" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fontSize: 10, fill: "#374151", fontWeight: 500 }}
              />
              <Tooltip
                formatter={(value: number) => [`歪み度: ${value}点`, ""]}
                contentStyle={{ fontSize: 12, borderRadius: 8 }}
              />
              <Radar
                name="歪み度"
                dataKey="value"
                stroke={GOLD}
                fill={GOLD}
                fillOpacity={0.25}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* カテゴリ別スコアバー */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
          <h2 className="text-sm font-bold mb-4" style={{ color: DEEP_BLUE }}>
            カテゴリ別スコア（中庸度）
          </h2>
          <div className="flex flex-col gap-3">
            {sortedCategories.map(({ category, score }) => (
              <div key={category.id}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-gray-600">{category.name}</span>
                  <span className="text-xs font-bold" style={{ color: category.color }}>
                    {score}点
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${score}%`, backgroundColor: category.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 改善アドバイス */}
        <div className="mb-6">
          <h2 className="text-sm font-bold mb-4" style={{ color: DEEP_BLUE }}>
            改善アドバイス
          </h2>
          <div className="flex flex-col gap-3">
            {sortedCategories.map(({ category, score }, index) => {
              const isOpen = openAdvice === category.id;
              const feedback = getCategoryFeedback(category, score);
              return (
                <div
                  key={category.id}
                  className="bg-white rounded-2xl border overflow-hidden shadow-sm"
                  style={{ borderColor: category.color + "40" }}
                >
                  <button
                    onClick={() => setOpenAdvice(isOpen ? null : category.id)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                        style={{ backgroundColor: category.color }}
                      >
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-xs font-bold" style={{ color: category.color }}>
                          {category.wireLabel}
                        </p>
                        <p className="text-xs text-gray-500">中庸度: {score}点</p>
                      </div>
                    </div>
                    <span
                      className="text-gray-400 transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 border-t" style={{ borderColor: category.color + "20" }}>
                      <p className="text-xs text-gray-600 leading-relaxed mt-3 mb-4">{feedback}</p>
                      <p className="text-xs font-semibold mb-3" style={{ color: DEEP_BLUE }}>
                        {category.adviceIntro}
                      </p>
                      <div className="flex flex-col gap-3">
                        {category.adviceTips.map((tip, i) => (
                          <div
                            key={i}
                            className="rounded-xl p-3"
                            style={{ backgroundColor: category.color + "08" }}
                          >
                            <p className="text-xs font-bold mb-1" style={{ color: category.color }}>
                              💡 {tip.title}
                            </p>
                            <p className="text-xs text-gray-600 leading-relaxed">{tip.body}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* クロージングメッセージ */}
        <div
          className="rounded-2xl p-6 mb-6 text-center"
          style={{ backgroundColor: DEEP_BLUE, border: `1px solid ${GOLD}40` }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "#e8f0fe" }}>
            これはあなたの能力の問題ではなく、脳が守りに入っているだけの「癖」です。
            <br /><br />
            <span style={{ color: GOLD }} className="font-semibold">
              この認知の歪みは、正しい知識とトレーニングで必ず消せます。
            </span>
            <br /><br />
            一緒に本来のあなたを解放しましょう。
          </p>
        </div>

        {/* SNSシェアボタン */}
        <button
          onClick={handleShare}
          className="w-full py-4 rounded-xl font-bold text-sm mb-4 transition-all duration-150 hover:opacity-90 active:scale-95 flex items-center justify-center gap-2"
          style={{
            backgroundColor: "#1DA1F2",
            color: "white",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          SNSで結果をシェア
        </button>

        {/* もう一度ボタン */}
        <button
          onClick={reset}
          className="w-full py-4 rounded-xl font-bold text-sm border-2 transition-all duration-150 hover:bg-gray-50 active:scale-95"
          style={{ borderColor: DEEP_BLUE + "40", color: DEEP_BLUE }}
        >
          もう一度診断する
        </button>
      </div>
    </div>
  );
}
