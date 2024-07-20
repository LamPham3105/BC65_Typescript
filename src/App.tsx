import {
  unstable_HistoryRouter as HistoryRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import HomeTemplate from "./User/Templates/HomeTemplate";
import Rooms from "./User/Components/Rooms/Rooms";
import HomePage from "./User/Pages/HomePage";
import RestaurantPage from "./User/Pages/RestaurantPage";
import BlogPage from "./User/Pages/BlogPage";
import DetailPage from "./User/Pages/DetailPage";

export const routeLink: any = createBrowserHistory();

function App() {
  return (
    <>
      <Provider store={store}>
        <HistoryRouter history={routeLink}>
          <Routes>
            <Route path="" element={<HomeTemplate />}>
              <Route index element={<HomePage />}></Route>
              <Route path="room" element={<Rooms />}></Route>
              <Route path="restaurant" element={<RestaurantPage />}></Route>
              <Route path="blog" element={<BlogPage />}></Route>
              <Route path="detail">
                <Route path=":id" element={<DetailPage />}></Route>
              </Route>
            </Route>
          </Routes>
        </HistoryRouter>
      </Provider>
    </>
  );
}

export default App;
