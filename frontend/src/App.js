import React from 'react'
import Header from './components/Header'
 import Footer from './components/Footer'
 import {Container} from 'react-bootstrap'
 import HomeScreen from './components/screen/HomeScreen'

 const App=()=> {
  return (
    <div>
      <Header />
      <main className="py-3"> {/* py-3 is padding */} 
        <Container >
          <h1>Welcome to pro shop</h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
