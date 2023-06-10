import './App.css';
import Services from './services.js';
import WhyChoose from './WhyChoose';
import Testimonials from './Testimonials';
import HeadCarousel from './HeadCarousel';
import HeaderIntro from './HeaderIntro';
import Form from './Form';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (

    <div className="App flex flex-col overflow-hidden items-center w-full ">
      <div className='fixed z-20 w-[100vw]'>    <Header /></div>
      <HeadCarousel />
      <div className='w-[85%] '>
        <HeaderIntro />
        <Services />
        <WhyChoose />
      </div>
      <div className=' mt-12'>
        <Testimonials />
      </div>
      <Form />
      <Footer />
    </div>


  );
}

export default App;
