
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import { ListaTareas } from "../../listaTareas/ListaTareas";
import { LoginSimple } from "../../loginAgustin/LoginSimple";

export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginSimple />
        </Route>
        <Route path="/tareas">
          <ListaTareas />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
