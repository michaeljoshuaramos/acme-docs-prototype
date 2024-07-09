import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import Guides from "./pages/Guides";
import APIReference from "./pages/APIReference";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route index element={<Guides />} />
            <Route path="api-reference" element={<APIReference />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
