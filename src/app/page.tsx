import PageLayout from "@/app/layouts/PageLayout";
import HeroSection from "@/app/components/section/HeroSection";
import ServiceSection from "@/app/components/section/ServiceSection";
import OfferSection from "@/app/components/section/OfferSection";
import CarSection from "@/app/components/section/CarSection";
import TestimonialSection from "@/app/components/section/TestimonialSection";

const Home = () => {
    return (
        <PageLayout>
            <HeroSection />
            <ServiceSection />
            <OfferSection />
            <CarSection />
            <TestimonialSection />
        </PageLayout>
    );
};

export default Home;
