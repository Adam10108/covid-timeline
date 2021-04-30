import { createMuiTheme } from "@material-ui/core"
import createBreakpoints from "@material-ui/core/styles/createBreakpoints"
import { colors } from "../utils/styles"

const breakpoints = createBreakpoints({})
const fonts: any = ["Prompt", "sans-serif"]

export default createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: colors.amber,
    },
    background: {
      default: colors.midnightBlue,
    },
  },
  typography: {
    fontFamily: fonts,
    h1: {
      fontSize: "40px",
      [breakpoints.down("xs")]: {
        fontSize: "26px",
      },
    },
    h2: {
      fontSize: "28px",
      [breakpoints.down("xs")]: {
        fontSize: "26px",
      },
    },
    h3: {
      fontSize: "24px",
      [breakpoints.down("xs")]: {
        fontSize: "20px",
      },
    },
    h4: {
      fontSize: "20px",
      [breakpoints.down("xs")]: {
        fontSize: "16px",
      },
    },
    h5: {
      fontSize: "16px",
      [breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    h6: {
      fontSize: "14px",
      [breakpoints.down("xs")]: {
        fontSize: "12px",
      },
    },
  },
})
