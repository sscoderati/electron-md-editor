import { NoteItem } from "@/types/models";
import { ComponentProps } from "react";
import { cn, formatDate } from "../utils";

export type NotePreviewItemProps = NoteItem & {
  isSelected?: boolean;
} & ComponentProps<"li">;

export const NotePreviewItem = ({
  title,
  content,
  lastModified,
  isSelected = false,
  className,
  ...props
}: NotePreviewItemProps) => {
  return (
    <li
      className={cn(
        "px-2.5 py-3 cursor-pointer rounded-md transition-colors duration-75",
        { "bg-zinc-400/75": isSelected },
        { "hover:bg-zinc-500/75": !isSelected },
        className
      )}
      {...props}>
      <h1 className={"text-lg font-semibold"}>{title}</h1>
      <p className={"text-xs font-medium text-zinc-400"}>{formatDate(lastModified)}</p>
    </li>
  );
};
