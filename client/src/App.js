import { Routes, Route } from "react-router-dom";
import AddEmp from "./components/CreateEmp";
import Emp from "./components/Emp";
import { UpdateEmp } from "./components/UpdateEmp";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>} >
        <Route path="/" element={<Emp></Emp>} ></Route>
        <Route path="/AddEmp" element={<AddEmp></AddEmp>} ></Route>
        <Route path="/Update/:id" element={<UpdateEmp></UpdateEmp> }></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
