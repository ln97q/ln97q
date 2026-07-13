// キャラクターのデータをここにまとめて管理します
const characterData = [
  {
    name: "いぬ",
    age: "高校2年",
    details: "17歳 / 189cm",
    quote: "可愛くて強くて頭いーの！？ずりー！",
    tags: ["おれ", "（ちゃん付け）"],
    statusOk: ["カツサンド", "メロンパン"],
    statusNg: ["数学", "いじわる"],
    expressions: ["笑顔", "何も分かってない顔"],
    // 画像の右下にあった「関係性」のデータをいぬ用に用意しました
    relationship: {
      title: "関係性",
      targetName: "魔法少女", // 相手の名前
      hearts: 4, // 満点は5（メーターの青いハートの数）
      leftBubble: "守りたい対象 →", // 左側のセリフ
      rightBubble: "頼りにしてる！" // 右側のセリフ
    }
  },
  {
    name: "魔法少女",
    age: "高校2年",
    details: "16歳 / 178cm",
    quote: "あなたのことも私が守るからね",
    tags: ["私", "（くん付け）"],
    statusOk: ["ショートケーキ", "睡眠"],
    statusNg: ["争い", "好奇心"],
    expressions: ["正義感", "微笑み", "喜び"],
    // 画像の右下にあった「関係性」のデータを魔法少女用に用意しました
    relationship: {
      title: "関係性",
      targetName: "いぬ", // 相手の名前
      hearts: 3, // 満点は5
      leftBubble: "お世話する枠 →", // 左側のセリフ
      rightBubble: "いつもありがとう" // 右側のセリフ
    }
  }
];
