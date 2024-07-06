import React, { createContext, useState, useContext, ReactNode } from 'react';

type ActivePageContextType = {
    activePage: string;
    setActivePage: (page: string) => void;
};

const ActivePageContext = createContext<ActivePageContextType | undefined>(undefined);

export const ActivePageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [activePage, setActivePage] = useState<string>('/');

    return (
        <ActivePageContext.Provider value={{ activePage, setActivePage }}>
            {children}
        </ActivePageContext.Provider>
    );
};

export const useActivePage = () => {
    const context = useContext(ActivePageContext);
    if (!context) {
        throw new Error('useActivePage must be used within an ActivePageProvider');
    }
    return context;
};
