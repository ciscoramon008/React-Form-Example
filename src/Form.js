import React from 'react';
import { makeStyles, Paper, Avatar, Typography, Select, MenuItem, FormControl, InputLabel, Input, FormControlLabel, Checkbox, Button } from "@material-ui/core";
import LockedOutlineIcon from '@material-ui/icons/LockOutlined';

const styles = makeStyles(theme => ({
    main: {
        width: 'auto',
        display: 'block',
        margin: theme.spacing(0, 3),
        [theme.breakpoints.up('sm')]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        }
    },
    paper: {
        marginTop: theme.spacing(1) * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2, 3, 3)
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        marginTop: theme.spacing(3),
    }
}));

const Form = () => {
    const classes = styles();

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockedOutlineIcon />
                </Avatar>
                <Typography variant='h5'>
                    Login
                </Typography>
                <Select value='english'>
                    <MenuItem value='english'>English</MenuItem>
                    <MenuItem value='french'>French</MenuItem>
                    <MenuItem value='spanish'>Spanish</MenuItem>
                </Select>
                <form className={classes.form}>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='email'>Email</InputLabel>
                        <Input id='email' name='email' autoFocus></Input>
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='password'>Password</InputLabel>
                        <Input id='password' name='password' autoFocus></Input>
                    </FormControl>
                    <FormControlLabel label='Remember Me' control={<Checkbox color='primary' />} />
                    <Button className={classes.submit} variant='contained' type='submit' fullWidth color='primary'>Submit</Button>
                </form>
            </Paper>
        </main>
    );
}

export default Form;