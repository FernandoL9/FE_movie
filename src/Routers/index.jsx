import { BrowserRouter } from "react-router-dom";

import {AppRouter} from "../Routers/app.routes";
import {AuthRouter} from "../Routers/auth.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRouter/>
    </BrowserRouter>
  )
}