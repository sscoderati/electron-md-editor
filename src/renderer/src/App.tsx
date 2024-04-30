import {
  ContentLayout,
  RootLayout,
  SideBarLayout,
  DraggableTopBar,
  NotePreviewList
} from "@/components";
import { NoteButtonsRow } from "@/components";

function App() {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <SideBarLayout className={"p-2 flex flex-col gap-y-2"}>
          <NoteButtonsRow className={"flex justify-between"} />
          <NotePreviewList />
        </SideBarLayout>
        <ContentLayout className={"border-l bg-zinc-900/50 border-l-white/20"}></ContentLayout>
      </RootLayout>
    </>
  );
}

export default App;
