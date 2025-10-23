
import './App.css'

function App() {

  return (
    <>

    <div className="header">
      <div className="logo">
        <img width={'80'} src="../src/assets/logo.png" alt="MovieApp Logo" />
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


      
    </>
  )
}

export default App
