import { NoteMocks } from "@/mocks/note";
import { NotePreviewItem } from "./NotePreviewItem";

export const NotePreviewList = () => {
  return (
    <ul>
      {NoteMocks.map((note, index) => (
        <NotePreviewItem
          key={index}
          title={note.title}
          lastModified={note.lastModified}
        />
      ))}
    </ul>
  );
};
