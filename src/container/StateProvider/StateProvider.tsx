import { createContext, FC, useContext, useEffect, useState } from "react";
import { getUserData } from "../../services/userServices";

interface IProps {
  children: JSX.Element
}

interface IState {
  user: {
    id: string;
    username: string;
    role: string;
    permission: string[];
  };
}

interface IMethod {
  logout: () => any;
}

export const StateContext = createContext<IState & IMethod>({} as IState & IMethod);


const StateProvider: FC<IProps> = ({ children }) => {
  const [onInit, setOnInit] = useState(true);
  const [state, setState] = useState<IState>({} as IState);

  useEffect(() => {
    handleGetUserData();
  }, []);

  const handleGetUserData = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!!accessToken) {
      const { data, error } = await getUserData();
      if (error) {
        localStorage.removeItem("accessToken");
      } else {
        setState(prev => ({...prev, user: data }));
      }
    }
    setOnInit(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  }


  return (
    <StateContext.Provider value={{
      ...state,
      logout: handleLogout
    }}>
      {onInit ? null : children}
    </StateContext.Provider>
  );
}

export default StateProvider;