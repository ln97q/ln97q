// キャラクターのデータをここにまとめて管理します
const characterData = [
  {
    name: "キャラクターA",
    age: "高校1年",
    details: "16歳 / 189cm",
    quote: "そろそろ付き合う？",
    tags: ["オレ", "きみ"],
    statusOk: ["甘いもの", "読書"],
    statusNg: ["辛いもの", "人混み"],
    expressions: ["笑顔", "イタズラ顔"],
    // 関係性のデータを追加
    relationship: {
      title: "関係性",
      targetName: "友人・恋人",
      hearts: 4, // 満点は5。この数字に合わせて青いハートが並びます
      leftBubble: "好きな人 →",
      rightBubble: "♡♡♡♥♥" // 右下のチャット風セリフ
    }
  },
  {
    name: "キャラクターB",
    age: "高校1年",
    details: "16歳 / 178cm",
    quote: "ねえわ！ダボ！！",
    tags: ["オレ", "おまえ"],
    statusOk: ["ゲーム", "スポーツ"],
    statusNg: ["勉強", "お化け"],
    expressions: ["怒り", "照れ", "呆れ"],
    // 関係性のデータを追加
    relationship: {
      title: "関係性",
      targetName: "友人・恋人",
      hearts: 1, // 満点は5
      leftBubble: "犬猿の仲 →",
      rightBubble: "♥♥♥♥♥" // 右下のチャット風セリフ
    }
  }
];
