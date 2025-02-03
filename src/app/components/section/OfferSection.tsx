import WideOfferCard from "@/app/components/card/WideOfferCard";
import { offers } from "@/app/data/offers";
import SmallOfferCard from "@/app/components/card/SmallOfferCard";
import { OfferProps } from "@/app/types";

const OfferSection = () => {
    return (
        <section className="pl-[10px] pr-[10px] xl:pl-[115px] xl:pr-[115px] lg:pl-[55px] lg:pr-[55px] md:pl-[25px] md:pr-[25px]">
            <div className="flex mb-4">
                <WideOfferCard
                    title={offers[0].title}
                    caption={offers[0].caption}
                    image={offers[0].image}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {offers.slice(1).map((offer: OfferProps, index: number) => (
                    <SmallOfferCard {...offer} key={index} />
                ))}
            </div>
        </section>
    );
};

export default OfferSection;
