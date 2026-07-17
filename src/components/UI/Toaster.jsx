"use client";

import { useState, createContext, useContext } from "react";
import Toast from "./Toast";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export default function ToasterProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = ({ title, message, type = "info", duration = 4000 }) => {
    const id = Date.now();

    setToasts((prev) => [
      ...prev,
      {
        id,
        title,
        message,
        type,
        duration,
      },
    ]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className="fixed top-5 right-5 z-50 flex flex-col gap-4">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
