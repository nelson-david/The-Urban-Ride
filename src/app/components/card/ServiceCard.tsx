import { ServiceProps } from "@/app/types";

const ServiceCard = ({ title, icon, description }: ServiceProps) => {
    return (
        <div className="flex-1 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px]">
            <i className="flex justify-center">{icon}</i>
            <h3 className="text-center font-inter font-semibold tracking-tight text-lg mt-5">
                {title}
            </h3>
            <p className="text-center font-inter font-normal tracking-tight mt-4 text-sm pl-4 pr-4">
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;
