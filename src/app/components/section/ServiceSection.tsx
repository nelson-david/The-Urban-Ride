import { services } from "@/app/data/services";
import { ServiceProps } from "@/app/types";
import ServiceCard from "../card/ServiceCard";

const ServiceSection = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 p-16">
            {services.map((service: ServiceProps, index: number) => {
                return <ServiceCard {...service} key={index} />;
            })}
        </section>
    );
};

export default ServiceSection;
