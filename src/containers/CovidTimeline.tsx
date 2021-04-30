import { Box, Container, Theme, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useStyles } from "../utils/styles"

const customStyles = makeStyles((theme: Theme) => ({
  titleBox: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
}))

const CovidTimeline = (): JSX.Element => {
  const classes = useStyles()
  const customClasses = customStyles()

  return (
    <Container>
      <div className={classes.spacerMd}></div>

      <Box className={customClasses.titleBox} width='100%'>
        <Typography className={classes.textAmber} variant='h1'>
          COVID Timeline Generator
        </Typography>
      </Box>
    </Container>
  )
}

export default CovidTimeline
