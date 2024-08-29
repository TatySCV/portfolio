import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-16 pb-24">
        <Home />
        {/* <About />
        <Projects />
        <Contact /> */}
      </main>
      <Footer />
    </>
  );
};

export default App;