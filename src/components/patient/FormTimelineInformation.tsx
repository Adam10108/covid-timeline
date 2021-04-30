import { Button, Theme, TextareaAutosize, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import {
  useStyles,
  TextFieldStyled,
  PaperStyled,
  LabelStyled,
} from "../../utils/styles"

const customStyles = makeStyles((theme: Theme) => ({
  textArea: {
    width: "100%",
    marginTop: 4,
  },
  button: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}))

const FormTimelineInformation = (): JSX.Element => {
  const classes = useStyles()
  const customClasses = customStyles()

  return (
    <PaperStyled>
      <Typography className={classes.textForestGreen} variant='h4'>
        ข้อมูลไทม์ไลน์
      </Typography>

      <div className={classes.spacerXs}></div>

      <LabelStyled>วันเวลา</LabelStyled>
      <TextFieldStyled
        fullWidth
        type='datetime-local'
        name='date'
        variant='outlined'
        margin='dense'
      />

      <LabelStyled className={classes.mt2}>รายละเอียด</LabelStyled>
      <TextareaAutosize className={customClasses.textArea} rowsMin={5} />

      <div className={classes.spacerXs}></div>
      <Button
        className={customClasses.button}
        variant='contained'
        color='primary'
      >
        + เพิ่มข้อมล
      </Button>
    </PaperStyled>
  )
}

export default FormTimelineInformation
