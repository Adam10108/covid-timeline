import { Grid, MenuItem, Select, Typography } from "@material-ui/core"
import {
  useStyles,
  TextFieldStyled,
  PaperStyled,
  LabelStyled,
} from "../../utils/styles"

const FormPatientInformation = (): JSX.Element => {
  const classes = useStyles()

  return (
    <PaperStyled>
      <Typography className={classes.textForestGreen} variant='h4'>
        ข้อมูลผู้ป่วย
      </Typography>

      <div className={classes.spacerXs}></div>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <LabelStyled>เพศ</LabelStyled>
          <Select
            className={classes.mt1}
            fullWidth
            variant='outlined'
            margin='dense'
          >
            <MenuItem value='man'>ชาย</MenuItem>
            <MenuItem value='girl'>หญิง</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LabelStyled>อายุ</LabelStyled>
          <TextFieldStyled
            fullWidth
            name='age'
            variant='outlined'
            margin='dense'
            type='number'
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>
      </Grid>

      <Grid container className={classes.mt2}>
        <Grid item xs={12}>
          <LabelStyled>อาชีพ</LabelStyled>
          <TextFieldStyled
            fullWidth
            name='occupation'
            variant='outlined'
            margin='dense'
          />
        </Grid>
      </Grid>
    </PaperStyled>
  )
}

export default FormPatientInformation
