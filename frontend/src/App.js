
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import LoginComponent from './routes/Login';
import SignUpComponent from './routes/Signup';
import HomeComponent from './routes/Home';
// import { Signup2 } from './routes/Signup2';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import Mymusic from './routes/Mymusic';
import SongContext from './contexts/SongContext';
import  RightUploadsongs  from './components/RightUploadsongs';
import LoginHome from './routes/LoginHome';
import Search from './routes/Search';
import  Library  from './routes/Library';
import SinglePlaylistView from './routes/SinglePlaylistView';


function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [cookie, setCookie] = useCookies(["token"]); 


  return (
    <div className='App font-poppins'>
      <BrowserRouter>
        {cookie.token ? (
          <SongContext.Provider value={{currentSong, setCurrentSong, soundPlayed,setSoundPlayed, setIsPaused, isPaused}}>
          <Routes>
              <Route path="/" element={ <HomeComponent /> } />
              <Route path="/mymusic" element={ <Mymusic /> } />
              <Route path="/search" element={ <Search /> } />
              <Route path='/uploadsong' element={<RightUploadsongs/>} />
              <Route path='/home' element={<LoginHome/>}/>
              <Route path='/playlist/:playlistId' element={<SinglePlaylistView/>} />
              <Route path='/mylibrary' element={<Library/>} />
              <Route path='*' element={<Navigate to='/home' />} />
          </Routes>
          </SongContext.Provider>
        ):
        (
          <Routes>
          <Route path='/signup' element={<SignUpComponent/>}/>
          <Route path='/login' element={<LoginComponent/>}/>
          <Route path='/home' element={<HomeComponent/>}/>
          <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
        )
      }
      </BrowserRouter>
    </div> 
  );
}

const HelloComponent = () =>{
  return <div>this is HelloComponent</div>
}

export default App;
