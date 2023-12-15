import React, { createContext, useState, useContext } from "react";

// ユーザーコンテキストの作成
const UserContext = createContext();

// ユーザーコンテキストプロバイダーコンポーネント
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ユーザー情報を更新する関数
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// ユーザーコンテキストを使用するためのカスタムフック
export const useUser = () => {
  return useContext(UserContext);
};
