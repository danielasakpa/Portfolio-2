import {Container, Box} from "@mui/material"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Box margin="0 auto">
       <Router>
          <Container width="1440">
            <Navbar />
             <Routes>
               <Route path="/" element={<Home />} />
             </Routes>
            <Footer />
          </Container>
       </Router>
      <ToastContainer />
    </Box>
  );
}

export default App;
