import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function convertToPlainNumber(phoneNumber) {
  return parseInt(phoneNumber.replace(/^\+\d{1,3}/, ""), 10);
}
