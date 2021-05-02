import { Box, Theme, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useStyles, colors } from "../utils/styles"

import TimelineItem from "./TimelineItem"

const customStyles = makeStyles((theme: Theme) => ({
  content: {
    border: `1px solid ${colors.amber}`,
    padding: "20px 18px",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  },
  patientDetailsBox: {
    padding: "24px 60px",
    borderRadius: "100px",
    backgroundColor: colors.amber,
    textAlign: "center",

    [theme.breakpoints.down("xs")]: {
      padding: "16px 48px",
    },
  },
}))

const PatientDetails = (): JSX.Element => {
  const classes = useStyles()
  const customClasses = customStyles()

  return (
    <div className={customClasses.patientDetailsBox}>
      <Typography variant='h2'>ผู้ป่วยชาย อายุ 23 ปี</Typography>
      <Typography className={classes.mt1} variant='h6'>
        <strong>อาชีพ Frontend Developer</strong>
      </Typography>
    </div>
  )
}

const TimelineList = (): JSX.Element => {
  const classes = useStyles()
  const customClasses = customStyles()

  return (
    <Box className={customClasses.content}>
      <div className={classes.spacer}></div>

      <Typography className={classes.textAmber} variant='h1'>
        <strong>Timeline</strong>
      </Typography>
      <div className={classes.spacer}></div>
      <PatientDetails />
      <div className={classes.spacer}></div>
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
    </Box>
  )
}

export default TimelineList
