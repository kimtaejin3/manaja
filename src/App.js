import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;
