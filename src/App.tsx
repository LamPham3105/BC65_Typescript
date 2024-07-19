import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserHistory } from "history";
import {
  unstable_HistoryRouter as HistoryRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
import AdminTemplate from "./templates/AdminTemplate";
import DashboardAdmin from "./admin/pagesAdmin/DashboardAdmin";
import GoogleMap from "./admin/pagesAdmin/GoogleMap";

export const routeLink: any = createBrowserHistory();
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <HistoryRouter history={routeLink}>
          {/* USER */}
          <Routes></Routes>
          {/* ADMIN */}
          <Routes>
            <Route path="admin" element={<AdminTemplate />}>
              <Route
                path="dashboard-admin"
                element={<DashboardAdmin />}
              ></Route>
              <Route path="form"></Route>
              <Route path="map" element={<GoogleMap />}></Route>
            </Route>
          </Routes>
        </HistoryRouter>
      </Provider>
    </>
  );
}

export default App;
