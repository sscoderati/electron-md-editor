import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "Asia/Seoul"
});

export const formatDate = (date: Date) => dateFormatter.format(date);

export function cn(...classNames: ClassValue[]) {
  return twMerge(clsx(...classNames));
}
