"use client";

import { useDiagnosis } from "@/lib/diagnosis-context";
import { CATEGORIES } from "@/lib/diagnosis-data";

const DEEP_BLUE = "#003366";
const GOLD = "#D4AF37";

export default function HomeScreen() {
  const { startDiagnosis } = useDiagnosis();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 px-4">
      <div className="w-full max-w-md animate-fade-in-up">

        {/* ヒーローセクション */}
        <div className="flex flex-col items-center gap-5 mb-8">
          {/* ロゴ */}
          <div
            className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl"
            style={{ backgroundColor: DEEP_BLUE }}
          >
            <span className="text-5xl">☯</span>
          </div>

          {/* タイトル */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight" style={{ color: DEEP_BLUE }}>
              中庸診断
            </h1>
          </div>

          {/* キャッチコピー */}
          <div
            className="px-5 py-3 rounded-2xl border text-center"
            style={{ borderColor: GOLD + "80", backgroundColor: GOLD + "15" }}
          >
            <p className="text-sm font-semibold" style={{ color: GOLD }}>
              あなたを縛る認知の歪みを取り払おう！
            </p>
          </div>
        </div>

        {/* 説明カード */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h2 className="text-base font-bold mb-3" style={{ color: DEEP_BLUE }}>
            この診断について
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            「認知の歪み」とは、脳が守りに入ったときに生じる思考の癖のこと。
            <br /><br />
            30の質問に答え認知の歪みを可視化します。
            <br /><br />
            これは能力の問題ではなく、正しい知識とトレーニングで必ず変えられる「癖」です。
          </p>
        </div>

        {/* 歪みタイプ一覧 */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold mb-3" style={{ color: DEEP_BLUE }}>
            10種類の歪みタイプ
          </h2>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <span
                key={cat.id}
                className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                style={{
                  backgroundColor: cat.color + "18",
                  borderColor: cat.color + "50",
                  color: cat.color,
                }}
              >
                {cat.wireLabel}
              </span>
            ))}
          </div>
        </div>

        {/* 診断情報 */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { value: "30", label: "質問数" },
            { value: "4〜6", label: "分程度" },
            { value: "10", label: "歪みタイプ" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-xl py-4 flex flex-col items-center gap-1 shadow-sm border"
              style={{ borderColor: GOLD + "40" }}
            >
              <span className="text-xl font-extrabold" style={{ color: GOLD }}>{item.value}</span>
              <span className="text-xs text-gray-500">{item.label}</span>
            </div>
          ))}
        </div>

        {/* スタートボタン */}
        <button
          onClick={startDiagnosis}
          className="w-full py-5 rounded-2xl font-extrabold text-lg tracking-wide transition-all duration-150 active:scale-95 hover:opacity-90 shadow-xl"
          style={{
            backgroundColor: DEEP_BLUE,
            color: GOLD,
            border: `1.5px solid ${GOLD}`,
          }}
        >
          中庸診断を始める
        </button>

        <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
          ※ この診断は医学的な診断ではありません。<br />
          自己理解のための参考情報としてご活用ください。
        </p>
      </div>
    </div>
  );
}
