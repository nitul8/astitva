import React, {Suspense} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import {Analytics} from "@vercel/analytics/react";
import {Navigate} from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const About = React.lazy(() => import("./pages/About"));
const Drives = React.lazy(() => import("./pages/drives/Drives"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const Donate = React.lazy(() => import("./pages/Donate"));
const BloodHero = React.lazy(() => import("./pages/bloodhero/BloodHero"));
const SearchNearby = React.lazy(() => import("./pages/bloodhero/SearchNearby"));
const PadsDonation = React.lazy(() => import("./pages/drives/PadsDonation"));
const BloodDonation = React.lazy(() => import("./pages/drives/BloodDonation"));

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" />;
};

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
                            path="/bloodhero"
                            element={
                                <Suspense fallback={<p>Loading...</p>}>
                                    <BloodHero />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/searchnearby"
                            element={
                                <Suspense fallback={<p>Loading...</p>}>
                                    <SearchNearby />
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
                            path="/pads-donation"
                            element={
                                <Suspense fallback={<p>Loading...</p>}>
                                    <PadsDonation />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/blood-donation"
                            element={
                                <Suspense fallback={<p>Loading...</p>}>
                                    <BloodDonation />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/dashboard"
                            element={
                                <PrivateRoute>
                                    <Dashboard />
                                </PrivateRoute>
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
