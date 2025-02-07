"use client";
import { CarProps } from "@/app/types";
import Image from "next/image";
import { BsPencil, BsTrashFill } from "react-icons/bs";
import ConfirmDeleteModal from "../modal/ConfirmDeleteModal";
import { useState } from "react";
import EditCarModal from "../modal/EditCarModal";

const AdminCarCard = ({ car }: { car: CarProps }) => {
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);

    return (
        <>
            <div className="sm:p-2 md:p-5" data-aos="zoom-in">
                <div className="sm:h-[200px] md:h-[250px] lg:h-[200px] xl:h-[250px] overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer">
                    <Image
                        src={car.image}
                        alt={car.carName}
                        width={300}
                        height={250}
                        className="w-[100%] h-[100%] object-cover object-center"
                    />
                </div>

                <div className="pt-4 pl-2 pr-2">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="font-roboto-condensed font-bold tracking-tight uppercase text-xl">
                                {car.carName}
                            </h3>
                            <span className="text-right text-gray-600 font-roboto-condensed tracking-tight font-medium text-base opacity-75">
                                {car.type}
                            </span>
                        </div>
                        <div>
                            <h4 className="text-right text-accentColor font-semibold font-roboto-condensed tracking-tight text-lg">
                                {car.costPerDay}
                            </h4>
                            <span className="text-right text-gray-600 font-roboto-condensed tracking-tight font-medium text-base opacity-75">
                                per day
                            </span>
                        </div>
                    </div>

                    <div>
                        <ul className="flex flex-row justify-between pt-3">
                            <li className="text-gray-500 font-roboto-condensed tracking-tight font-medium text-sm">
                                Range ({car.specs.range})
                            </li>
                            <li className="text-gray-500 font-roboto-condensed tracking-tight font-medium text-sm">
                                HP ({car.specs.horsepower})
                            </li>
                            <li className="text-gray-500 font-roboto-condensed tracking-tight font-medium text-sm">
                                Seats ({car.specs.seats})
                            </li>
                        </ul>
                    </div>

                    <div className="pt-7 flex flex-row gap-10">
                        <button
                            onClick={() => setIsDeleteOpen(true)}
                            className="h-[40px] w-[40px] border bg-[#ff0000] border-[#ff0000] flex flex-row items-center justify-center rounded-full"
                        >
                            <BsTrashFill size={15} color="#ffffff" />
                        </button>
                        <button
                            onClick={() => setIsEditOpen(true)}
                            className="h-[40px] w-[40px] border bg-black border-black flex flex-row items-center justify-center rounded-full"
                        >
                            <BsPencil size={15} color="#ffffff" />
                        </button>
                    </div>
                </div>
            </div>
            <ConfirmDeleteModal
                isOpen={isDeleteOpen}
                setIsOpen={setIsDeleteOpen}
                car={car}
            />
            <EditCarModal
                isOpen={isEditOpen}
                setIsOpen={setIsEditOpen}
                car={car}
            />
        </>
    );
};

export default AdminCarCard;
