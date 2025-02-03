import { OfferProps } from "@/app/types";
import Image from "next/image";

const SmallOfferCard = ({ title, caption, image }: OfferProps) => {
    return (
        <div className="flex-1 mt-5 relative overflow-hidden rounded-3xl cursor-pointer">
            <Image
                src={image}
                alt="WideOfferImage"
                className="w-full h-[570px] object-center object-cover blur-sm"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,0,0,0)_10.21%,rgb(0,0,0,0.5)_79.8%,rgb(0,0,0)_100%)] p-9 flex flex-col">
                <div className="mt-auto">
                    <h3 className="text-white uppercase font-roboto-condensed font-black text-3xl tracking-tight leading-tight">
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
