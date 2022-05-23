import Layout from "Components/AuthLayout";
import PanelLayout from "Components/PanelLayout";
import ForgotPassword from "Pages/Auth/ForgotPassword";
import Login from "Pages/Auth/Login";
import Panel from "Pages/Panel";


import { Routes, Route, Navigate } from "react-router-dom";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/auth/login"} />} />
      <Route path="login" element={<Navigate to={"/auth/login"} />} />
      <Route path="auth" element={<Layout />}>
        <Route index element={<Navigate to={"/auth/login"} />} />
        <Route path="login">
          <Route index element={<Login />} />
        </Route>
        <Route path="esqueci-a-senha" element={<ForgotPassword />} />        
        <Route path="*" element={<Navigate to={"/auth/login"} />} />
      </Route>
      <Route path="/painel" element={<PanelLayout />}>
        <Route index element={<Panel />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
