import { OfferProps } from "@/app/types";
import Image from "next/image";

const SmallOfferCard = ({ title, caption, image }: OfferProps) => {
    return (
        <div className="flex-1 mt-5 relative overflow-hidden rounded-3xl cursor-pointer">
            <Image
                src={image}
                alt="WideOfferImage"
                className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[570px] object-center object-cover blur-sm"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,0,0,0)_10.21%,rgb(0,0,0,0.5)_79.8%,rgb(0,0,0)_100%)] p-7 sm:p-6 md:p-8 flex flex-col">
                <div className="mt-auto">
                    <h3 className="text-white uppercase font-roboto-condensed font-black tracking-tight leading-tight text-[5vw] sm:text-[3vw] md:text-[2.7vw] lg:text-[2vw]">
                        {title}
                    </h3>
                    <p className="text-white font-inter font-semibold tracking-tight text-base mt-2">
                        {caption}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SmallOfferCard;
