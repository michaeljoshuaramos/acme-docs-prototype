import { BrowserRouter, Route, Routes } from "react-router-dom";
import Guides from "./pages/Guides";
import APIReference from "./pages/APIReference";
import Changelog from "./pages/Changelog";
import NavigationBar from "./components/Containers/NavBar/NavigationBar";
import SideBar from "./components/Containers/SideBar/SideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Guides
                  navigation={
                    <>
                      <NavigationBar />
                      <SideBar />
                    </>
                  }
                />
              }
            />
            <Route
              path="api-reference"
              element={
                <APIReference
                  navigation={
                    <>
                      <NavigationBar />
                      <SideBar />
                    </>
                  }
                />
              }
            />
            <Route path="changelog" element={<Changelog />} />
            <Route path="login" element={<Changelog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
