import { FC, useContext } from "react";
import { Navigate } from "react-router-dom";
import { StateContext } from "../StateProvider/StateProvider";

interface IProps {
  children: JSX.Element
}

export const ProtectedRoute: FC<IProps> = ({ children }) => {
  const { user } = useContext(StateContext);
  if (!user) return <Navigate to="/" replace />;
  return children;
}

const protectRoute = (element: JSX.Element) => {
  return (
    <ProtectedRoute>
      {element}
    </ProtectedRoute>
  )
}

export default protectRoute;