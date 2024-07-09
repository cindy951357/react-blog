import React, { createContext, useState, useContext, ReactNode } from 'react';

type ActivePageContextType = {
    activePage: string;
    activeAboutPage: string;
    setActivePage: (page: string) => void;
    setActiveAboutPage: (page: string) => void;
};

const ActivePageContext = createContext<ActivePageContextType | undefined>(undefined);

export const ActivePageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [activePage, setActivePage] = useState<string>('/');
    const [activeAboutPage, setActiveAboutPage] = useState<string>('/about-contact');

    return (
        <ActivePageContext.Provider value={{ activePage, setActivePage,
            activeAboutPage, setActiveAboutPage }}>
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
