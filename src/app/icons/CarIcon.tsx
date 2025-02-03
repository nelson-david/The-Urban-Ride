import { IconProps } from "@/app/types";

const CarIcon = ({ color, size }: IconProps) => {
    return (
        <svg
            width={size ? size.width : "18"}
            height={size ? size.height : "18"}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.197 5.46A.824.824 0 0 0 16.5 5h-9a.824.824 0 0 0-.697.46l-1.988 4.638L5.285 9H3v1.5a.501.501 0 0 0 .5.5 2.572 2.572 0 0 1 .367-.388A2.532 2.532 0 0 0 3 12.522V19.5a.501.501 0 0 0 .5.5h2a.501.501 0 0 0 .5-.5v-1.831A46.229 46.229 0 0 0 12 18a46.244 46.244 0 0 0 6.001-.331L18 19.5a.501.501 0 0 0 .5.5h2a.501.501 0 0 0 .5-.5v-6.978a2.534 2.534 0 0 0-.87-1.909 2.523 2.523 0 0 1 .359.387h.011a.501.501 0 0 0 .5-.5V9h-2.286zM7.66 6h8.68l1.715 4H5.945zM5 19H4v-1.79a1.983 1.983 0 0 0 .613.235c.118.024.254.048.387.071zm15 0h-1v-1.484c.133-.023.269-.047.387-.07A1.989 1.989 0 0 0 20 17.21zm-.525-7.632A1.53 1.53 0 0 1 20 12.522v2.946a1.015 1.015 0 0 1-.808.997A43.178 43.178 0 0 1 12 17a43.255 43.255 0 0 1-7.192-.535A1.015 1.015 0 0 1 4 15.468v-2.946a1.532 1.532 0 0 1 .524-1.156 1.49 1.49 0 0 1 .568-.307L5.296 11h13.406l.205.06a1.493 1.493 0 0 1 .568.308zM17 13h2v1a1 1 0 0 1-1 1h-2zM7 13l1 2H6a1 1 0 0 1-1-1v-1zm2 1h6v1H9z"
                fill={color ? color : "#000000"}
                stroke="none"
            />
            <path fill="none" d="M0 0h24v24H0z" />
        </svg>
    );
};

export default CarIcon;
