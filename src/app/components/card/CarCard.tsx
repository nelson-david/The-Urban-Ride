import { CarProps } from "@/app/types";
import Image from "next/image";

const CarCard = ({ car }: { car: CarProps }) => {
    return (
        <div className="sm:p-2 md:p-5" data-aos="zoom-in">
            <div className="sm:h-[200px] md:h-[250px] lg:h-[200px] xl:h-[250px] overflow-hidden rounded-3xl sm:rounded-2xl md:rounded-3xl cursor-pointer">
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

                <div className="pt-7">
                    <button className="h-[47px] bg-accentColor w-[100%] text-white rounded-xl cursor-pointer font-inter tracking-tight text-sm font-medium">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

// range: 396,
// horsepower: 1020,
// seats: 5,

export default CarCard;
