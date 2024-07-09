import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="guides" element={<h1>Hi</h1>} />
            <Route path="api-reference" element={<h1>Hi</h1>} />
            <Route path="changelog" element={<h1>Hi</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>

      <NavigationBar />
    </>
  );
}

export default App;
