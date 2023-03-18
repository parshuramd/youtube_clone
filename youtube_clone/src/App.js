import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body";
import ButtonListLandingPage from "./Components/ButtonListLandingPage";
// import Demo from "./components/Demo";
// import Demo2 from "./components/Demo2";
import Head from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import VideoContainer from "./Components/VideoContainer";
import WatchPage from "./Components/WatchPage";
// import WatchPage from "./Components/WatchPage";
import store from "./utils/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "buttonlist",
        element: <ButtonListLandingPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />

        {/**
         *
         * Head
         * Body
         *  Sidebar
         *    MenuItems
         *  MainContainer
         *    ButtonsList
         *    VideoContainer
         *      VideoCard
         *
         *
         */}
      </div>
    </Provider>
  );
}

export default App;
