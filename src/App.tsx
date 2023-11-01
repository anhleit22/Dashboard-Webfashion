import { Route, Routes } from "react-router-dom";

import { publicRoutes } from "./routes";
import { LayoutDefault } from "./components/layout/LayoutDefault";
import { OnlyLayout } from "./components/layout/OnlyLayout";

function App() {
  return (
    <div className="h-[100vh]">
      <Routes>
        {publicRoutes.map((component, index) => {
          let Layout = LayoutDefault;
          const Page = component.component;
          if (component.path !== "/" && component.path !== "/404") {
            Layout = LayoutDefault;
          } else {
            Layout = OnlyLayout;
          }
          return (
            <Route
              key={index}
              path={component.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
