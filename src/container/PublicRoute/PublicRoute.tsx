import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { StateContext } from "../StateProvider/StateProvider";


interface IProps {
  children: JSX.Element;
  restricted: boolean;
}

export const PublicRoute = ({ restricted, children }: IProps) => {
  const { user } = useContext(StateContext);

  if (!!user && restricted) return <Navigate to="/dashboard" replace />
  return children
}

const publicRoute = (element: JSX.Element, restricted: boolean) => {
  return (
    <PublicRoute restricted={restricted}>
      {element}
    </PublicRoute>
  )
}

export default publicRoute;