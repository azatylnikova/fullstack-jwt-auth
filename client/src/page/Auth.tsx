import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { userSlice } from "../store/reducers/UserSlice";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/reducers/ActionCreator";
import NavBar from "../components/NavBar";
const Auth = () => {
  const { users } = useAppSelector(state => state.userReducer);
  const { increment } = userSlice.actions;
  const dispatch = useAppDispatch();

  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <NavBar />
      <div className="p-5" style={{ minHeight: "80vh" }}>
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <form className="d-flex flex-column">
          <input
            className="mt-3"
            placeholder="Введите ваш email..."
            // value={email}
            // onChange={e => setEmail(e.target.value)}
          />
          <input
            className="mt-3"
            placeholder="Введите ваш пароль..."
            // value={password}
            // onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <div className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Нет аккаунта?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}
            {/* <button  onClick={click}>
              {isLogin ? "Войти" : "Регистрация"}
            </button> */}
          </div>
        </form>

        <h1> {JSON.stringify(users, null, 2)} </h1>
        <button onClick={() => dispatch(increment(10))}>INCREMENT</button>
      </div>
    </div>
  );
};

export default Auth;
