import React, {useEffect, useState} from "react";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token"); // Get token from storage
                const response = await fetch(
                    "http://localhost:3000/user/profile",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`, // Send token for authentication
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }

                const data = await response.json();
                setUser(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-3xl font-bold">Welcome, {user.name}!</h1>
            <p className="text-gray-600 mt-2">Email: {user.email}</p>
            <p className="text-gray-600 mt-2">User ID: {user._id}</p>
        </div>
    );
};

export default Dashboard;
