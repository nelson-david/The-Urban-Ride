import { services } from "@/app/data/services";
import { ServiceProps } from "@/app/types";
import ServiceCard from "../card/ServiceCard";

const ServiceSection = () => {
    return (
        <section className="flex flex-wrap justify-center gap-9 p-16">
            {services.map((service: ServiceProps, index: number) => {
                return <ServiceCard {...service} key={index} />;
            })}
        </section>
    );
};

export default ServiceSection;
