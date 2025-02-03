import { OfferProps } from "@/app/types";
import OfferImage1 from "@/assets/images/wide-offer-image.webp";
import OfferImage2 from "@/assets/images/offer-2.webp";
import OfferImage3 from "@/assets/images/offer-1.webp";

const offers: OfferProps[] = [
    {
        title: "Luxury and Looks for less",
        caption: "Book now and save up to 15% on luxury vehicles.",
        image: OfferImage1,
        wide: true,
    },
    {
        title: "Rental cars for business customers",
        caption: "Take advantage of benefits and preferential rates.",
        image: OfferImage2,
    },
    {
        title: "Your airport transfers with tur ride",
        caption: "Choor TUR, Choose Comfort.",
        image: OfferImage3,
    },
];

export { offers };
