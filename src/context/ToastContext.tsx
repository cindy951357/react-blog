import ToastUI from "@/components/Toast/ToastUI";
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
  const [toast, setToast] = useState<{ message: string }>({message: ''});

  const showToast = useCallback((message: string) => {
    setToast({ message });
    setTimeout(() => setToast({message: ''}), 3000);
  }, []);
  // 區分成有toast與沒toast兩大部分
  return (
    <ToastContext.Provider value={{ showToast }}>        
        <div className="not-toast relative main-website">
          <ToastUI toast={toast}/>
          {children}
        </div>        
    </ToastContext.Provider>
  );
};
