"use client";

import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import { ToastContainer } from "react-toastify";

const AdminLayout = ({ children }: PropsWithChildren) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    const raf = useCallback(
        (time: number) => {
            lenis?.raf(time);
            requestAnimationFrame(raf);
        },
        [lenis]
    );

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        if (!lenis) {
            setLenis(new Lenis());
        }

        requestAnimationFrame(raf);

        return () => {
            lenis?.destroy();
        };
    }, [lenis, raf]);

    return (
        <div className="adminLayout">
            <ToastContainer />
            <div className="App">{children}</div>
        </div>
    );
};

export default AdminLayout;
