import React from 'react'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
 import Footer from './components/Footer'
 import {Container} from 'react-bootstrap'
 import HomeScreen from './components/screen/HomeScreen'
 import ProductScreen from './components/screen/ProductScreen'

 //varient='flush' removes outer border and rounded corner 

 const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Switch>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/product/:id' component={ProductScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
