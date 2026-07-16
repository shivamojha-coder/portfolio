import { lazy, Suspense } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";
import AgentWidget from "./components/AgentWidget";
import SplashCursor from "./components/SplashCursor";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
      <AgentWidget />
      <SplashCursor 
        SPLAT_RADIUS={0.25} 
        SPLAT_FORCE={7000} 
        DENSITY_DISSIPATION={2.5} 
        VELOCITY_DISSIPATION={1.5}
      />
    </>
  );
};

export default App;
