import React from "react";
import WelcomeView from "./views/WelcomeView"; // 'views' フォルダからインポート
import "./App.css"; // App.js用のCSSファイルをインポート

function App() {
  return (
    <div className="App">
      <WelcomeView />
      {/* アプリの他の部分 */}
    </div>
  );
}

export default App;
