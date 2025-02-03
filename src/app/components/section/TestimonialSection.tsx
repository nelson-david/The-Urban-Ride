import TestimonialImage from "@/assets/images/testimonial-image.webp";
import Image from "next/image";

const TestimonialSection = () => {
    return (
        <section className="pt-10 pb-10">
            <div className="h-[400px] sm:h-[480px] md:h-[650px] lg:h-[720px] relative">
                <Image
                    src={TestimonialImage}
                    alt="TestimonialImage"
                    className="w-[100%] h-[100%] object-center object-cover"
                />
                <div
                    className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,0,0,0)_26.21%,rgb(0,0,0)_79.8%,rgb(0,0,0)_100%)] flex justify-center"
                    style={{ alignItems: "center" }}
                >
                    <div className="pl-9 pr-9 sm:pl-16 sm:pr-16 md:pl-20 md:pr-20 lg:pl-40 lg:pr-40">
                        <h4 className="text-white font-inter text-[4vw] sm:text-[3.4vw] md:text-[3.5vw] lg:text-[2.7vw] text-center font-medium tracking-tight leading-normal opacity-90">
                            SIXT is the only rental company I've never had an
                            issue with. Seriously… they've turned me into a
                            lifelong client
                        </h4>
                        <h6 className="text-white text-center font-roboto-condensed text-2xl mt-5 font-medium tracking-tight">
                            — P., Los Angeles
                        </h6>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
