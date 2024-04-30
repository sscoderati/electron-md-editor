import { ComponentProps } from "react";
import { AddNoteButton, DeleteNoteButton } from "./Button";

export const NoteButtonsRow = ({ ...props }: ComponentProps<"div">) => {
  return (
    <div {...props}>
      <AddNoteButton />
      <DeleteNoteButton />
    </div>
  );
};
