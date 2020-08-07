import React from "react";
import { AppBar, Toolbar, InputBase, Grid  } from "@material-ui/core";
import { SearchIcon } from "@material-ui/icons/Search";
import { fade, makeStyles } from '@material-ui/core/styles';
import MovieCard from "./Card";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        alignContent: "center",  
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

  }));

const Homepage = () => {
    const classes = useStyles();
    return(
        <>
            <AppBar position="static">
                <Toolbar>
                <div className={classes.search}>
                    
                    {/* <SearchIcon /> */}
                    
                    <InputBase
                        placeholder="Search…"
                    />
                </div>
                </Toolbar>
            </AppBar>
            <Grid container spacing={4} justify="spacing-around" alignItems="center" style={{paddingTop: "20px"}}>
                <Grid item sm={3}>
                    <MovieCard />                
                </Grid>
                
            </Grid>
        </>      
    )   
}

export default Homepage;