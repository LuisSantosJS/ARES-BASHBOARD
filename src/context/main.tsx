import React, { createContext, useState, useContext } from "react";

type ContextType = {
    isOn: boolean;
    setIsOn: (value: boolean) => void;

};

const ContextMain = createContext<ContextType>({
    isOn: false,
    setIsOn: (value: boolean) => { },
});

const ProviderMain: React.FC = ({ children }) => {
    const [isOn, setIsOn] = useState<boolean>(false);
    return (
        <ContextMain.Provider
            value={{
                isOn, setIsOn
            }}
        >
            {children}
        </ContextMain.Provider>
    );
};
export default ProviderMain;

export function useIsOn() {
    const infoUser: ContextType = useContext(ContextMain);
    const { isOn, setIsOn } = infoUser;
    return { isOn, setIsOn };
}
