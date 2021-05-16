import { TextField, Grid, Button, Card, CardContent, Typography, Snackbar, SnackbarContent } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Message } from '@material-ui/icons';
import React from 'react';
//import React, { Component } from 'react'
export default class Loginpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            Message: "",
            snackbarmessage: '',
            snackbaropen: false,
            login: false
        }
    }



    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }



    handleClick = () => {
        fetch("https://reqres.in/api/api/login", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }).then(res => res.json)
            .then(resJson => {
                if (resJson.token) {
                    this.setState({
                        Message: "Correct ",
                        snackbarmessage: "Logged in Succesfully",
                        login: true,
                        snackbaropen:true
                    })
                }


                else {
                    this.setState({
                        Message: "Wrong password",
                        snackbarmessage: "Logged IN failed",
                        login: false,
                        snackbaropen:true
                    })
                }
            })
    }


    render() {
        return (
            <Grid container justify="center">
                <Card style={{ width: 590, paddingLeft: 30 }}>
                    <CardContent>
                        <Card style={{ width: 500, paddingLeft: 30 }}>
                            <CardContent>
                                <Grid item container xs={12}>
                                    <Grid item container xs={12}>
                                        <Typography variant="h3">
                                            LOGIN PAGE
                    </Typography>
                                    </Grid>
                                    <TextField label='email' onChange={this.handleEmail} />
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card style={{ width: 500, paddingLeft: 30 }}>
                            <CardContent>
                                <Grid item>
                                    <TextField label='password' onChange={this.handlePassword} />
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card style={{ width: 500, paddingLeft: 30 }}>
                            <CardContent>
                                <Grid item>
                                    <Button onClick={this.handleClick}
                                        varient="contained"
                                        color="secondary"
                                        fullWidth
                                        style={{ marginTop: 20 }}
                                        disabled={(this.state.password === "" || this.state.email === "")}
                                    >
                                        LOG IN
                 </Button>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Grid item>
                            {this.state.Message}
                        </Grid>
                    </CardContent>
                </Card>
                <Snackbar
                    open={this.state.snackbaropen}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                >
                    {this.state.snackbarmessage === "Login Failed" ? (
                        <Alert onClose={this.handleClose} severity="error">
                            {this.state.snackbarmessage}
                        </Alert>
                    ) : (
                            <Alert onClose={this.handleClose} severity="success">
                                {this.state.snackbarmessage}
                            </Alert>
                        )}
                </Snackbar>
                {/* <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="LOGGED IN"
        key={transition ? transition.name : ''}
      /> */}
            </Grid>
        )
    }
}