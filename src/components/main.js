import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './landingpage' 


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/" component={""} />
        <Route path="/" component={""} />
        <Route path="/" component={""} />
        <Route path="/" component={""} />
    </Switch>
)


export default Main;