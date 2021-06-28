import './App.scss';
import Navbar from './components/navbar/Navbar.jsx';
import Header from './components/header/Header.jsx';
import About from './components/about/About.jsx';
import Works from './components/works/Works.jsx';
import Footer from './components/footer/Footer.jsx';

export default function App() {
    return (
        <div className='_root'>
            <div className="App mx-auto">
                <Navbar />
                <div className="section text-center sm:text-left">
                    <Header />
                    <About />
                    <Works />
                </div>
                <Footer />
            </div>
        </div>
    );
}
