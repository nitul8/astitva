import React, {Suspense} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import {Analytics} from "@vercel/analytics/react";

const About = React.lazy(() => import("./pages/About"));
const Drives = React.lazy(() => import("./pages/drives/Drives"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const Donate = React.lazy(() => import("./pages/Donate"));
const FoodDonation = React.lazy(() => import("./pages/drives/FoodDonation"));

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
                        <Route
                            path="/about"
                            element={
                                <Suspense fallback={<p>Loading...</p>}>
                                    <About />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/drives"
                            element={
                                <Suspense fallback={<p>Loading...</p>}>
                                    <Drives />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/contact"
                            element={
                                <Suspense fallback={<p>Loading...</p>}>
                                    <Contact />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <Suspense fallback={<p>Loading...</p>}>
                                    <Login />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <Suspense fallback={<p>Loading...</p>}>
                                    <Signup />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/donate"
                            element={
                                <Suspense fallback={<p>Loading...</p>}>
                                    <Donate />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/food-donation"
                            element={
                                <Suspense fallback={<p>Loading...</p>}>
                                    <FoodDonation />
                                </Suspense>
                            }
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
