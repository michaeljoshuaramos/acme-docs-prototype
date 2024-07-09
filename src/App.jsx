import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Guides } from "./pages/Guides";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route index element={<Guides />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
