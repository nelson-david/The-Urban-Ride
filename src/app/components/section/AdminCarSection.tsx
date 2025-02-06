"use client";
import { CarProps } from "@/app/types";
import AdminCarCard from "@/app/components/card/AdminCarCard";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { carsAtom } from "@/app/helpers/store/car";

const AdminCarSection = ({ cars }: { cars: CarProps[] }) => {
    const [carData, setCarData] = useAtom(carsAtom);

    useEffect(() => {
        if (carData.length === 0) {
            setCarData(cars);
        }
    }, [cars, setCarData]);

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 sm:gap-4 md:gap-6 pt-16">
            {carData.map((car: CarProps) => {
                return <AdminCarCard car={car} key={car.customID} />;
            })}
        </section>
    );
};

export default AdminCarSection;
