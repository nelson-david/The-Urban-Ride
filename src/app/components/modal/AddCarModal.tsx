"use client";
import { AnimatePresence, motion } from "framer-motion";
import { SetStateAction, useAtom } from "jotai";
import { Dispatch, useState } from "react";
import { MdCancel } from "react-icons/md";
import { ImSpinner8 } from "react-icons/im";
import CustomInput from "../form/CustomInput";
import { errorToast, successToast } from "@/app/const";
import { supabase } from "@/app/helpers/utils/supabaseClient";
import { carsAtom } from "@/app/helpers/store/car";

interface ModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddCarModal = ({ isOpen, setIsOpen }: ModalProps) => {
    const [_, setCarData] = useAtom(carsAtom);
    const [inputData, setInputData] = useState<{
        customID: string;
        carName: string;
        type: string;
        specs: {
            seats: number;
            range: number;
            horsepower: number;
        };
        costPerDay: number;
        image: string;
    }>({
        customID: "",
        carName: "",
        type: "",
        specs: { seats: 0, range: 0, horsepower: 0 },
        costPerDay: 0,
        image: "",
    });
    const [processing, setProcessing] = useState(false);
    const [uploading, setUploading] = useState(false);

    const upload = async (e: any) => {
        e.preventDefault();
        if (inputData.image === "") {
            errorToast("Image not selected");
            return;
        }
        setProcessing(true);

        setInputData({
            ...inputData,
            customID: Date.now().toString().slice(9, 13),
        });
        const { error } = await supabase.from("cars").insert([inputData]);

        if (error) {
            errorToast("Error adding car");
            throw error;
        }

        const { data } = await supabase
            .from("cars")
            .select("*")
            .order("created_at", { ascending: false });

        setCarData(data ?? []);

        setProcessing(false);
        successToast("Car added successfully");
        setIsOpen(false);
    };

    const handleImageUpload = async (file: any) => {
        const imageFile = file;
        if (!imageFile) {
            console.log("IM FILE: ", imageFile);
            console.log("MISSED");
            return;
        }

        setUploading(true);
        const filePath = `images/${imageFile.name}`;

        // Upload the file
        const { data, error } = await supabase.storage
            .from("images")
            .upload(filePath, imageFile);

        if (error) {
            console.error("Error uploading image:", error);
            setUploading(false);
            return;
        }

        // Get the public URL
        const { data: urlData } = supabase.storage
            .from("images")
            .getPublicUrl(data.path);

        setInputData({ ...inputData, image: urlData.publicUrl });
        successToast("Image uploaded successfully");
        setUploading(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-[50000] p-7"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        onClick={(e: any) => {
                            e.stopPropagation();
                        }}
                        className="w-[550px] h-[auto] p-5 pb-10 bg-white block z-[600]"
                    >
                        <div className="flex flex-row justify-between align-middle pt-1 pb-2 mb-8">
                            <h3 className="text-[1.5vw] font-inter tracking-tight font-semibold opacity-75 text-black">
                                Add a New Car
                            </h3>
                            <span
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer"
                            >
                                <MdCancel size={25} />
                            </span>
                        </div>
                        <div className="content">
                            <form onSubmit={upload}>
                                <div className="flex flex-col gap-5">
                                    <div className="inputDiv">
                                        <CustomInput
                                            placeholder="Car Name"
                                            value={inputData.carName}
                                            onChange={(e) =>
                                                setInputData({
                                                    ...inputData,
                                                    carName: e,
                                                })
                                            }
                                            useLabel
                                            label="Car Name"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <CustomInput
                                            placeholder="Car Type"
                                            value={inputData.type}
                                            onChange={(e) =>
                                                setInputData({
                                                    ...inputData,
                                                    type: e,
                                                })
                                            }
                                            useLabel
                                            label="Car Type"
                                        />

                                        <CustomInput
                                            placeholder="Cost Per day"
                                            value={inputData.costPerDay}
                                            onChange={(e) =>
                                                setInputData({
                                                    ...inputData,
                                                    costPerDay: e,
                                                })
                                            }
                                            useLabel
                                            label="Cost/day"
                                        />
                                    </div>

                                    <div className="grid grid-cols-3 gap-3">
                                        <CustomInput
                                            placeholder="Range"
                                            value={inputData.specs.range}
                                            onChange={(e) =>
                                                setInputData({
                                                    ...inputData,
                                                    specs: {
                                                        ...inputData.specs,
                                                        range: e,
                                                    },
                                                })
                                            }
                                            useLabel
                                            label="Range"
                                        />

                                        <CustomInput
                                            placeholder="Horsepower"
                                            value={inputData.specs.horsepower}
                                            onChange={(e) =>
                                                setInputData({
                                                    ...inputData,
                                                    specs: {
                                                        ...inputData.specs,
                                                        horsepower: e,
                                                    },
                                                })
                                            }
                                            useLabel
                                            label="Horsepower"
                                        />

                                        <CustomInput
                                            placeholder="Seats"
                                            value={inputData.specs.seats}
                                            onChange={(e) =>
                                                setInputData({
                                                    ...inputData,
                                                    specs: {
                                                        ...inputData.specs,
                                                        seats: e,
                                                    },
                                                })
                                            }
                                            useLabel
                                            label="Seats"
                                        />
                                    </div>

                                    <div className="flex flex-row gap-3">
                                        <input
                                            type="file"
                                            onChange={(e: any) =>
                                                handleImageUpload(
                                                    e.target.files[0]
                                                )
                                            }
                                            accept="image/*"
                                            className="mt-5 mb-5 font-inter text-sm font-medium text-black tracking-tight border border-[#1b212e11] h-[50px] w-full p-[11px]"
                                        />
                                        <button className="spin">
                                            {uploading ? <ImSpinner8 /> : ""}
                                        </button>
                                    </div>
                                </div>
                                <div className="p-1 mt-7">
                                    <button
                                        type="submit"
                                        className="w-full h-[50px] bg-accentColor text-white spin flex flex-row justify-center items-center"
                                    >
                                        {processing ? (
                                            <ImSpinner8 />
                                        ) : (
                                            "Upload Car"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AddCarModal;
