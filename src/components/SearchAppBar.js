import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

import { requestSearchCharactersData } from '../redux/ducks/character/searchCharacter';
import { requestSearchEpisodesData } from '../redux/ducks/episodes/searchEpisode';

const filter = createFilterOptions();

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
      '&::placeholder': {
          color: 'white'
      }
    },
  },
}));

export default function SearchAppBar() {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const [searchActive, setSearchActive] = useState(false)

    console.log(value)

    const resultSearch = useSelector(state => state)

    console.log(resultSearch)

    const dispatch = useDispatch();

    const searchChar = (e) => {
      // fetchSearchCharacter(value);
      console.log(value)
      if(value === '') {
        document.location.reload();
      } else {
        setSearchActive(true)
        dispatch(requestSearchCharactersData(value, 1));
        dispatch(requestSearchEpisodesData(value));
      }
    }

    const searchInput = (e) => {
      setValue(e.target.value)
    }


  return (
    <div className={classes.root} >
      <AppBar position="static" theme={classes.root} style={{background: 'linear-gradient(45deg, #28788a 30%, #FF8E53 90%)'}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Rick y Morty
          </Typography>
          <div className={classes.search}>
            <IconButton type='submit' onClick={searchChar}>
              <SearchIcon/>
            </IconButton>
            <InputBase
              placeholder="Buscar..."
              onChange={searchInput}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}