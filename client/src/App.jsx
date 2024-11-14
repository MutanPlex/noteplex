import favicon from "/favicon.ico";
import "./App.css";

function App() {

  return (
    <>
      <header>
        <div className="left-container">
          <div className="logo-container">
            <a href="/">
              <img src={favicon} className="logo" alt="NotePlex Logo" />
            </a>
            <p>NotePlex</p>
          </div>
          <div className="search-container">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input type="text" className="search" placeholder="Search for notes" />
          </div>
        </div>

        <div className="log-reg-container">
          <button>Login</button>
          <button>Register</button>
        </div>
      </header>
    </>
  );
}

export default App;
