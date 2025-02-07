"use client";

import { PropsWithChildren, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import { ToastContainer } from "react-toastify";

const AdminLayout = ({ children }: PropsWithChildren) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        const lenis = new Lenis({
            duration: 2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2, // Adjust touch sensitivity
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy(); // Cleanup on component unmount
        };
    }, []);

    return (
        <div className="adminLayout">
            <ToastContainer />
            <div className="App">{children}</div>
        </div>
    );
};

export default AdminLayout;
