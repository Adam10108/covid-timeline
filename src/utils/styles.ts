import { TextField, Theme, InputLabel, Paper } from "@material-ui/core"
import { makeStyles, withStyles } from "@material-ui/core/styles"

export const colors = {
  midnightBlue: "#012d5e",
  amber: "#ffc107",
  heathe: "#bbc7d4",
  chambray: "#34577e",
  forestGreen: "#27a740",
  astronaut: "#234973",
}

export const useStyles = makeStyles((theme: Theme) => ({
  mt1: {
    marginTop: theme.spacing(1),
  },
  mt2: {
    marginTop: theme.spacing(2),
  },
  spacerXs: {
    height: theme.spacing(2),
  },
  spacer: {
    height: theme.spacing(3),
  },
  spacerMd: {
    height: theme.spacing(4),
  },
  textAmber: {
    color: colors.amber,
  },
  textForestGreen: {
    color: colors.forestGreen,
  },
}))

export const PaperStyled = withStyles((theme: Theme) => ({
  root: {
    borderRadius: 4,
    padding: "20px 18px",
    backgroundColor: colors.astronaut,
  },
}))(Paper)

export const LabelStyled = withStyles((theme: Theme) => ({
  root: {
    color: colors.heathe,
    fontSize: "14px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
}))(InputLabel)

export const TextFieldStyled = withStyles({
  root: {
    width: "100%",

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#FFFFFF",
      },
    },
  },
})(TextField)
