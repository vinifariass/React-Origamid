import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginPasswordReset from "./LoginPasswordReset.js";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginCreate from "./LoginCreate";
import NotFound from "./NotFound";
import styles from "./Login.module.css";
import { UserContext } from "../../UserContext";
const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) {
    return <Navigate to="/conta" />;
  }
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
