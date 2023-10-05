import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../reutes";

const AppRouter = () => {
  const isAuth = true;

  return (
    <Routes>
      {isAuth &&
        publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} Component={Component}></Route>
        ))}
    </Routes>
  );
};

export default AppRouter;
