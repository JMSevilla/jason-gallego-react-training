import React from 'react'
import {Helper} from './helper'
import {Home} from '../pages'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

const DynamicRouting = ({component: Component, ...rest}) => {
    return (
        <>
            <Route 
                {...rest}
                render={(props) => (
                    <Component {...props} />
                )}
            />
        </>
    )
}

export default () => (
    <BrowserRouter>
        <Switch>
            <DynamicRouting 
            exact path={Helper.Home.path}
            component={Home}
            />
        </Switch>
    </BrowserRouter>
)