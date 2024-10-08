import { createBrowserHistory } from "history";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import HomeTemplate from "./User/Templates/HomeTemplate";
import HomePage from "./User/Pages/HomePage";
import DetailPage from "./User/Pages/DetailPage";

import AdminTemplate from "./admin/templates/AdminTemplate";
import DashboardAdmin from "./admin/pagesAdmin/DashboardAdmin";
import FormAdmin from "./admin/pagesAdmin/form/AddUserForm.tsx";
import ManageAdmin from "./admin/pagesAdmin/ManageAdmin";
import GoogleMap from "./admin/pagesAdmin/map/GoogleMap";
import RoomPage from "./User/Pages/RoomPage";
import DynamicResourceLoader from "./DynamicLoader.tsx";
import ManagePage from "./User/Pages/ManagePage.tsx";
import BasicTablePage from "./admin/pagesAdmin/table/BasicTablePage.tsx";
import LoginAdmin from "./admin/componentsAdmin/LoginAdmin.tsx";
import AddUserForm from "./admin/pagesAdmin/form/AddUserForm.tsx";

export const routeLink: any = createBrowserHistory();

function App() {
  return (
    <>
      <HistoryRouter history={routeLink}>
        <DynamicResourceLoader />
        <Routes>
          {/* User Routes */}
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<HomePage />}></Route>
            <Route path="room">
              <Route path="" element={<RoomPage />}></Route>
              <Route path=":locate" element={<RoomPage />}></Route>
            </Route>
            <Route path="detail">
              <Route path=":id" element={<DetailPage />}></Route>
            </Route>
            <Route path="info-user" element={<ManagePage />}></Route>
          </Route>
          {/* Admin Routes */}
          <Route path="login-admin" element={<LoginAdmin />}></Route>
          <Route path="admin" element={<AdminTemplate />}>
            <Route path="dashboard-admin" element={<DashboardAdmin />}></Route>
            <Route path="add-user-form" element={<AddUserForm />}></Route>
            <Route path="map" element={<GoogleMap />}></Route>
            <Route path="table" element={<BasicTablePage />}></Route>
            <Route path="manage-admin" element={<ManageAdmin />}></Route>
            <Route path="edit-user/:id" element={<FormAdmin />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </>
  );
}

export default App;
