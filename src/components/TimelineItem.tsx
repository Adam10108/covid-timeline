import { Box, Theme, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useStyles, colors } from "../utils/styles"

const customStyles = makeStyles((theme: Theme) => ({
  content: {
    position: "relative",
    marginLeft: 24,
    paddingBottom: 48,
    paddingLeft: 24,
    borderLeft: `4px dashed ${colors.chambray}`,
  },
  circle: {
    height: 20,
    width: 20,
    backgroundColor: colors.amber,
    borderRadius: "50%",
    border: `3px solid ${colors.chambray}`,
    position: "absolute",
    top: 16,
    left: -12,
  },
  arrowLeft: {
    width: 0,
    height: 0,
    borderTop: "10px solid transparent",
    borderBottom: "10px solid transparent",
    borderRight: `18px solid ${colors.chambray}`,
    position: "absolute",
    top: 16,
    left: -10,
  },
  list: {
    borderRadius: 8,
    backgroundColor: colors.chambray,
    padding: 13,
  },
  listItem: {
    display: "flex",
    marginBottom: theme.spacing(2),
  },
}))

const ListItem = (): JSX.Element => {
  const classes = useStyles()
  const customClasses = customStyles()

  return (
    <div className={customClasses.listItem}>
      <div>
        <Typography
          className={`${classes.textAmber} ${classes.mr3}`}
          variant='h4'
        >
          16:00
          <span className={classes.textHeathe}>
            {" "}
            สวนมนต์ข้ามคืนตั้งแต่เย็น สวนมนต์ข้ามคืนตั้งแต่เย็น
            สวนมนต์ข้ามคืนตั้งแต่เย็น สวนมนต์ข้ามคืนตั้งแต่เย็น
          </span>
        </Typography>
      </div>
      <Typography className={classes.textWhite}>
        <strong>x</strong>
      </Typography>
    </div>
  )
}

const TimelineItem = (): JSX.Element => {
  const classes = useStyles()
  const customClasses = customStyles()

  return (
    <Box width='100%' display='flex'>
      <Typography
        className={`${classes.textAmber} ${classes.mt2}`}
        variant='h5'
      >
        01/03/2021
      </Typography>

      <Box className={customClasses.content} width='100%' height='100%'>
        <div className={customClasses.circle}></div>

        <Box position='relative'>
          <div className={customClasses.arrowLeft}></div>
          <div className={customClasses.list}>
            <ListItem />
          </div>
        </Box>
      </Box>
    </Box>
  )
}

export default TimelineItem
