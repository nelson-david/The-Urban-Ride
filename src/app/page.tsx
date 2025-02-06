import PageLayout from "@/app/layouts/PageLayout";
import HeroSection from "@/app/components/section/HeroSection";
import ServiceSection from "@/app/components/section/ServiceSection";
import OfferSection from "@/app/components/section/OfferSection";
import CarSection from "@/app/components/section/CarSection";
import TestimonialSection from "@/app/components/section/TestimonialSection";
import { supabase } from "@/app/helpers/utils/supabaseClient";

const { data, error } = await supabase
    .from("cars")
    .select("*")
    .order("created_at", { ascending: false });

if (error) {
    console.error("Error fetching data:", error);
}

const Home = () => {
    return (
        <PageLayout>
            <HeroSection />
            <ServiceSection />
            <OfferSection />
            <CarSection cars={data ?? []} />
            <TestimonialSection />
        </PageLayout>
    );
};

export default Home;
