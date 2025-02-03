import Image from "next/image";
import HeroImage from "@/assets/images/hero-image.webp";

const HeroSection = () => {
    return (
        <section>
            <div className="h-[610px]">
                <Image
                    src={HeroImage}
                    alt="HeroImage"
                    className="h-[100%] object-center object-cover"
                />
            </div>
            <div className="bg-accentColor p-7">
                <h1 className="text-white uppercase font-roboto-condensed font-black text-center text-7xl tracking-normal leading-20">
                    Don't rent a car.
                    <span className="block">Rent THE car.</span>
                </h1>
                <p className="text-center text-white font-inter font-semibold tracking-tight text-base mt-2">
                    Premium car rental at affordable rates. Worldwide.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
