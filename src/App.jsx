
import './App.css'
import Logo from './assets/menu.svg';

function App() {

  return (
    <>
      <div className="header">
        <div className="logo">
          <h2 style={{ color: 'white', backgroundColor: 'rgb(251 138 34)', padding: '8px 12px', borderTopRightRadius: '25px', borderBottomLeftRadius: '25px' }}>martha</h2>
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Movies</a>
          <a href="#" className="nav-link">Series</a>
          <a href="#" className="nav-link">New Releases</a>
          <a href="#" className="nav-link">Popular</a>
        </div>
        <div className="login-signup">
          <a className='signIn' href="#">Sign In</a>

          <a className='signUp' href="#">Sign Up</a>
        </div>

        <div className="navMenu">
          <div style={{ color: '#ff7a00', fontSize: '24px' }}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
      <div className="MovieApp">

        <div className="moveLeft">
          <div className="tagline">
            <h1>Discover <span className='pink'>trending </span>and classic <span className='pink'>movies</span></h1>
          </div>
          <div className='btnMore'>
            <a className="watchMore">Watch More</a>
          </div>

        </div>
        <div className="right-image">
          <img
            src="../src/assets/image.png"
            alt="Marvel"
            className="movie-image"
          />
        </div>


      </div>

      <footer>
        <p>©2025 Martha. All rights reserved.</p>
      </footer>

    </>
  )
}

export default App
