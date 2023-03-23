import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agreement from "./pages/agreement";
import Certificate from "./pages/certificate";
import Student from "./pages/student";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Certificate />} />
          <Route path="/student" element={<Student />} />
          <Route path="/agreement" element={<Agreement />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
