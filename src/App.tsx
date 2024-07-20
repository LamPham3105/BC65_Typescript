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
import FormAdmin from "./admin/pagesAdmin/FormAdmin";
import ManageAdmin from "./admin/pagesAdmin/ManageAdmin";

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
              <Route path="form" element={<FormAdmin />}></Route>
              <Route path="map" element={<GoogleMap />}></Route>
              <Route path="manage-admin" element={<ManageAdmin />}></Route>
            </Route>
          </Routes>
        </HistoryRouter>
      </Provider>
    </>
  );
}

export default App;
