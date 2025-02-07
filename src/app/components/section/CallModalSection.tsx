"use client";

import AddCarModal from "@/app/components/modal/AddCarModal";
import { useState } from "react";

const CallModalSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 bg-slate-700 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg hover:bg-black transition-all duration-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-7 sm:w-7"
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
