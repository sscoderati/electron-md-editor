import { ContentLayout, RootLayout, SideBarLayout } from "./components";

function App() {
  return (
    <RootLayout>
      <SideBarLayout className={"p-2 border-red-500 border-4"}>SideBar</SideBarLayout>
      <ContentLayout className={"p-2 border-blue-500 border-4"}>Content</ContentLayout>
    </RootLayout>
  );
}

export default App;
