// Importing browser router, install it first --- npm i -D react-router-dom@latest
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components
import Template from "./components/Template";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import Memberthree from "./components/pages/member3/Memberthree";
import Memberone from "./components/pages/member1/Memberone";
import Membertwo from "./components/pages/member2/Membertwo";
import Memberfour from "./components/pages/member4/Memberfour";
import Error from "./components/pages/error/Error";

import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        {/* Importing the Nav component before nested routes */}
        <Nav />

        {/* Using the Routes and Route components from react-router-dom */}
        <Routes>
          <Route path="/" element={<Template />}>
            <Route path="/Memberone" element={<Memberone />} />
            <Route path="/Membertwo" element={<Membertwo />} />
            <Route path="/Memberthree" element={<Memberthree />} />
            <Route path="/Memberfour" element={<Memberfour />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>

        {/* Importing the Footer component after nested routes */}
        <Footer />

      </BrowserRouter>
      
    </div>
  );
}

export default App;
