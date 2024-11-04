import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import MainPage from "./pages/MainPage";
import MeetingPage from "./pages/MeetingPage";

function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/meeting" element={<MeetingPage />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;
