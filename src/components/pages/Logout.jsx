import React from "react";
import { useNavigate } from "react-router-dom";

import AppLoading from "../../components/organisms/AppLoading";
import { removeToken } from "../../helpers/Auth";

export default function Logout() {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      removeToken();
      navigate("/landing");
    }, 1500);
  }, [navigate]);

  return <AppLoading message="Desconectando ..." />;
}