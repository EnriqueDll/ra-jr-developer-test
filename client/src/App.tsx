import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Navbar } from './components';
import { Home, Management } from './pages';

function App() {

    return (
        <div className="App">
            <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='*' element={<>NOT FOUND</>} />
                    <Route path='/management' element={<Management />} />
                </Routes>
            <Footer />
        </div>
    );


    /* return <>

    <Navbar />
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/home' element = {<Home />} />
            <Route path = '*' element = {<>NOT FOUND</>}/>
            <Route path = '/management' element = {<Management />} />
        </Routes>
    <Footer />
    
    </>; */
}

export default App

/* return <>

    <Navbar />
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/home' element = {<Home />} />
            <Route path = '*' element = {<>NOT FOUND</>}/>
            <Route path = '/management' element = {<Management />} />
        </Routes>
    <Footer />
    
    </>; */

/* return (

        <div>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='*' element={<>NOT FOUND</>} />
                    <Route path='/management' element={<Management />} />
                </Routes>
            <Footer />
        </div>
    ); */
