export interface Question {
  id: number;
  text: string;
  categoryId: string;
}

export interface AdviceTip {
  title: string;
  body: string;
}

export interface Category {
  id: string;
  name: string;
  wireLabel: string;
  description: string;
  color: string;
  questions: number[];
  feedbackHigh: string;
  feedbackMid: string;
  feedbackLow: string;
  adviceIntro: string;
  adviceTips: AdviceTip[];
}

export const QUESTIONS: Question[] = [
  { id: 1,  text: "結果が出ないと努力が無駄に思える",         categoryId: "all-or-nothing" },
  { id: 3,  text: "曖昧な状況だと白黒つけたくなる",           categoryId: "all-or-nothing" },
  { id: 22, text: "失敗してはいけないと思う",                 categoryId: "all-or-nothing" },
  { id: 2,  text: "すぐに人間関係をリセットしたくなる",       categoryId: "overgeneralization" },
  { id: 4,  text: "一度の失敗で自信をなくしてしまう",         categoryId: "overgeneralization" },
  { id: 5,  text: "嫌われたら次も嫌われると思う",             categoryId: "overgeneralization" },
  { id: 7,  text: "良いことより悪いことが気になる",           categoryId: "negative-filter" },
  { id: 8,  text: "短所を見つけ相手を嫌いになる",             categoryId: "negative-filter" },
  { id: 9,  text: "一つの失敗を何度も思い出す",               categoryId: "negative-filter" },
  { id: 10, text: "成功してもたまたまだと思う",               categoryId: "disqualifying" },
  { id: 11, text: "褒められても素直に喜べない",               categoryId: "disqualifying" },
  { id: 12, text: "良い評価を信じられない",                   categoryId: "disqualifying" },
  { id: 13, text: "周りが自分を悪く評価している気がする",     categoryId: "mind-reading" },
  { id: 14, text: "何かと批判された気がしてしまう",           categoryId: "mind-reading" },
  { id: 15, text: "相手の気持ちを考えすぎて疲れる",           categoryId: "mind-reading" },
  { id: 16, text: "自分の欠点を大きく考えてしまう",           categoryId: "magnification" },
  { id: 17, text: "うまくいっても大したことないと思う",       categoryId: "magnification" },
  { id: 18, text: "人の成功はすごく見える",                   categoryId: "magnification" },
  { id: 19, text: "不安なときは悪いことが起きると考える",     categoryId: "emotional-reasoning" },
  { id: 20, text: "落ち込むと自分はダメだと感じる",           categoryId: "emotional-reasoning" },
  { id: 21, text: "気分が悪いと現実も悪く見える",             categoryId: "emotional-reasoning" },
  { id: 23, text: "絶対、すべき、という言葉をよく使う",       categoryId: "should-statements" },
  { id: 24, text: "常に努力すべきだと思う",                   categoryId: "should-statements" },
  { id: 6,  text: "ミスすると今後も失敗すると感じる",         categoryId: "should-statements" },
  { id: 25, text: "失敗すると「自分はだめな人間だ」と思う",   categoryId: "labeling" },
  { id: 26, text: "他人を「〇〇な人」と大雑把に決めつける",   categoryId: "labeling" },
  { id: 27, text: "一度の行動で人を判断してしまう",           categoryId: "labeling" },
  { id: 28, text: "他人の問題も自分が直さなければと感じる",   categoryId: "personalization" },
  { id: 29, text: "他人の機嫌が悪いと自分のせいだと感じる",   categoryId: "personalization" },
  { id: 30, text: "自分だけが特別に運が悪いと感じる",         categoryId: "personalization" },
];

