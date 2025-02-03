import WideOfferCard from "@/app/components/card/WideOfferCard";
import { offers } from "@/app/data/offers";
import SmallOfferCard from "@/app/components/card/SmallOfferCard";
import { OfferProps } from "@/app/types";

const OfferSection = () => {
    return (
        <section className="pl-[115px] pr-[115px]">
            <div className="flex mb-4">
                <WideOfferCard
                    title={offers[0].title}
                    caption={offers[0].caption}
                    image={offers[0].image}
                />
            </div>

            <div className="flex flex-wrap w-full gap-7">
                {offers.slice(1).map((offer: OfferProps, index: number) => (
                    <SmallOfferCard {...offer} key={index} />
                ))}
            </div>
        </section>
    );
};

export default OfferSection;
