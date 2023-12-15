// 日付を特定のフォーマットに変換する関数
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("ja-JP");
};

// 文字列が特定の長さを超えている場合に切り詰める関数
export const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

// 他のヘルパー関数もここに追加

