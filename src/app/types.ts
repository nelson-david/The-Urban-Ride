import { StaticImageData } from "next/image";
import { JSX } from "react";

export type ServiceProps = {
    title: string;
    icon: JSX.Element;
    description: string;
};

export type IconProps = {
    color?: string;
    size?: {
        width: string;
        height: string;
    };
};

export type OfferProps = {
    title: string;
    caption: string;
    image: StaticImageData;
    wide?: boolean;
};

export type CarProps = {
    customID: string;
    carName: string;
    type: string;
    specs: {
        range: number;
        horsepower: number;
        seats: number;
    };
    costPerDay: number;
    image: string;
    availability: boolean;
};

export type TestimonialProps = {
    name: string;
    testimony: string;
};

export type CustomInputProps = {
    value: string | number;
    onChange: (data: any) => void;
    placeholder: string;
    type?: string;
    useLabel?: boolean;
    label?: string;
};
