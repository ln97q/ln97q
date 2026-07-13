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
    relationship: {
      title: "関係性",
      text: "ここに2人の細かい関係性の説明テキストをたっぷり書くことができます。文字が左側に並びます。",
      relImage: "https://placehold.co/400x300/ff69b4/ffffff?text=Illustration", // ★ここにイラストの画像URL（またはファイル名）を入れます
      targetName: "魔法少女",
      hearts: 4,
      leftBubble: "守りたい対象 →",
      rightBubble: "頼りにしてる！"
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
    relationship: {
      title: "関係性",
      text: "ここにもう片方の視点からの関係性説明テキストを書くことができます。",
      relImage: "https://placehold.co/400x300/ff1493/ffffff?text=Illustration", // ★ここにイラストの画像URLを入れます
      targetName: "いぬ",
      hearts: 3,
      leftBubble: "お世話する枠 →",
      rightBubble: "いつもありがとう"
    }
  }
];
