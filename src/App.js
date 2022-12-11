import SEO from './components/SEO';
import Navbar from './components/Navbar';
import ScrollToTop from 'react-scroll-to-top';
import Header from './sections/Header/Header';
import Welcome from './sections/Welcome/Welcome';
import WhoWeAre from './sections/About/WhoWeAre';
import Quotes from './sections/Quotes/Quotes';
import About from './sections/About/About';
import Secretariat from './sections/Secretariat/NewSecretariat';
import Apply from './sections/Apply/Apply';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <>
      <SEO />
      <ScrollToTop smooth />
      <Navbar />
      <>
        <Header />
        <Welcome />
        <WhoWeAre />
        <Quotes />
        <About />
        <Secretariat />
        <Apply />
        <Contact />
        <Footer />
      </>
    </>
  );
}

export default App;
