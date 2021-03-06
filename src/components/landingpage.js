import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import '../landingpage.css'
import Luna from '../img/lunasaaliskatse.jpg'

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: "100%", margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={Luna}
                            className="luna-aloitus"
                            alt="Luna"
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default LandingPage;