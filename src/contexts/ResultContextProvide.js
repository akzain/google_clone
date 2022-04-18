import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const getResults = async (type) => {
        setLoading(true);

        const res = await fetch(`${baseUrl}${type}`, {
            method: "GET",
            headers: {
                "X-User-Agent": "desktop",
                "X-Proxy-Location": "EU",
                "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
                "X-RapidAPI-Key":
                    "28f2a8a06dmsh193911b1808b9b8p15c2d3jsn75f70ba9d64b",
            },
        });

        const data = await res.json();

        if (type.includes("/news")) {
            setResults(data.entries);
        } else if (type.includes("/image")) {
            setResults(data.image_results);
        } else {
            setResults(data.results);
        }

        setLoading(false);
    };

    return (
        <StateContext.Provider
            value={{ getResults, results, searchTerm, setSearchTerm, loading }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useResultContext = () => useContext(StateContext);
