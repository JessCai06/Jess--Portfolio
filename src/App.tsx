import headshotIMG from "./assets/Headshot.png";
import logoIMG from "./assets/logo.png";
import "./App.css";

export function Header() {
  return (
    <>
      <style>
        {`
          .Header {
            background-color:white;
            display:flex;
            align-items:center;
            position: sticky;
            top: 0;
            overflow: hidden;
            z-index:1000;
            filter: drop-shadow(0px 3em 1.5em white);
          }
              .Logo {
                background-color: white;
                padding:2em 2em 0 5em;
              }
              .Navbar {
                background-color:white;
                display: flex;
                margin-left:auto;
                margin-right:5em;
              }
                  .Navbar h2{
                    font-family: Inter;
                    font-weight:400;
                  }    
                  .Navbar h2:hover {
                    color:black;
                    font-weight:bolder;
                    font-style:italic;
                  }
                  .Navbar a{
                    margin:20px;
                    color:black;
                  }
        `}
      </style>

      <section className="Header">
        <div className="Logo">
          <a href="App.tsx" target="_blank">
            <img src={logoIMG} className="logo" alt="site logo" />
          </a>
        </div>

        <div className="Navbar">
          <a href="#" target="_parent">
            <h2>About</h2>
          </a>
          <a href="#Portfolio">
            <h2>Portfolio</h2>
          </a>
          <a href="#Stack" target="_parent">
            <h2>Stack</h2>
          </a>
        </div>
      </section>
    </>
  );
}

export function About() {
  return (
    <>
      <style>
        {`
              .About{
                margin: auto;
                margin-top:4em;
                justify-content: center;
                display:flex;
                align-items:center;
              }
              .Headshot img{
                height:14rem;
                padding:1rem;
                margin-right:3rem;
                will-change: filter;
                transition: filter 300ms;
              }
              .NameMajor{
                line-height: 1;  
                font-family: Segoe UI;
                letter-spacing:.2rem;
              }
                .NameMajor h1{
                  font-weight: 500;
                  font-size: 5rem;
                  margin: 0;  
                  margin-bottom:1rem;
                }
                .NameMajor p{
                  font-size:1.95rem;
                  margin: 0;  
                }
              .IntroPara{
                font-family: Segoe UI;
                font-size:1.6rem;
                text-align:left;
                margin:auto;
                padding:.5rem;
                letter-spacing:.1rem;
                width:60rem;
              }
            `}
      </style>

      <section className="About">
        <div className="Headshot">
          <img src={headshotIMG} alt="jessica's headshot" />
        </div>
        <div className="NameMajor">
          <h1>JESSICA CAI</h1>
          <p>Information Systems 28' @ CMU</p>
        </div>
      </section>

      <section className="IntroPara">
        <p>
          I am a sophomore at Carnegie Mellon University, in Pittsburgh, PA. I
          major in Information Systems, and plan to receive a minor in
          Artificial Intelligence and Human Computer Interactions
        </p>
      </section>
    </>
  );
}

export function Card() {
  return (
    <>
      <style>
        {`
          .Card{
            background-color:purple;
          }
        `}
      </style>
      {/* <article className="Card">
        <img className='card-img' scr>
      </article> */}
    </>
  );
}

export function Portfolio() {
  return (
    <>
      <style>
        {`
          .Portfolio{
            margin-top:20rem;
            display:flex;
          }
          .Filter{
            font-family: Segoe UI;
            flex:1;
          }
          .CardDeck{
            flex:2;
          }
        `}
      </style>
      <section className="Portfolio">
        <section className="Filter">
          <h2>Filter</h2>
        </section>
        <section className="CardDeck">
          <Card />
          <Card />
        </section>
      </section>
    </>
  );
}

export function Stack() {
  return (
    <>
      <style>
        {`
          
        `}
      </style>
      <section id="Stack"></section>
    </>
  );
}

export function BodyContent() {
  return (
    <>
      <About />
      <Footer />
      <Portfolio />
    </>
  );
}

export function Footer() {
  return (
    <>
      <style>{`
        .Footer {
          padding: 2em;
          background-color: white;
        }
        .iconAnimations{
          height:7rem;
        }
        .iconAnimations:hover{
          height:9rem;
        }

      `}</style>

      <section className="Footer">
        <a href="https://www.linkedin.com/in/jessica-cai006/" target="_blank">
          <img
            src="src\assets\LinkedIn.gif"
            className="iconAnimations"
            alt="linked in animation"
          />
        </a>
        <a href="mailto:jesscai006@gmail.com" target="_blank">
          <img
            src="src\assets\Email.gif"
            className="iconAnimations"
            alt="email animation"
          />
        </a>
        <a href="https://github.com/JessCai06" target="_blank">
          <img
            src="src\assets\Github.gif"
            className="iconAnimations"
            alt="github animation"
          />
        </a>
      </section>
    </>
  );
}

export default function App() {
  return (
    <>
      {/* header: logo + nav bar*/}
      <Header />
      {/* body: content varies by page */}
      <BodyContent />
      {/* footer: currently empty */}
    </>
  );
}
