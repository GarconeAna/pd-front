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
        <div className='s01-img-deco'></div>
        <div className='container'>
          <div className='s02-stairs'></div>
          <div className='s02-characters'></div>
          <div className='s02-title'></div>
          <div className='s02-text'></div>
          <div className='s02-ghost'></div>
        </div>
      </div>

      <div className='screen_03'>
        <div className='container'>
          <div className='s03-title'></div>
          <div className='s03-text'></div>
          <div className='s03-shadow'></div>
          <div className='s03-games'>
            <div className='s03-games-01'></div>
            <div className='s03-games-02'></div>
            <div className='s03-games-03'></div>
            <div className='s03-comic'></div>
          </div>
          <div className='s03-attetion'></div>
        </div>
      </div>

    </div>

    </>
  )
}

export default App
