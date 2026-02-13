import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="portfolio">
      {/* Animated Background */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      {/* Cursor Glow */}
      <div
        className="cursor-glow"
        style={{
          left: mousePosition.x + 'px',
          top: mousePosition.y + 'px'
        }}
      ></div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="glitch-wrapper">
            <div className="glitch" data-text="MUHAMMAD IRFAN">MUHAMMAD IRFAN</div>
          </div>
          <div className="role">
            <span className="role-bracket">{'<'}</span>
            <span className="role-text">Front-End Developer</span>
            <span className="role-bracket">{'/>'}</span>
          </div>
          <p className="bio">Informatika Student • Gaming • Music • Code</p>
        </div>

        <div className="scroll-hint">
          <div className="mouse"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-number">01.</span>
            <h2 className="section-title">About</h2>
            <div className="section-line"></div>
          </div>

          <div className="about-content">
            <p className="about-text">
              Passionate about creating digital experiences that blend aesthetics with functionality.
              Turning ideas into interactive realities through clean code and creative design.
            </p>

            <div className="interests-grid">
              <div className="interest-item">
                <div className="interest-icon">🎮</div>
                <span>Gaming</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon">🎵</div>
                <span>Music</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon">💻</div>
                <span>Coding</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon">🎨</div>
                <span>Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <span className="section-number">02.</span>
            <h2 className="section-title">Skills</h2>
            <div className="section-line"></div>
          </div>

          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-name">React</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '35%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">JavaScript</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '69%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">CSS/Tailwind</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">Java</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '88%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <span className="section-number">03.</span>
            <h2 className="section-title">Projects</h2>
            <div className="section-line"></div>
          </div>

          <div className="projects-grid">
            <a href="https://github.com/irfunzz/tetrisGame" className="project-card" target="_blank" rel="noopener noreferrer">
              <div className="project-number">001</div>
              <h3 className="project-title">Tetris Game</h3>
              <p className="project-desc">Classic Tetris game built with Java.</p>
              <div className="project-tech">Java</div>
              <div className="project-link-arrow">→</div>
            </a>

            <a href="https://github.com/irfunzz/RumahSakit" className="project-card" target="_blank" rel="noopener noreferrer">
              <div className="project-number">002</div>
              <h3 className="project-title">Rumah Sakit Web</h3>
              <p className="project-desc">Hospital management web application.</p>
              <div className="project-tech">Java • CSS</div>
              <div className="project-link-arrow">→</div>
            </a>

            <a href="https://github.com/irfunzz/GameJavaPBO" className="project-card" target="_blank" rel="noopener noreferrer">
              <div className="project-number">003</div>
              <h3 className="project-title">Game Sejarah</h3>
              <p className="project-desc">Educational history game.</p>
              <div className="project-tech">HTML • Java</div>
              <div className="project-link-arrow">→</div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <span className="section-number">04.</span>
            <h2 className="section-title">Connect</h2>
            <div className="section-line"></div>
          </div>

          <div className="social-grid">
            <a href="https://www.instagram.com/mhmmdirf_an" className="social-link" target="_blank" rel="noopener noreferrer">
              <span className="social-platform">Instagram</span>
              <span className="social-handle">@mhmmdirf_an</span>
            </a>
            <a href="https://github.com/irfunzz" className="social-link" target="_blank" rel="noopener noreferrer">
              <span className="social-platform">GitHub</span>
              <span className="social-handle">@irfunzz</span>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-irfan-5842a0325/" className="social-link" target="_blank" rel="noopener noreferrer">
              <span className="social-platform">LinkedIn</span>
              <span className="social-handle">Muhammad Irfan</span>
            </a>
            <a href="mailto:muhammadirfan21221@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <span className="social-platform">Email</span>
              <span className="social-handle">muhammadirfan21221@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Designed & Built by Muhammad Irfan</p>
        <p className="footer-year">2026</p>
      </footer>
    </div>
  )
}

export default App
