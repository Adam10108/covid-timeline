import React from "react"
import { CssBaseline, ThemeProvider } from "@material-ui/core"

import CoivdTimeline from "./containers/CovidTimeline"
import theme from "./utils/theme"
import "./assets/prompt-font/prompt-font.css"

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CoivdTimeline />
      </ThemeProvider>
    </React.Fragment>
  )
}
