import React from "react";
import "./WelcomeView.css"; // WelcomeViewのCSSをインポート
import closetImage from "../assets/images/LPimg.png"; // 画像ファイルをインポート

const WelcomeView = ({ onStart }) => {
  return (
    <div className="welcome-view">
      <div className="welcome-text">
        <h1>Style Finder</h1>
        <p>5ステップで自分のスタイルを発見できるアプリです。</p>
        <p>
          あなたのスタイルの好みを探索しに来て、最適な服装を見つけましょう。
        </p>
        <p>
          個人のおすすめを元に最適な、お洒落なコーディネートを見つけましょう。
        </p>
        <button className="start-button" onClick={onStart}>
          Start
        </button>
      </div>
      <div className="welcome-image">
        <img src={closetImage} alt="Closet" />
      </div>
    </div>
  );
};

export default WelcomeView;
