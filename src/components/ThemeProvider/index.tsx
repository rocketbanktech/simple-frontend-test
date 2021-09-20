import { ReactNode } from "react";
import { ThemeProvider as StyledComponentProvider } from "styled-components";
import { CssBaseline } from "@material-ui/core";
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";

import light from "../../styles/themes/light.theme";

type Props = {
  children: ReactNode;
};

function ThemeProvider({ children }: Props) {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={light}>
        <StyledComponentProvider theme={light}>
          <CssBaseline />
          {children}
        </StyledComponentProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default ThemeProvider;
