"use client";

import AddCarModal from "@/app/components/modal/AddCarModal";
import { useState } from "react";

const CallModalSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 bg-slate-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-black transition-all duration-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 4v16m8-8H4"
                    />
                </svg>
            </button>

            <AddCarModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>
    );
};

export default CallModalSection;
