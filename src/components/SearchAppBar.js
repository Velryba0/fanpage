import React, { useState } from 'react';
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
    right: '0px',
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
    const [value, setValue] = useState(null);
    const classes = useStyles();

    console.log(value)

    const data = useSelector(state => state.episodes.results)
    console.log(data)

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
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <Autocomplete
            value={value}
            onChange={(event, newValue) => {
                if (newValue && newValue.inputValue) {
                setValue({
                    title: newValue.inputValue,
                });

                return;
                }

                setValue(newValue);
            }}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);

                if (params.inputValue !== '') {
                filtered.push({
                    inputValue: params.inputValue,
                    title: `Add "${params.inputValue}"`,
                });
                }

                return filtered;
            }}
            id="autocomplete"
            options={data ? data : []}
            getOptionLabel={option => {
                // e.g value selected with enter, right from the input
                if (typeof option === 'string') {
                    console.log(option)
                return option;
                }
                if (option.inputValue) {
                    console.log(option.inputValue)
                return option.inputValue;
                }
                return option.name;
            }}
            renderOption={option => option.name}
            style={{ width: 300 }}
            freeSolo
            renderInput={params => (
                <TextField {...params} label="Busca por episodio o personaje" variant="outlined" />
            )}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}