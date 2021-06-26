import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Navigation} from './components'
import {Home} from './pages'
import {Login} from './pages'
import {Register} from './pages'
import {Courses} from './pages'






const IndexHomeComponents = () => {
    return (
      <div className="IndexHomeComponents">
          <Router >
   
             <Navigation />        
                <Route exact path='/home/' component={Home} />
                <Route exact path='/home/login' component={Login} />
                <Route exact path='/home/register' component={Register} />
                <Route exact path='/home/courses' component={Courses} />
        
        </Router>

      </div>
    )
}

export default IndexHomeComponents
