import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        // Hide preloader after 4 seconds (adjust timing based on your animation duration)
        const timer = setTimeout(() => {
            setShowPreloader(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (showPreloader) {
        return <Preloader />;
    }

    return (
        <>
            {/* header*/}
            <Navbar />
            {/* main */}
            <main>
                <Outlet />
            </main>
            {/* footer */}
            <Footer />
        </>
    );
};

export default Layout;