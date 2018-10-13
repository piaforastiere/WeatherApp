import React, { Component } from 'react';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import { Grid, Row, Col} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';



const cities = [
  "Buenos Aires,ar",
  "Mexico,mx",
  "Washington,us",
  "Bogota,col",
  "Madrid,es",
  "Ciudad de México,mx",
  "Lima,pe"

];


class App extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <LocationListContainer cities={cities}/>
          </Col>
          <Col xs={12} md={6}>
            <Paper>
              <div className="details">
                   <ForecastExtendedContainer />
              </div>
            </Paper>
          </Col>
        </Row>


      </Grid>
    );
  }
}


//como el resultado retorna App, solo exporto el resultado de connect

export default App;
