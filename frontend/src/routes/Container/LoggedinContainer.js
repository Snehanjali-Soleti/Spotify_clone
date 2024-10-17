import React, { useContext, useState, useRef, useLayoutEffect,  } from 'react';
import  LoginNavbar  from '../../components/loginNavbar';
import  LoginSidebar  from '../../components/LoginSidebar';
import  PlaySong  from '../../components/PlaySong';
import SongContext from '../../contexts/SongContext';
import AddToPlaylistModal from '../../modals/AddToPlaylistModal';
import CreatePlaylist from '../../modals/CreatePlaylistModal';
import { Howl } from 'howler';


 const LoggedinContainer = ({children, currentActiveScreen}) => {

  const {currentSong, soundPlayed, setSoundPlayed, setIsPaused} = useContext(SongContext);

  const [addToPlaylistOpen, setAddToPlaylistOpen] = useState(false);
  const [createplaylistopen, setCreatePlaylistOpen] = useState(false);

  const firstUpdate = useRef(true);

      useLayoutEffect(()=>{
              {/*if it is first render then changes through changing firstupdate to false and returns then it wont effect on first time rendering */}
              if(firstUpdate.current){
                      firstUpdate.current=false;
                      return;
              }
              if(!currentSong){
                      return;
                    }
              changeSong(currentSong.track);
      }, [currentSong && currentSong.track])

      
        const changeSong = (songsrc) => {
            if (soundPlayed) {
                soundPlayed.stop();
            }
            let sound = new Howl({
                src: [songsrc],
                html5: true,
            });
            setSoundPlayed(sound);
            sound.play();
            setIsPaused(false);
        };

  return (<>
    <div  className='h-screen w-full flex  bg-black overflow-hidden'>
    { addToPlaylistOpen ? ( 
         <AddToPlaylistModal closeModal={() => setAddToPlaylistOpen(false)} /> ) : <></>
      }
    {createplaylistopen && (
        <CreatePlaylist   setCreatePlaylistOpen={ setCreatePlaylistOpen}/>
      )}
      <>
         {/* left pannel */}
        <div className='h-full w-[23%]'>
            < LoginSidebar currentActiveScreen={currentActiveScreen} setcreateplaylistopen={setCreatePlaylistOpen}/>
        </div>
        {/* right pannel */}
        <div className='h-screen w-[76.3%] overflow-x-hidden mt-2 rounded-lg'>       
            <LoginNavbar currentActiveScreen={currentActiveScreen} />
            {children}
        </div>
        {currentSong && <PlaySong openModal= {()=> setAddToPlaylistOpen(true)} />}
        </>
    </div>
    </>
  )
}

export default LoggedinContainer;
