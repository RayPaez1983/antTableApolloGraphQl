import { Routes, Route } from "react-router";
import Home from "./components/home";
import NavMenu from "./components/navMenu";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavMenu />}>
      <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;