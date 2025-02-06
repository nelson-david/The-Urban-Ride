import Link from "next/link";
import Marquee from "react-marquee-slider";

const Footer = () => {
    return (
        <footer style={{ marginTop: "-30px" }}>
            {/* <div>
                <Marquee
                    velocity={250}
                    direction="rtl"
                    scatterRandomly={false}
                    resetAfterTries={1}
                    onInit={() => {}}
                    onFinish={() => {}}
                >
                    <h2 className="text-center font-inter font-bold uppercase tracking-tighter text-[12vw] transition-all duration-400 ease-in-out opacity-60 hover:opacity-95 ml-12 mr-12">
                        The
                    </h2>
                    <h2 className="text-center font-inter font-bold uppercase tracking-tighter text-[12vw] transition-all duration-400 ease-in-out opacity-60 hover:opacity-95 ml-12 mr-12">
                        Urban
                    </h2>
                    <h2 className="text-center font-inter font-bold uppercase tracking-tighter text-[12vw] transition-all duration-400 ease-in-out opacity-60 hover:opacity-95 ml-12 mr-12">
                        Ride
                    </h2>
                    <h2 className="text-center font-inter font-bold uppercase tracking-tighter text-[12vw] transition-all duration-400 ease-in-out opacity-60 hover:opacity-95 ml-12 mr-12">
                        -
                    </h2>
                </Marquee>
            </div> */}

            <div>
                <div className="grid sm:grid-cols-3 pb-5 pt-5 p-10 md:p-20 lg:p-24">
                    <ul className="flex flex-col gap-14 p-0 mt-7 mb-7">
                        <li>
                            <Link
                                href="/"
                                className="text-[3.3vw] sm:text-[1.9vw] md:text-[2.1vw] lg:text-[1.6vw]"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="text-[3.3vw] sm:text-[1.9vw] md:text-[2.1vw] lg:text-[1.6vw]"
                            >
                                Car Rental Deals
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="text-[3.3vw] sm:text-[1.9vw] md:text-[2.1vw] lg:text-[1.6vw]"
                            >
                                Status Program
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-14 p-0 mt-7 mb-7">
                        <li>
                            <Link
                                href="/"
                                className="text-[3.3vw] sm:text-[1.9vw] md:text-[2.1vw] lg:text-[1.6vw]"
                            >
                                Business Travel
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="text-[3.3vw] sm:text-[1.9vw] md:text-[2.1vw] lg:text-[1.6vw]"
                            >
                                Register Your Business
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="text-[3.3vw] sm:text-[1.9vw] md:text-[2.1vw] lg:text-[1.6vw]"
                            >
                                Travel Agencies
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-14 p-0 mt-7 mb-7">
                        <li>
                            <Link
                                href="/"
                                className="text-[3.3vw] sm:text-[1.9vw] md:text-[2.1vw] lg:text-[1.6vw]"
                            >
                                TUR News
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="text-[3.3vw] sm:text-[1.9vw] md:text-[2.1vw] lg:text-[1.6vw]"
                            >
                                Investor Relations
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="text-[3.3vw] sm:text-[1.9vw] md:text-[2.1vw] lg:text-[1.6vw]"
                            >
                                Careers
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-accentColor p-4">
                <h3 className="text-white text-center font-inter font-medium tracking-tight lg:text-[1.4vw] xl:text-[0.9vw]">
                    Built with ❤️ by{" "}
                    <Link
                        href="https://www.theurban.studio"
                        target="_blank"
                        className="font-semibold lg:text-[1.6vw] xl:text-[1vw]"
                    >
                        The Urban Studios
                    </Link>
                </h3>
            </div>
        </footer>
    );
};

export default Footer;
