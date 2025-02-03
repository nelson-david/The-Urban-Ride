import { cars } from "@/app/data/cars";
import CarCard from "../card/CarCard";
import { CarProps } from "@/app/types";

const CarSection = () => {
    return (
        <section className="p-[115px] pl-[10px] pr-[10px] sm:pl-[12px] sm:pr-[12px] md:pl-[30px] md:pr-[30px] lg:pl-[50px] lg:pr-[50px]">
            <div className="">
                <h1 className="text-center font-roboto-condensed text-[5.7vw] sm:text-[4.5vw] md:text-[4vw] uppercase font-black tracking-tight">
                    Choose the car that suits You
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 sm:gap-4 md:gap-6 pt-16 sm:pt-16 md:pt-20">
                {cars.map((car: CarProps, index: number) => {
                    return <CarCard car={car} key={index} />;
                })}
            </div>
        </section>
    );
};

export default CarSection;
