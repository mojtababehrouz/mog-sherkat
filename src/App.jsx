import "./App.css";
import Map from "./Pages/App/Map";
import SideBar from "./Pages/App/SideBar";
import { useState } from "react";
import { currentCoordinatesContext } from "./Context/currentCoordinatesContext";
import { coordinatesContext } from "./Context/coordinatesContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Pages/Login/LoginForm";
import CreateUser from "./Pages/Login/CreateUser";
import { SessionDataProvider } from "./SessionDataContex";

function App() {
  const [coordinates, setCoordinates] = useState([]);
  const [currentCoordinates, setCurrentCoordinates] = useState([
    35.7019167328534, 51.39129638671876,
  ]);

  const addHandler = (lat, lon) => {
    setCoordinates((prevCoordinates) => [...prevCoordinates, [lat, lon]]);
    setCurrentCoordinates([lat, lon]);
  };

  return (
    <BrowserRouter>
    <SessionDataProvider>
      <currentCoordinatesContext.Provider
        value={{ currentCoordinates, setCurrentCoordinates }}
      >
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route
            path="/App"
            element={
              <coordinatesContext.Provider
                value={{ coordinates, addCoordinates: addHandler }}
              >
                <div className="grid-cols-12 md:grid h-full">
                  <section className="col-span-8 lg:col-span-9">
                    <Map />
                  </section>
                  <SideBar />
                </div>
              </coordinatesContext.Provider>
            }
          />
          <Route path="/CreateUser" element={<CreateUser />} />
        </Routes>
      </currentCoordinatesContext.Provider>
      </SessionDataProvider>
    </BrowserRouter>
  );
}

export default App;
