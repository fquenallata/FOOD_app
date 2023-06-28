import Home from "./views/home/home.component.jsx";
import Detail from "./views/detail/detail.component.jsx";
import Landing from "./views/landing/landing.component.jsx";
import Form from "./views/form/form.component.jsx";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/postRecipe" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
