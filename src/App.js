import {Container, Box} from "@mui/material"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Box margin="0 auto">
       <Router>
          <Container Width="1440">
            <Navbar />
             <Routes>
               <Route path="/" element={<Home />} />
             </Routes>
            <Footer />
          </Container>
       </Router>
    </Box>
  );
}

export default App;
