import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton'; 
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { green, purple } from '@material-ui/core/colors';
import '../materialui/buttonstyle.css';
const theme = createMuiTheme({
    palette: {
      primary: purple,
    },
  });
export default class ButtonTry extends React.Component {
   
    
      
      
      render() {
        return (
   
   <div >
   
       <div style={{
       marginTop:50,
       alignItems:'center',
       justifyContent:'center',
       paddingLeft:100}}>
      <Button variant="contained" color="primary" classes='buttoncall' style={{
          marginRight:200
          
      }}>
        css
        </Button>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary"
        style={{
            marginRight:200
            
        }} >
          Theme Provide
        </Button>
      </ThemeProvider>
      <Button variant="contained" color="primary" >
        Bootstrap
      </Button>
    </div>
    <div>
    <IconButton aria-label="delete" size="small">
      <ArrowDownwardIcon fontSize="inherit" />
    </IconButton>
    <IconButton aria-label="delete" >
      <DeleteIcon fontSize="small" />
    </IconButton>
    <IconButton aria-label="delete">
      <DeleteIcon />
    </IconButton>
    <IconButton aria-label="delete" >
      <DeleteIcon fontSize="large" />
    </IconButton>
  </div>
</div>
  )
}

}