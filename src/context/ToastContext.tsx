import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface ToastContextProps {
  showToast: (message: string) => void;
}

interface ToastProviderProps {
  children: ReactNode;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState<{ message: string } | null>(null);

  const showToast = useCallback((message: string) => {
    setToast({ message });
    setTimeout(() => setToast(null), 3000);
  }, []);
  return (
    <ToastContext.Provider value={{ showToast }}>
      <div className="relative toast-parent">
        {toast && (
          <div
            className="toast absolute fixed bottom-4 right-4 z-50 bg-success
              w-60 h-8 text-white p-4
              rounded-xl shadow-lg"
          >
            {toast.message}
          </div>
        )}
      </div>
      <div className="not-toast relative main-website">{children}</div>
    </ToastContext.Provider>
  );
};
