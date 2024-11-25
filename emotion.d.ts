import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      green: string;
      red: string;
      blue: string;
      black: string;
      darkGray: string;
      gray: string;
      lightGray: string;
      offWhite: string;
      white: string;
      shadow: string;
    };
  }
}
