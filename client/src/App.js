//views
import Home from "./views/Home/Home.component.jsx";
import Detail from "./views/Detail/Detail.component.jsx";
import Landing from "./views/Landing/Landing.component.jsx";
import Form from "./views/Form/Form.component.jsx";
//routes
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
