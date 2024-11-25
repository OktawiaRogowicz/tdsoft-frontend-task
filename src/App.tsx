import React from "react";

import { AppDataContextProvider } from "./contexts/AppData/AppData.context.tsx";
import CharactersCarouselSection from "./sections/CharactersCarouselSection";

import { AppContainer } from "./App.styled";
import { Theme, ThemeProvider } from "@emotion/react";

const theme: Theme = {
  colors: {
    green: "rgba(135, 199, 64, 0.15)",
    red: "rgba(235, 87, 87, 0.15)",
    blue: "rgba(178, 208, 235, 1)",
    black: "rgba(51, 51, 51, 1)",
    darkGray: "rgba(79, 79, 79, 1)",
    gray: "rgba(130, 130, 130, 1)",
    lightGray: "rgba(224, 224, 224, 1)",
    offWhite: "rgba(242, 242, 242, 1)",
    white: "rgba(255, 255, 255, 1)",
    shadow: "rgba(0, 0, 0, 0.15)",
  },
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppDataContextProvider>
        <AppContainer>
          <CharactersCarouselSection />
        </AppContainer>
      </AppDataContextProvider>
    </ThemeProvider>
  );
};

export default App;
