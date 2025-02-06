import { CarProps } from "@/app/types";
import { atomWithStorage } from "jotai/utils";

export const carsAtom = atomWithStorage<CarProps[]>("cars", []);
