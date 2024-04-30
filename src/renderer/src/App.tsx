import { ContentLayout, RootLayout, SideBarLayout, DraggableTopBar } from "./components";
import { NoteButtonsRow } from "./components/NoteButtonsRow";

function App() {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <SideBarLayout className={"p-2"}>
          <NoteButtonsRow className={"flex justify-between"} />
        </SideBarLayout>
        <ContentLayout className={"border-l bg-zinc-900/50 border-l-white/20"}>
          Content
        </ContentLayout>
      </RootLayout>
    </>
  );
}

export default App;
