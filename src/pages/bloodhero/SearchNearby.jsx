import React, {useEffect, useRef, useState} from "react";

const SearchNearby = () => {
    const apiKey = "aRgg74Izf_5StTwfVBtgRkuN2VWDunPpyttveoU4C2A";
    const mapRef = useRef(null);
    const platformRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const markerRef = useRef(null);
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const [userLocation, setUserLocation] = useState({
        lat: 26.746,
        lng: 94.2485,
    }); // Default to Jorhat

    useEffect(() => {
        // Get the user's current location
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    setUserLocation({lat, lng}); // Set user's location
                },
                (error) => {
                    console.error("Error getting user location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    useEffect(() => {
        const loadHereMaps = async () => {
            try {
                await loadScript(
                    "https://js.api.here.com/v3/3.1/mapsjs-core.js"
                );
                await loadScript(
                    "https://js.api.here.com/v3/3.1/mapsjs-service.js"
                );
                await loadScript("https://js.api.here.com/v3/3.1/mapsjs-ui.js");
                await loadScript(
                    "https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"
                );

                if (window.H) {
                    setIsMapLoaded(true);
                }
            } catch (error) {
                console.error("Error loading HERE Maps scripts:", error);
            }
        };

        loadHereMaps();
    }, []);

    useEffect(() => {
        if (!isMapLoaded || !window.H) return;

        try {
            platformRef.current = new window.H.service.Platform({
                apikey: apiKey,
            });
            const defaultLayers = platformRef.current.createDefaultLayers();

            const map = new window.H.Map(
                mapRef.current,
                defaultLayers.vector.normal.map,
                {
                    center: userLocation,
                    zoom: 14,
                    pixelRatio: window.devicePixelRatio || 1,
                }
            );

            new window.H.mapevents.Behavior(
                new window.H.mapevents.MapEvents(map)
            );
            window.H.ui.UI.createDefault(map, defaultLayers);

            mapInstanceRef.current = map;

            // Add a marker for the user's location
            const userMarker = new window.H.map.Marker(userLocation);
            map.addObject(userMarker);

            window.addEventListener("resize", () => map.getViewPort().resize());
        } catch (error) {
            console.error("Error initializing HERE Maps:", error);
        }

        return () => {
            window.removeEventListener("resize", () =>
                map.getViewPort().resize()
            );
        };
    }, [isMapLoaded, userLocation]);

    const handleSearchLocation = async () => {
        const searchInput = document.getElementById("search-location").value;

        if (!searchInput) {
            alert("Please enter a location.");
            return;
        }

        try {
            const response = await fetch(
                `https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(
                    searchInput
                )}&apiKey=${apiKey}`
            );
            const data = await response.json();

            if (data.items.length === 0) {
                alert("No results found.");
                return;
            }

            const {lat, lng} = data.items[0].position;

            if (mapInstanceRef.current) {
                mapInstanceRef.current.setCenter({lat, lng});
                mapInstanceRef.current.setZoom(14);

                // Remove the existing marker if present
                if (markerRef.current) {
                    mapInstanceRef.current.removeObject(markerRef.current);
                }

                // Add a new marker
                markerRef.current = new window.H.map.Marker({lat, lng});
                mapInstanceRef.current.addObject(markerRef.current);
            }
        } catch (error) {
            console.error("Error fetching location:", error);
            alert("Error fetching location.");
        }
    };

    // Function to load scripts dynamically
    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                resolve();
                return;
            }

            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    };

    return (
        <div className="flex justify-evenly flex-col md:flex-row p-4 mt-20">
            <div
                ref={mapRef}
                className="w-full md:w-2/3 h-[400px] md:h-[600px] mt-4 border rounded-md shadow-lg"
            />
            <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold">Search a Location</h1>
                <div className="flex justify-center items-center mt-4">
                    <input
                        type="text"
                        id="search-location"
                        placeholder="Enter a location (e.g., New York)"
                        className="border h-10 w-60 m-3 px-3"
                    />
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600"
                        onClick={handleSearchLocation}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchNearby;