export const CATEGORIES: Category[] = [
  {
    id: "all-or-nothing",
    name: "全か無か思考",
    wireLabel: "完璧主義の歪み",
    description: "物事を白か黒かで判断し、グレーゾーンを認めにくい傾向。完璧でなければ失敗と感じやすい。",
    color: "#4A7FD4",
    questions: [1, 3, 22],
    feedbackHigh: "あなたは今『完璧主義の歪み』が強く影響しているようです。「全か無か」の思考が、あなたの可能性の翼を縛っています。グレーゾーンに価値があることを、一緒に発見しましょう。",
    feedbackMid: "『完璧主義の歪み』がやや影響しています。完璧でない自分を認める練習が、認知の偏りを少しずつ整えてくれます。",
    feedbackLow: "『完璧主義の歪み』はほぼ見られません。グレーゾーンを受け入れる柔軟さが育っています。",
    adviceIntro: "「完璧か失敗か」という二択の枠を外し、物事をグラデーションで見る練習が効果的です。",
    adviceTips: [
      { title: "0〜100点のスケールで考える", body: "「失敗した」と感じたとき、0〜100点で採点してみましょう。完全な失敗（0点）は実際にはほとんど存在しません。「今日は60点だった」と認めることで、中間の価値に気づけます。" },
      { title: "「まあまあ」「そこそこ」を意識的に使う", body: "日常会話で「完璧」「最悪」の代わりに「まあまあうまくいった」「少し難しかった」という言葉を使う練習をしましょう。言葉が思考の枠を広げてくれます。" },
      { title: "プロセスに目を向ける", body: "結果だけでなく「どんな努力をしたか」「何を学んだか」に注目する習慣をつけましょう。結果が出なくても、プロセスには必ず意味があります。" },
    ],
  },
  {
    id: "overgeneralization",
    name: "過度の一般化",
    wireLabel: "過度の一般化の歪み",
    description: "一度の出来事から「いつもこうだ」と広く結論づける傾向。一つの失敗が全体の失敗に見える。",
    color: "#7B6DEF",
    questions: [2, 4, 5],
    feedbackHigh: "あなたは今『過度の一般化の歪み』が強く影響しているようです。一度の出来事を「いつもこう」と広げてしまう癖が、あなたの行動範囲を狭めています。",
    feedbackMid: "『過度の一般化の歪み』がやや影響しています。「今回は」と限定する言葉が、思考を整えるカギになります。",
    feedbackLow: "『過度の一般化の歪み』はほぼ見られません。一度の出来事を適切な範囲で捕えられています。",
    adviceIntro: "「いつも」「絶対」「必ず」という言葉に気づいたとき、それが本当に毎回起きているかを検証する習慣が助けになります。",
    adviceTips: [
      { title: "「今回は」と限定する", body: "「また失敗した」と思ったとき、「今回は失敗した」と言い換えてみましょう。一度の出来事を全体に広げず、その出来事だけに留める練習です。" },
      { title: "反証を探す", body: "「いつも嫌われる」と感じたら、「うまくいった人間関係はなかったか？」と反証を探してみましょう。例外を見つけることで、一般化の誤りに気づけます。" },
      { title: "失敗ノートに原因を書く", body: "失敗したとき、「なぜ今回うまくいかなかったか」を具体的に書き出しましょう。「自分がダメだから」ではなく「準備が不足していた」など、修正可能な原因が見えてきます。" },
    ],
  },
  {
    id: "negative-filter",
    name: "マイナス化思考",
    wireLabel: "マイナス化思考の歪み",
    description: "良い出来事を無視し、悪い出来事だけに注目する傾向。ネガティブな側面が拡大して見える。",
    color: "#D4607A",
    questions: [7, 8, 9],
    feedbackHigh: "あなたは今『マイナス化思考の歪み』が強く影響しているようです。良いことが目に入りにくくなっています。意識的に「良かったこと」を探す練習が、認知の偏りを整える第一歩です。",
    feedbackMid: "『マイナス化思考の歪み』がやや影響しています。1日３つの良いことを書く習慣が効果的です。",
    feedbackLow: "『マイナス化思考の歪み』はほぼ見られません。物事をバランスよく見られています。",
    adviceIntro: "悪い出来事に自動的に注目してしまうフィルターを意識的に外し、良い出来事にも同等の注意を向ける練習が効果的です。",
    adviceTips: [
      { title: "1日3つの良いことを書く", body: "毎晩寝る前に「今日うまくいったこと・良かったこと」を3つ書き出しましょう。小さなことでも構いません。続けることで、ポジティブな出来事に気づく力が育ちます。" },
      { title: "相手の長所リストを作る", body: "苦手な人の短所が気になるとき、その人の長所を意識的に3つ探してみましょう。人は短所も長所も持つ複雑な存在だと実感できます。" },
      { title: "「でも」を「そして」に変える", body: "「うまくいったけど、失敗もした」を「うまくいった。そして、失敗もあった」と言い換えてみましょう。良い面を打ち消さずに両方を認める練習になります。" },
    ],
  },
  {
    id: "disqualifying",
    name: "自己否定",
    wireLabel: "自己否定の歪み",
    description: "成功や褒め言葉を素直に受け取れず、「たまたま」「大したことない」と否定する傾向。",
    color: "#D4874A",
    questions: [10, 11, 12],
    feedbackHigh: "あなたは今『自己否定の歪み』が強く影響しているようです。せっかくの成功や称賛が、あなたの心に届いていません。自分の努力を正当に受け取る練習を始めましょう。",
    feedbackMid: "『自己否定の歪み』がやや影響しています。「ありがとう」と一言だけ受け取る練習が効果的です。",
    feedbackLow: "『自己否定の歪み』はほぼ見られません。自分の成功を素直に受け取れています。",
    adviceIntro: "成功や称賛を「たまたま」と片付けず、自分の努力や能力の結果として受け取る練習が自己肯定感を育てます。",
    adviceTips: [
      { title: "「ありがとう」だけで受け取る", body: "褒められたとき「でも…」と打ち消す前に、まず「ありがとうございます」と一言だけ返す練習をしましょう。否定せずに受け取ることを体に覚えさせます。" },
      { title: "成功の理由を3つ挙げる", body: "何かうまくいったとき「なぜ成功したか」を3つ書き出しましょう。「たまたま運が良かった」だけでなく、自分の準備・スキル・判断が貢献していることに気づけます。" },
      { title: "自分への実績ノートをつける", body: "週に一度、「今週できたこと・頑張ったこと」を記録しましょう。積み重なった記録を見返すことで、自分の実力が客観的に確認できます。" },
    ],
  },
  {
    id: "mind-reading",
    name: "心の読み過ぎ",
    wireLabel: "心の読み過ぎの歪み",
    description: "他者が自分を悪く思っていると根拠なく推測する傾向。他人の気持ちを悲観的に解釈しやすい。",
    color: "#3AB8A0",
    questions: [13, 14, 15],
    feedbackHigh: "あなたは今『心の読み過ぎの歪み』が強く影響しているようです。他者の気持ちを悲観的に読みすぎて、不必要なエネルギーを消耗しています。根拠を確認する習慣が改善の鍵です。",
    feedbackMid: "『心の読み過ぎの歪み』がやや影響しています。「根拠はあるか？」と自問する習慣をつけましょう。",
    feedbackLow: "『心の読み過ぎの歪み』はほぼ見られません。他者の気持ちを適切に捕えられています。",
    adviceIntro: "他者の気持ちを決めつける前に「本当にそうか？」と根拠を確認する習慣が、不必要な不安を減らします。",
    adviceTips: [
      { title: "「根拠はあるか？」と自問する", body: "「あの人は私を嫌っているはず」と感じたとき、「その根拠は何か？」と問いかけましょう。実際に言葉や行動で示されたことと、自分の推測を区別する練習です。" },
      { title: "別の解釈を3つ考える", body: "相手が素っ気なかったとき「嫌われた」以外の解釈（疲れていた・別のことを考えていた・体調が悪かった）を3つ考えてみましょう。一つの解釈に縛られなくなります。" },
      { title: "気になるなら直接確認する", body: "どうしても気になるときは、推測し続けるより「最近何か気になることがあった？」と穏やかに確認するのが最も確実です。多くの場合、思い過ごしだとわかります。" },
    ],
  },
  {
    id: "magnification",
    name: "拡大解釈",
    wireLabel: "拡大解釈の歪み",
    description: "自分の欠点や失敗を過大評価し、他者の成功を実際より大きく見る傾向。",
    color: "#C9A227",
    questions: [16, 17, 18],
    feedbackHigh: "あなたは今『拡大解釈の歪み』が強く影響しているようです。自分を小さく、他者を大きく見てしまう歪みが、本来の力を隠してしまっています。",
    feedbackMid: "『拡大解釈の歪み』がやや影響しています。自分と他者を同じ基準で見る練習が効果的です。",
    feedbackLow: "『拡大解釈の歪み』はほぼ見られません。自分と他者をバランスよく評価できています。",
    adviceIntro: "自分の欠点と他者の成功を同じ基準で見られるよう、比較の視点を整えることが助けになります。",
    adviceTips: [
      { title: "欠点と長所を同じ紙に書く", body: "自分の欠点が気になったとき、同じ紙の反対側に長所も書き出しましょう。欠点だけを見ていると実際より大きく見えますが、長所と並べると適切なバランスが見えてきます。" },
      { title: "他者の「見えない努力」を想像する", body: "人の成功がすごく見えるとき、「この結果の裏にどんな失敗や努力があったか」を想像してみましょう。SNSや表面的な成果は、氷山の一角に過ぎません。" },
      { title: "「自分に言うように友人に言えるか？」と問う", body: "自分の欠点を責めるとき、「同じことを友人に言えるか？」と考えてみましょう。友人には優しくできるのに自分には厳しすぎる場合、自己評価の基準が歪んでいるサインです。" },
    ],
  },
  {
    id: "emotional-reasoning",
    name: "感情的決めつけ",
    wireLabel: "感情的決めつけの歪み",
    description: "「こう感じるから、こうに違いない」と感情を事実の根拠にする傾向。気分が現実認識を歪める。",
    color: "#4AB8D4",
    questions: [19, 20, 21],
    feedbackHigh: "あなたは今『感情的決めつけの歪み』が強く影響しているようです。感情が事実を上書きしてしまっています。「感じること」と「実際に起きていること」を分ける練習が改善の鍵です。",
    feedbackMid: "『感情的決めつけの歪み』がやや影響しています。気分が悪いときは判断を保留する習慣が助けになります。",
    feedbackLow: "『感情的決めつけの歪み』はほぼ見られません。感情と事実を適切に区別できています。",
    adviceIntro: "感情は大切な情報ですが、事実そのものではありません。「感じていること」と「実際に起きていること」を区別する練習が有効です。",
    adviceTips: [
      { title: "「感じる」と「である」を分ける", body: "「自分はダメだ」ではなく「今、自分がダメだと感じている」と言い換えましょう。感情は一時的な状態であり、永続的な事実ではないと気づけます。" },
      { title: "気分が悪いときは判断を保留する", body: "落ち込んでいるときや不安なときは、重要な判断を先送りにしましょう。「今の気分が落ち着いたら改めて考える」と決めるだけで、感情による歪みを防げます。" },
      { title: "身体感覚から気分を整える", body: "感情が高ぶったとき、深呼吸・軽い運動・水を飲むなど身体に働きかけましょう。気分が落ち着くと、現実をより客観的に見られるようになります。" },
    ],
  },
  {
    id: "should-statements",
    name: "べき思考",
    wireLabel: "べき思考の歪み",
    description: "「〜すべき」「〜しなければならない」という硬直した思考パターン。自分や他者に厳しいルールを課す。",
    color: "#9B5BEF",
    questions: [23, 24, 6],
    feedbackHigh: "あなたは今『べき思考の歪み』が強く影響しているようです。「すべき」という言葉が、自分を縛る認知の歪みの一つになっています。",
    feedbackMid: "『べき思考の歪み』がやや影響しています。「すべき」を「したい」に変換する練習が効果的です。",
    feedbackLow: "『べき思考の歪み』はほぼ見られません。自分への柔軟なルール設定ができています。",
    adviceIntro: "「すべき」という言葉を「したい」「できたら良い」に置き換えることで、自分への圧力を和らげることができます。",
    adviceTips: [
      { title: "「すべき」を「したい」に変換する", body: "「毎日運動すべきだ」を「毎日運動できたら嬉しい」に言い換えてみましょう。義務感から解放されると、行動が自発的になり、できなかったときの自責も減ります。" },
      { title: "ルールの根拠を問い直す", body: "「失敗してはいけない」と感じたとき、「なぜそう思うのか？」「そのルールはいつ誰が決めたのか？」と問い直しましょう。多くの場合、過去の経験や他者の価値観が元になっています。" },
      { title: "「十分に良い」を目標にする", body: "完璧を目指す代わりに「今日は十分にやった」「これで十分良い」という基準を意識的に設けましょう。完璧でなくても価値があると認める練習になります。" },
    ],
  },
  {
    id: "labeling",
    name: "レッテル貼り",
    wireLabel: "レッテル貼りの歪み",
    description: "一度の行動や失敗から「自分はダメな人間だ」「あの人は〇〇な人だ」とラベルを貼る傾向。",
    color: "#EF5B5B",
    questions: [25, 26, 27],
    feedbackHigh: "あなたは今『レッテル貼りの歪み』が強く影響しているようです。一度の行動でその人の全てを決めてしまう癖が、自分と他者の可能性を閉じ込めています。",
    feedbackMid: "『レッテル貼りの歪み』がやや影響しています。行動と人格を切り離す練習が助けになります。",
    feedbackLow: "『レッテル貼りの歪み』はほぼ見られません。人を多面的に見られています。",
    adviceIntro: "人は一つのラベルで表せるほど単純ではありません。行動と人格を切り離して見る練習が、自分と他者への理解を深めます。",
    adviceTips: [
      { title: "「私は〇〇だ」を「私は〇〇をした」に変える", body: "「自分はダメな人間だ」ではなく「今回はうまくできなかった」と言い換えましょう。行動の失敗と人格の否定は全く別のことです。" },
      { title: "人を複数の側面で見る", body: "誰かに「〇〇な人」とラベルを貼りそうになったとき、その人の別の側面（優しかった場面・頑張っていた場面）を思い出してみましょう。人は多面的な存在です。" },
      { title: "「今回は」という文脈を加える", body: "「あの人はいつも自分勝手だ」ではなく「今回はそう感じた」と文脈を限定しましょう。一度の行動がその人の全てではないと意識できます。" },
    ],
  },
  {
    id: "personalization",
    name: "個人化",
    wireLabel: "個人化の歪み",
    description: "自分とは無関係な出来事も「自分のせいだ」と責任を感じる傾向。他者の問題を自分の問題として抱え込む。",
    color: "#3ABF6B",
    questions: [28, 29, 30],
    feedbackHigh: "あなたは今『個人化の歪み』が強く影響しているようです。背負わなくていい重荷を、あなたは一人で抱えています。責任の範囲を適切に見極めることが、改善への道です。",
    feedbackMid: "『個人化の歪み』がやや影響しています。「自分の問題」と「他者の問題」を区別する練習が効果的です。",
    feedbackLow: "『個人化の歪み』はほぼ見られません。責任の範囲を適切に捕えられています。",
    adviceIntro: "他者の感情や問題は、必ずしも自分が原因ではありません。責任の範囲を適切に見極める練習が、不必要な罪悪感を手放す助けになります。",
    adviceTips: [
      { title: "「原因の円グラフ」を描く", body: "何か問題が起きたとき、原因となり得る要素（相手の体調・環境・タイミング・自分の行動など）を書き出し、それぞれの割合を円グラフで考えてみましょう。自分の責任が100%でないことに気づけます。" },
      { title: "「自分の問題」と「他者の問題」を区別する", body: "相手が怒っているとき「自分のせいか？」と考える前に、「これは相手自身の問題かもしれない」と一度立ち止まりましょう。他者の感情の責任を全て引き受ける必要はありません。" },
      { title: "「できること」と「できないこと」を整理する", body: "他者の問題に関わるとき、「自分が実際にできることは何か」を具体的に書き出しましょう。できないことまで背負わず、できる範囲で誠実に関わることが大切です。" },
    ],
  },
];

