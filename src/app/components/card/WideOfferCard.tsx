import Image from "next/image";
import WideOfferImage from "@/assets/images/wide-offer-image.webp";
import { OfferProps } from "@/app/types";

const WideOfferCard = ({ title, caption }: OfferProps) => {
    return (
        <div className="flex-1 relative rounded-3xl overflow-hidden cursor-pointer bg-accentColor">
            <Image
                src={WideOfferImage}
                alt="WideOfferImage"
                className="w-full h-[350px] sm:h-[400px] md:h-[490px] lg:h-[550px] xl:h-[610px] object-center object-cover rounded-2xl"
                data-aos="zoom-in"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,0,0,0)_26.21%,rgb(0,0,0)_79.8%,rgb(0,0,0)_100%)] p-8 sm:p-10 flex flex-col">
                <div className="mt-auto">
                    <h3 className="text-white uppercase font-roboto-condensed font-black tracking-tight leading-tight text-[5.6vw] sm:text-[4.7vw] md:text-[4.3vw] lg:text-[2.6vw]">
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

export default WideOfferCard;
//fortunegodfrey.fg@gmail.com
