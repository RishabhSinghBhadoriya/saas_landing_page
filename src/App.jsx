import './App.css'
import { Faq } from './sections/Faq';
import { Features } from './sections/Features';
import { Header } from './sections/Header'
import { MainPage } from './sections/MainPage';
import { Pricing } from './sections/Pricing';

function App() {

  return (
    <main className="overflow-hidden">
      <Header/>
      <MainPage/>
      <Features/>
      <Pricing/>
      <Faq/>
    </main>
  );
};

export default App;