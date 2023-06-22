import './App.scss';
import Home from './views/Home'
import Counter from './views/Counter'
import Tasks from './views/Tasks'
import StarwarsCharacters from './views/StarwarsCharacters'
import Register from './views/Register'
import StarwarsProfile from './views/StarwarsProfile'
import {Routes, Route} from 'react-router-dom'
import Navbar from './layout/Navbar'


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home username="Matias"/> }/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
          <Route path="/starwars" element={<StarwarsCharacters/>}/>
          <Route path="/starwars/:id" element={<StarwarsProfile/>}/>
          <Route path="/register" element={<Register/>}/>
          {/* <Home username="Matias"/> 
          <Counter/>
          <Tasks/>
          <StarwarsCharacters/>
          <Register/> */}
        </Routes>    
    </>
  );
}

export default App;
