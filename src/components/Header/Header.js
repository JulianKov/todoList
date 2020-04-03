import React from 'react';
import {Fab, Grid} from '@material-ui/core';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import {Link} from 'react-router-dom';

const Header = () => {
	return(
    <Grid container justify="center" bgcolor="background.primary">
      <Grid item>
        <Fab color="primary"  aria-label="add">
          <Link to="/">
            <PlaylistAddCheckIcon style={{ color: "white" }}/>
          </Link>
        </Fab>
      </Grid>
    </Grid>
	)
}

export default Header;