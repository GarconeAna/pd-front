import { useEffect, useRef } from "react";
import star from "./assets/screen_01/screen_01_deco.png";

import welcome from "./assets/screen_02/w_01.png";
import characters from "./assets/screen_02/w_02.png";
import text02 from "./assets/screen_02/w_03.png";
import ghost from "./assets/screen_02/w_05.png";

import title03 from "./assets/screen_03/a_01.png";
import text03 from "./assets/screen_03/a_02.png";
import info from "./assets/screen_03/a_09.png";
import buttonGhost from "./assets/screen_03/a_08.png";

import characters04 from "./assets/screen_04/_04_characters_bg.png";
import title04 from "./assets/screen_04/_04_title_line.png";
import patreon from "./assets/screen_04/_04_patreon.png";
import patreonTitle from "./assets/screen_04/_04_patreon_title.png";
import coffe from "./assets/screen_04/_04_coffe.png";
import coffeTitle from "./assets/screen_04/_04_coffe_title.png";
import coffeDeco from "./assets/screen_04/04_coffe_clouds.png";

import "./App.css"
import "./settings.css"

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
    <div className="content">

      <div className="screen_01">
        <div className="s01-img-characters"></div>
        <div className="s01-img-stairs"></div>
        <div className="s01-eye">
          <div className="s01-img-eye-01"></div>
          <div className="s01-img-eye-02"></div>
          <div ref={pupilRef} className="s01-img-eye-03 pupil"></div>
        </div>
        <div className="c-title floating">
          <div className="s01-img-clouds"></div>
          <div className="s01-img-title"></div>
        </div>
      </div>

      <div className="section_sreen2">
        <div className="deco_star"></div>
        <div className="page-padding">
          <div className="container-large">
            <div className="padding-xxlarge" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div>
                <img src={welcome} alt="text welcome" style={{ maxWidth: "100%", height: "auto" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "4fr 1fr", columnGap: "30px" }}>
                <div>
                  <img src={text02} alt="text" style={{ maxWidth: "100%", height: "auto" }} />
                  <img src={characters} alt="characters" style={{ maxWidth: "100%", height: "auto" }} />
                </div>

                <div>
                  <img src={ghost} alt="ghost" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="screen_02">
        <div style={{
          position: "absolute",
          width: "100%"
        }}>
          <img style={{ width: "100%" }} src={star} alt="star" />
        </div>

        <div className="container">
          <div className="s02-stairs"></div>
          <div className="s02-characters"></div>
          <div className="s02-title floating"></div>
          <div className="s02-text"></div>
          <div className="s02-ghost floating-2">
            <div className="s02-ghost-title"></div>
          </div>
        </div>
      </div> */}

      {/* <div className="screen_03">
        <div className="deco-clouds"></div>
        <div className="container">
          <div className="s03-title floating"></div>
          <div className="s03-text"></div>
          <div className="s03-shadow"></div>
          <div className="s02-stairs"></div>
          <div className="s03-games">
            <div className="s03-games-01 floating-2"></div>
            <div className="s03-games-02 floating-2"></div>
            <div className="s03-games-03 floating-2"></div>
          </div>
          <div className="s03-comic floating-2"></div>
          <div className="s03-attetion floating-2"></div>
        </div>
      </div> */}

      {/* <div className="deco_clouds"></div> */}

      <div className="section_sreen3">
        <div className="page-padding">
          <div className="container-large">
            <div className="padding-xxlarge" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div>
                <img src={title03} alt="text welcome" style={{ maxWidth: "100%", height: "auto" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "30px", alignItems: "flex-end" }}>
                <div>
                <div class="games-button">
                  <div class="layer button-base"></div>
                  <div class="layer button-border"></div>
                  <div class="layer ghosts-bg"></div>
                  <div class="layer text"></div>
                  <div class="layer controller"></div>
                </div>
                  <img src={buttonGhost} alt="characters" style={{ maxWidth: "100%", height: "auto" }} />
                </div>

                <div>
                  <img src={text03} alt="ghost" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
              </div>
              
              <div style={{ marginTop: "56px", width: "600px" }}>
                <img src={info} alt="characters" style={{ maxWidth: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="deco_clouds"></div>

      <div className="section_sreen4">
        <div className="page-padding">
          <div className="container-large">
            <div className="padding-xxlarge" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div>
                <img src={title04} alt="text welcome" style={{ maxWidth: "100%", height: "auto" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "4fr 1fr", columnGap: "30px", alignItems: "center" }}>
                <div>
                  <img src={characters04} alt="characters" style={{ maxWidth: "100%", height: "auto", width: "100%" }} />
                </div>

                <div>
                  <div style={{ position: "relative" }}>
                    <div>
                      <img src={patreon} alt="ghost" style={{ maxWidth: "100%", height: "auto" }} />
                    </div>
                    <div 
                      style={{ 
                        position: "absolute",
                        top: "40px",
                        left: "15px",
                        width: "50%"
                      }}
                    >
                      <img src={patreonTitle} alt="ghost" style={{ maxWidth: "100%", height: "auto" }} />
                    </div>
                  </div>

                  <div style={{ position: "relative" }}>
                    <div className="floating"
                      style={{
                        position: "absolute",
                        top: "-10px",
                        left: "0",
                        width: "220px",
                        display: "flex",
                        justifyContent: "center",
                        zIndex: 0,
                      }}
                    >
                      <img
                        src={coffeDeco}
                        alt="cloud"
                        style={{ 
                          width: "100%" 
                        }}
                      />
                    </div>

                    <div style={{ position: "relative", zIndex: 1 }}>
                      <img
                        src={coffe}
                        alt="ghost"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          width: "89%",
                        }}
                      />
                    </div>

                    {/* Título sobreposto */}
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        width: "40%",
                        left: "17px",
                        zIndex: 2,
                      }}
                    >
                      <img
                        src={coffeTitle}
                        alt="ghost"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                  <div>
                    </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="screen_04">
        <div className="container">
          <div className="s4-cube-background">
            <div className="s4-characters floating"></div>
          </div>
          <div className="s4-title"></div>
          <div className="s4-stairs floating-2"></div>
          <div className="c-patreon">
            <div className="s4-patreon-shadow"></div>
            <div className="s4-patreon"></div>
            <div className="s4-patreon-thing"></div>
            <div className="s4-patreon-deco"></div>
            <div className="s4-patreon-title"></div>
          </div>
          <div className="c-kofi">
            <div className="s4-coffe-shadow"></div>
            <div className="s4-coffe-clouds floating-2"></div>
            <div className="s4-coffe"></div>
            <div className="s4-coffe-deco"></div>
            <div className="s4-coffe-title"></div>
          </div>
        </div>
        <p className="website-version">Version 0.5.0</p>
      </div> */}

      <div className="deco_clouds"></div>

      <div className="section_footer">
        <div className="page-padding">
          <div className="container-large">
            <div className="padding-xxlarge" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div>
                <p className="website-version">Version 0.5.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
