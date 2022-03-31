import React from 'react';
import Fold from './components/Fold/Fold.jsx';
import About from './components/About/About.jsx';
import Projects from './components/Portfolio/Projects.jsx';
import ContactForm from './components/Contact/ContactForm.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <React.Fragment>
      <Fold />
      <About />
      <Projects />
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
};

export default App;
