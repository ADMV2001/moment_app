import { getCurrentUser } from '@/lib/appwrite';
import { createContext, useContext, useState, useEffect, Dispatch, SetStateAction, ReactNode } from 'react';
import { Models } from 'react-native-appwrite';

type GlobalContextType = {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    user: Models.Document | null;
    setUser: Dispatch<SetStateAction<Models.Document | null>>;
    isLoading: boolean;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }: { children: ReactNode }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<Models.Document | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const init = async () => {
        try {
            const res = await getCurrentUser();
            if (res) {
            setIsLoggedIn(true);
            setUser(res);
            } else {
            setIsLoggedIn(false);
            setUser(null);
            }
        } catch (e) {
            console.log("Error checking session:", e);
            setIsLoggedIn(false);
            setUser(null);
        } finally {
            setIsLoading(false);
        }
        };
        init();
    }, []);

    return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
      }}
    >
      {!isLoading && children}
    </GlobalContext.Provider>
  ); 
    
}

export default GlobalProvider;