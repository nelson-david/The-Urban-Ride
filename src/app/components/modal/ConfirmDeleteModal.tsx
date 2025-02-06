"use client";
import { AnimatePresence, motion } from "framer-motion";
import { SetStateAction, useAtom } from "jotai";
import { Dispatch, useState } from "react";
import { ImSpinner8 } from "react-icons/im";
import { errorToast, successToast } from "@/app/const";
import { supabase } from "@/app/helpers/utils/supabaseClient";
import { carsAtom } from "@/app/helpers/store/car";

interface ModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    car: { customID: string };
}

const ConfirmDeleteModal = ({ isOpen, setIsOpen, car }: ModalProps) => {
    const [_, setCarData] = useAtom(carsAtom);
    const [deleting, setDeleting] = useState(false);

    const deleteCar = async () => {
        setDeleting(true);
        const { error } = await supabase
            .from("cars")
            .delete()
            .eq("customID", car.customID);

        if (error) {
            console.error("Error deleting data:", error);
            errorToast("Error deleting car");
        } else {
            successToast("Successfully deleted car");
        }

        const { data } = await supabase
            .from("cars")
            .select("*")
            .order("created_at", { ascending: false });

        setCarData(data ?? []);
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed top-0 inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-[50000] p-7"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        onClick={(e: any) => {
                            e.stopPropagation();
                        }}
                        className="w-[400px] h-[auto] p-8 pb-10 bg-white block z-[600]"
                    >
                        <div className="content">
                            <div>
                                <h3 className="font-roboto-condensed font-medium text-xl opacity-80">
                                    Are you sure you want to delete?
                                </h3>
                            </div>
                            <div className="pt-5 grid grid-cols-2 gap-5">
                                <button
                                    className="h-[45px] spin font-medium text-sm bg-red-700 text-white"
                                    onClick={deleteCar}
                                >
                                    {deleting ? <ImSpinner8 /> : "Yes"}
                                </button>
                                <button
                                    className="h-[45px] font-medium text-sm bg-black text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ConfirmDeleteModal;
