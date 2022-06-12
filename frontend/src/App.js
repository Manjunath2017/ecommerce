import React from 'react'
import {BrowserRouter as Routes, Route} from 'react-router-dom'

import Header from './components/Header'
 import Footer from './components/Footer'
 import {Container} from 'react-bootstrap'
 import HomeScreen from './components/screen/HomeScreen'
 import ProductScreen from './components/screen/ProductScreen'

 //varient='flush' removes outer border and rounded corner 

 const App=()=> {
  return (
    <Routes>
      <Header />
      <main className="py-3"> {/* py-3 is padding */} 
        <Container >
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />

        </Container>
      </main>
      <Footer />
    </Routes>
  );
}

export default App;
