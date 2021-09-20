import React from "react";

import "@material-ui/core/styles/createTheme";

import {
  PaletteColor,
  PaletteColorOptions,
} from "@material-ui/core/styles/createPalette";
import { MediaGenerator } from "styled-media-query";
import * as polished from "polished";

import "@material-ui/core/styles/zIndex";
import "@material-ui/core/styles/createTypography";

declare module "@material-ui/core/styles/createTheme" {
  export interface Theme {
    icons: {
      User: React.ComponentType;
    };
    spacings: {
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };

    media: MediaGenerator<
      {
        xhuge: string;
        huge: string;
        large: string;
        medium: string;
        small: string;
        xsmall: string;
        xxsmall: string;
      },
      this
    >;

    polished: typeof polished;

    gridLayout: {
      container: string;
      gutter: string;
    };

    border: {
      radius: string;
    };
  }
  export interface ThemeOptions {
    icons?: {
      User?: React.ComponentType;
    };
    spacings?: {
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };

    media?: MediaGenerator<
      {
        xhuge: string;
        huge: string;
        large: string;
        medium: string;
        small: string;
        xsmall: string;
      },
      this
    >;

    polished?: typeof polished;

    gridLayout?: {
      container: string;
      gutter: string;
    };

    border?: {
      radius: string;
    };
  }
}

declare module "@material-ui/core/styles/createPalette" {
  export interface Palette {
    mainBg: PaletteColor;
    lightBg: PaletteColor;
    white: PaletteColor;
    black: PaletteColor;
    lightGray: PaletteColor;
    gray: PaletteColor;
    darkGray: PaletteColor;
    red: PaletteColor;
  }

  /*   polished?: {
    darken: (amount: string | number, color: string) => string;
    lighten: (amount: string | number, color: string) => string;
    polished2: Module;
  }; */
  export interface PaletteOptions {
    mainBg?: PaletteColorOptions;
    lightBg?: PaletteColorOptions;
    white?: PaletteColorOptions;
    black?: PaletteColorOptions;
    lightGray?: PaletteColorOptions;
    gray?: PaletteColorOptions;
    darkGray?: PaletteColorOptions;
    red?: PaletteColorOptions;
  }
}

declare module "@material-ui/core/styles/zIndex" {
  export interface ZIndex {
    base: number;
    menu: number;
    overlay: number;
    myModal: number;
    alwaysOnTop: number;
  }
  export interface ZIndexOptions {
    base?: number;
    menu?: number;
    overlay?: number;
    myModal?: number;
    alwaysOnTop?: number;
  }
}

declare module "@material-ui/core/styles/createTypography" {
  export interface Typography {
    fontSizes: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
    };
  }
  export interface TypographyOptions {
    fontSizes?: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
    };
  }
}
