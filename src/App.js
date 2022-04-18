import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Links } from "./components/Routes";

function App() {
    const [dark, setDark] = useState(false);
    return (
        <div className={dark ? "dark" : ""}>
            <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
                <Navbar dark={dark} setDark={setDark} />
                <Links />
                <Footer />
            </div>
        </div>
    );
}

export default App;
