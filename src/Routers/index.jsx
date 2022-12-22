import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import {AppRouter} from "../Routers/app.routes";
import {AuthRouter} from "../Routers/auth.routes";

export function Routes() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      {user ? <AppRouter/> : <AuthRouter/>}
    </BrowserRouter>
  )
}