export const ANSWER_LABELS = ["まったくない", "たまにある", "どちらでもない", "よくある", "いつもある"];

export function calculateCategoryScore(categoryId: string, answers: Record<number, number>): number {
  const category = CATEGORIES.find((c) => c.id === categoryId);
  if (!category) return 100;
  const totalQuestions = category.questions.length;
  if (totalQuestions === 0) return 100;
  let totalRaw = 0;
  for (const qId of category.questions) {
    totalRaw += answers[qId] ?? 0;
  }
  const maxRaw = 4 * totalQuestions;
  const distortionScore = (totalRaw / maxRaw) * 100;
  return Math.round(100 - distortionScore);
}

export function calculateOverallScore(answers: Record<number, number>): number {
  const scores = CATEGORIES.map((c) => calculateCategoryScore(c.id, answers));
  return Math.round(scores.reduce((sum, s) => sum + s, 0) / scores.length);
}

export function getWeakestCategory(answers: Record<number, number>): Category {
  let minScore = Infinity;
  let weakest = CATEGORIES[0];
  for (const cat of CATEGORIES) {
    const score = calculateCategoryScore(cat.id, answers);
    if (score < minScore) { minScore = score; weakest = cat; }
  }
  return weakest;
}

export function getCategoryFeedback(category: Category, score: number): string {
  if (score <= 40) return category.feedbackHigh;
  if (score <= 65) return category.feedbackMid;
  return category.feedbackLow;
}

export function getScoreLevel(score: number): { label: string; description: string; color: string } {
  if (score >= 80) return { label: "高い中庸度", description: "認知のバランスが非常に良好です。認知の歪みはほぼ見られません。", color: "#3ABF6B" };
  if (score >= 60) return { label: "やや偏りが見られます", description: "いくつかの認知の歪みが見られます。意識することで更に楽になれます。", color: "#C9A227" };
  if (score >= 40) return { label: "中程度の偏りがあります", description: "複数の認知の歪みが影響しています。一つずつ丁寧に整えていきましょう。", color: "#D4874A" };
  return { label: "強い偏りがあります", description: "認知の歪みが強く影響しています。でも大丈夫、これは癖であり、必ず変えられます。", color: "#EF5B5B" };
}
