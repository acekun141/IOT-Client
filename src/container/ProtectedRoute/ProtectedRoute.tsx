import { FC, useContext } from "react";
import { Navigate } from "react-router-dom";
import { StateContext } from "../StateProvider/StateProvider";

interface IProps {
  children: JSX.Element
}

const ProtectedRoute: FC<IProps> = ({ children }) => {
  const { user } = useContext(StateContext);
  if (!user) return <Navigate to="/" replace />;
  return children;
}

export default ProtectedRoute;