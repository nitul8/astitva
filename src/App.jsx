import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Drives from "./pages/drives/Drives";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Donate from "./pages/Donate";
import {Analytics} from "@vercel/analytics/react";
import FoodDonation from "./pages/drives/FoodDonation";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gray-50">
                {/* Navbar stays at the top */}
                <Navbar />

                {/* Main content */}
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/drives" element={<Drives />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/donate" element={<Donate />} />
                        <Route
                            path="/food-donation"
                            element={<FoodDonation />}
                        />
                    </Routes>
                </main>
            </div>

            {/* Analytics at the bottom */}
            <Analytics />
        </Router>
    );
}

export default App;
