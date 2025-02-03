import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import "aos/dist/aos.css";
import "./globals.css";

export const metadata: Metadata = {
    title: "The Urban Ride",
    description: "The Urban Ride by Ogwu-Nelson David",
};

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const robotoCondensed = Roboto_Condensed({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${robotoCondensed.className} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
