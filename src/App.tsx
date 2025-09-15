import headshotIMG from "./assets/Headshot.png";
import logoIMG from "./assets/logo.png";
import "./App.css";


import img1 from "src/photography/DSC00527.JPG";
import img2 from "src/photography/DSC01192.JPG";

export function Navigator() {
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
            margin-left:10em;
            margin-right:10em;
          }
              .Logo {
                background-color: white;
                padding:2em 2em 0 0;
              }
              .Navbar {
                background-color:white;
                display: flex;
                margin-left:auto;
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
          
            .info-card-box {
              border-radius: 25px;
              background-color: #303030;
              width: 55rem;
              height: 35rem;
              display:flex;
              margin: 0 auto; /* top/bottom 0, left/right auto */
            }

            .info-card-box-img-thumbnail{
              flex:5;
              margin-left:3em;
            }
            .info-card-box-summary{
              flex:3;  
              margin:2rem;
              flex-direction: column;  /* stack text top → bottom */
              align-items: left;     /* horizontal centering */
              justify-content: center; /* vertical centering */
              text-align: left;
            }
              .info-card-box-img-thumbnail {
                width: 100%;              /* takes full width of container */
                display: flex;            /* flexbox centers the child */
                justify-content: center;  /* center horizontally */
                align-items: center;      /* center vertically */
                overflow: hidden;         /* crop anything outside */
              }
            .info-card-box-img-thumbnail :hover {
              transform: scale(1.1); 
              transition:smooth;
              drop-shadow:10px
            }

              .info-card-box-img-thumbnail img {
                height: 100%;             /* scale to fit vertically */
                width: auto;              /* maintain aspect ratio */
                object-fit: cover;        /* crop overflow */
              }
              .info-card-box-summary .heading{
                color:white;
                font-family:Monospace;
                letter-spacing:.4em;
                font-size:3rem;
                text-align: left;
                margin:0;
              }
              .info-card-box-summary .subheading{
                color:#A8A8A8;
                font-family:Inter;
                letter-spacing:.2em;
                font-size:1.3rem;
                text-align: left;
                margin:0;
              }
              .info-card-tag-button button {
                  background-color: #646cff;
                  border: none;
                  color: black;
                  padding: 8px 16px;
                  text-align: center;
                  font-size: 16px;
                  margin: 10px 12px 0 0;
                  border-radius: 20px;
                  cursor: pointer; /* show pointer on hover */
                  transition: background-color 0.3s ease, transform 0.2s ease;
                }

                .info-card-tag-button button:hover {
                  background-color: #4b52cc; /* darker shade on hover */
                  color: white;              /* flip text color */
                  transform: scale(1.05);    /* subtle grow effect */
                }
              .info-card-box-description{
                color:white;
                font-family: Segoe UI;
                font-size: 20px;
                font-weight:200;
                margin-right:4rem;
              }
          
        `}
      </style>

      <section className="info-card-box">
        <div className="info-card-box-img-thumbnail">
          <a href="https://jesscai06.github.io/Pittsburgh-Crash-Heat-Map-2025/">
            <img src="src/assets/SURA thumbnail.png"></img>
          </a>
        </div>
        <div className="info-card-box-summary">
          <h5 className="heading">SURA</h5>
          <h5 className="subheading">SUMMER 25</h5>
          <span className="info-card-tag-button">
            <button
              onClick={() =>
                window.open(
                  "https://jesscai06.github.io/Pittsburgh-Crash-Heat-Map-2025/",
                  "_blank"
                )
              }
            >
              Pittsburgh Crash Map
            </button>
          </span>
          <span className="info-card-tag-button">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/JessCai06/Pittsburgh-Crash-Heat-Map-2025",
                  "_blank"
                )
              }
            >
              Project Repo
            </button>
          </span>

          <h5 className="info-card-box-description">
            Created a crash map that takes part in a larger project to prevent
            Heavy Duty Vehicle (HDV) crashes.
          </h5>
          {/* <ul>
            <li>GIS Analysis</li>
            <li>Open Source</li>
          </ul> */}
        </div>
      </section>
    </>
  );
}

export function Portfolio() {
  return (
    <>
      <style>
        {`
          .Portfolio{
            display:flex;
            margin-left: 5rem;
            margin-right: 5rem;
          }
          .Filter{
            font-family: Segoe UI;
            flex:1;
            margin-right:1rem;
            align-items: left; 
          }
          .Filter h1{
            margin:0;
            font-family: Segoe UI;
            font-weight: 600;
            font-size: 2.5rem;
          }
          .Filter h2{
            margin:0;
            font-family: Segoe UI;
            font-weight: 300;
            font-size: 1.5rem;
          }
          .CardDeck{
            flex:4;
            margin-left: 1rem;
          }
        `}
      </style>
      <section className="spacer"></section>
      <section className="Portfolio" id="Portfolio">
        <section className="Filter">
          <h1>Portfolio</h1>
          <h2>data</h2>
          <h2>programming</h2>
          <h2>design</h2>
          <h2>photography</h2>
        </section>

        <section className="CardDeck">
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
      <MyLinks />
      <Portfolio />
      <Stack />
      {/* 
      ideas: have more animations. */}
    </>
  );
}

export function MyLinks() {
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

export function PhotoWall() {
  const photos = [
    { src: img1, alt: "DSC00527" },
    { src: img2, alt: "DSC01192" },
  ];

  return (
    <>
      <style>
        {`
          .photowall-shell {
            padding: 2rem 1rem;
          }
          .masonry {
            column-gap: 1rem;
            column-fill: balance;
          }
          @media (min-width: 360px)  { .masonry { column-count: 1; } }
          @media (min-width: 640px)  { .masonry { column-count: 2; } }
          @media (min-width: 1024px) { .masonry { column-count: 3; } }
          @media (min-width: 1440px) { .masonry { column-count: 4; } }
          @media (min-width: 1920px) { .masonry { column-count: 5; } }

          .masonry-item {
            break-inside: avoid;
            margin-bottom: 1rem;
            border-radius: 14px;
            overflow: hidden;
            box-shadow:
              0 1px 2px rgba(0,0,0,0.06),
              0 8px 24px rgba(0,0,0,0.08);
            background: #111;
          }

          .masonry-item img {
            display: block;
            width: 100%;
            height: auto;
          }
        `}
      </style>

      <section className="photowall-shell">
        <div className="masonry" aria-label="Photography Masonry Grid">
          {photos.map((p, i) => (
            <figure key={i} className="masonry-item">
              <img src={p.src} alt={p.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <>
      {/* header: logo + nav bar*/}
      <Navigator />
      {/* body: content varies by page */}
      <BodyContent />
      {/* footer: currently empty */}
      <PhotoWall />
    </>
  );
}
