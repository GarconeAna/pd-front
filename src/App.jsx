import { useEffect, useRef } from 'react';
import './App.css'
import './settings.css'

function App() {
  const pupilRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!pupilRef.current) return;
  
      const eyeContainer = pupilRef.current.parentElement.getBoundingClientRect();
      const pupilSize = pupilRef.current.getBoundingClientRect().width;
  
      const { clientX: mouseX, clientY: mouseY } = event;
  
      const eyeX = eyeContainer.left + eyeContainer.width / 2;
      const eyeY = eyeContainer.top + eyeContainer.height / 2;
  
      const deltaX = mouseX - eyeX;
      const deltaY = mouseY - eyeY;
      let angle = Math.atan2(deltaY, deltaX);
  
      const scaleFactor = 0.1;
      const eyeRadius = eyeContainer.width / 3;
      const limit = (eyeRadius - pupilSize / 2) * scaleFactor;
  
      const pupilX = Math.cos(angle) * limit * -1;
      const pupilY = Math.sin(angle) * limit * -1;
  
      pupilRef.current.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    };
  
    document.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);  
  
  return (
    <>
    <div className='content'>

      <div className='screen_01'>
        <div className='container'>
          <div className='s01-img-characters'></div>
          <div className='s01-img-stairs'></div>
          <div className='s01-eye'>
            <div className='s01-img-eye-01'></div>
            <div className='s01-img-eye-02'></div>
            <div ref={pupilRef} className='s01-img-eye-03 pupil'></div>
          </div>
          <div className='c-title floating'>
            <div className='s01-img-clouds'> </div>
            <div className='s01-img-title'></div>
          </div>
        </div>
      </div>

      <div className='screen_02'>
        {/* <div className='s01-img-deco'></div> */}
        <div className='container'>
          <div className='s02-stairs'></div>
          <div className='s02-characters'></div>
          <div className='s02-title floating'></div>
          <div className='s02-text'></div>
          <div className='s02-ghost floating-2'>
            <div className='s02-ghost-title'></div>
          </div>
        </div>
      </div>

      <div className='screen_03'>
        <div className='deco-clouds'></div>
        <div className='container'>
          <div className='s03-title floating'></div>
          <div className='s03-text'></div>
          <div className='s03-shadow'></div>
          <div className='s02-stairs'></div>
          <div className='s03-games'>
            <div className='s03-games-01 floating-2'></div>
            <div className='s03-games-02 floating-2'></div>
            <div className='s03-games-03 floating-2'></div>
          </div>
          <div className='s03-comic floating-2'></div>
          <div className='s03-attetion floating-2'></div>
        </div>
      </div>

      <div className='screen_04'>
        <div className='container'>
          <div className='s4-cube-background'>
            <div className='s4-characters floating'></div>
          </div>
          <div className='s4-title'></div>
          <div className='s4-stairs floating-2'></div>
          <div className='c-patreon'>
            <div className='s4-patreon-shadow'></div>
            <div className='s4-patreon'></div>
            <div className='s4-patreon-thing'></div>
            <div className='s4-patreon-deco'></div>
            <div className='s4-patreon-title'></div>
          </div>
          <div className='c-kofi'>
            <div className='s4-coffe-shadow'></div>
            <div className='s4-coffe-clouds floating-2'></div>
            <div className='s4-coffe'></div>
            <div className='s4-coffe-deco'></div>
            <div className='s4-coffe-title'></div>
          </div>
        </div>
      </div>
      <p className='website-version'>0.5.0</p>
    </div>

    </>
  )
}

export default App
