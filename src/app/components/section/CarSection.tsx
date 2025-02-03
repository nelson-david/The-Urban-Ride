import { cars } from "@/app/data/cars";
import CarCard from "../card/CarCard";
import { CarProps } from "@/app/types";

const CarSection = () => {
    return (
        <section className="p-[115px]">
            <div className="">
                <h1 className="text-center font-roboto-condensed text-6xl uppercase font-black tracking-tight">
                    Choose the car that suits You
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-20">
                {cars.map((car: CarProps, index: number) => {
                    return <CarCard car={car} key={index} />;
                })}
            </div>
        </section>
    );
};

export default CarSection;
