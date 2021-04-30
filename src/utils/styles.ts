import { Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

export const colors = {
  midnightBlue: "#012d5e",
  amber: "#ffc107",
  heathe: "#bbc7d4",
  chambray: "#34577e",
  forestGreen: "#27a740",
  astronaut: "#234973",
}

export const useStyles = makeStyles((theme: Theme) => ({
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
}))
