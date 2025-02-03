import { ServiceProps } from "@/app/types";
import LocationIcon from "@/app/icons/LocationIcon";
import CarIcon from "@/app/icons/CarIcon";
import WalletIcon from "@/app/icons/WalletIcon";

const iconSize = {
    width: "37",
    height: "37",
};

const services: ServiceProps[] = [
    {
        title: "Availability",
        icon: <LocationIcon size={iconSize} />,
        description:
            "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis",
    },
    {
        title: "Comfort",
        icon: <CarIcon size={iconSize} />,
        description:
            "Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis",
    },
    {
        title: "Savings",
        icon: <WalletIcon size={iconSize} />,
        description:
            "Pretium convallis id diam sed commodo vestibulum lobortis volutpat",
    },
];

export { services };
