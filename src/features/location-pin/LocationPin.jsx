import { Grid } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import Notepad from "../location-pin/Notepad";

export default function LocationPin(props) {
  return (
    <Grid container alignContent="center" justifyContent="center">
      <Grid item>
        <LocationOnIcon style={{ color: "#DB4437", fontSize: 48 }} />
      </Grid>
      <Grid item>
        <Notepad lat={props.lat} lng={props.lng} />
      </Grid>
    </Grid>
  );
}
