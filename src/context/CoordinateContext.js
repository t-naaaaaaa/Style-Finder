import React, { createContext, useState, useContext } from "react";

// コーディネートコンテキストの作成
const CoordinateContext = createContext();

// コーディネートコンテキストプロバイダーコンポーネント
export const CoordinateProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState([]);

  // コーディネート情報を更新する関数
  const updateCoordinates = (newCoordinates) => {
    setCoordinates(newCoordinates);
  };

  return (
    <CoordinateContext.Provider value={{ coordinates, updateCoordinates }}>
      {children}
    </CoordinateContext.Provider>
  );
};

// コーディネートコンテキストを使用するためのカスタムフック
export const useCoordinates = () => {
  return useContext(CoordinateContext);
};
