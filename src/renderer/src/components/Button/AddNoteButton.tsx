import { ActionButton } from "@/components";
import { LuFileSignature } from "react-icons/lu";
import { ComponentProps } from "react";

export const AddNoteButton = ({ ...props }: ComponentProps<"button">) => {
  return (
    <ActionButton {...props}>
      <LuFileSignature className={"w-4 h-4 text-zinc-400"} />
    </ActionButton>
  );
};
