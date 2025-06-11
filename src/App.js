// import NavBar from "./NavBar";
import "./App.css";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import Crew from "./Pages/Crew";
import NoPage from "./Pages/NoPage";
import Destination from "./Pages/Destination";
import DestinationImg from "./images/DesinationImg.jpg";
import Technology from "./Pages/Technology";

function App() {
  return (
    <div style={{ backgroundImage: `url(${DestinationImg})`, backgroundSize:'cover', backgroundPosition:'center', height:'100%', width:'100%'}}>
      
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            path="/destination"
            element={<Destination/>}
          />
          <Route
            path="/crew"
            element={<Crew />}
          />
          <Route
            path="/technology"
            element={<Technology />}
          />
          <Route
            path="*"
            element={<NoPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
