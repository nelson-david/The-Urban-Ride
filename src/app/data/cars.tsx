import { CarProps } from "@/app/types";

const cars: CarProps[] = [
    {
        id: 1,
        name: "Tesla Roadster",
        type: "Electric Sedan",
        specs: {
            range: 396,
            horsepower: 1020,
            seats: 5,
        },
        costPerDay: 120, // in dollars
        image: "https://s1.cdn.autoevolution.com/images/gallery/TESLA-MOTORS-Roadster-6176_3.jpg", //"https://www.auto-data.net/images/f49/Tesla-Model-3-facelift-2023_1.jpg",
        availability: true,
    },
    {
        id: 2,
        name: "BMW X5 M",
        type: "Luxury SUV",
        specs: {
            range: 396,
            horsepower: 1020,
            seats: 5,
        },
        costPerDay: 150,
        image: "https://s1.cdn.autoevolution.com/images/gallery/bmw-x5-m-competition-2023-7430_43.jpg", //"https://www.auto-data.net/images/f80/BMW-X5-G05-LCI-facelift-2023_3.jpg",
        availability: true,
    },
    {
        id: 3,
        name: "Mercedes-Benz EQS",
        type: "Luxury Sedan",
        specs: {
            range: 396,
            horsepower: 1020,
            seats: 5,
        },
        costPerDay: 140,
        image: "https://s1.cdn.autoevolution.com/images/gallery/mercedes-benz-eqs-2024-7721_44.jpg",
        availability: false,
    },
    {
        id: 4,
        name: "Ford Mustang GT",
        type: "Sports Coupe",
        specs: {
            range: 396,
            horsepower: 1020,
            seats: 2,
        },
        costPerDay: 130,
        image: "https://s1.cdn.autoevolution.com/images/gallery/ford-mustang-gt-convertible-2023-7401_13.jpg",
        availability: true,
    },
    {
        id: 5,
        name: "Toyota Corolla",
        type: "Economy Sedan",
        specs: {
            range: 396,
            horsepower: 1020,
            seats: 5,
        },
        costPerDay: 60,
        image: "https://s1.cdn.autoevolution.com/images/gallery/toyota-corolla-eu-2022-7422_8.jpg",
        availability: true,
    },
    {
        id: 6,
        name: "Chevrolet Tahoe",
        type: "Full-Size SUV",
        specs: {
            range: 396,
            horsepower: 1020,
            seats: 7,
        },
        costPerDay: 170,
        image: "https://s1.cdn.autoevolution.com/images/gallery/chevrolet-tahoe-2023-7634_1.jpg",
        availability: false,
    },
];

export { cars };
