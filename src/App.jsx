import './App.css'
import { Download } from './sections/Download';
import { Faq } from './sections/Faq';
import { Features } from './sections/Features';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header'
import { MainPage } from './sections/MainPage';
import { Pricing } from './sections/Pricing';
import { Testimonials } from './sections/Testimonials';

function App() {

  return (
    <main className="overflow-hidden">
      <Header/>
      <MainPage/>
      <Features/>
      <Pricing/>
      <Faq/>
      <Testimonials/>
      <Download/>
      <Footer/>
    </main>
  );
};

export default App;