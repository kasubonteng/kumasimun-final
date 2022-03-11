import SEO from './components/SEO';
import Navbar from './components/Navbar';
import ScrollToTop from 'react-scroll-to-top';
import Header from './sections/Header/Header';
import About from './sections/About/About';
import Quotes from './sections/Quotes/Quotes';
import Secretariat from './sections/Secretariat/Secretariat';
import Apply from './sections/Apply/Apply';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <>
      <SEO />
      <ScrollToTop smooth />
      <Navbar />
      <Header />
      <About />
      <Quotes />
      <Secretariat />
      <Apply />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
