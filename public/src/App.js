import {Route, Routes} from "react-router-dom";
import FilmPage from "./components/Film_page/FilmPage";
import React from "react";
import MainPage from "./MainPage";
import SerialPage from "./components/Serial_page/SerialPage";


function App() {
  return (
      <div>
          <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='movie/:slug' element={<FilmPage />} />
              <Route path='serial/:slug' element={<SerialPage />} />
          </Routes>
      </div>
  )
}

export default App;
