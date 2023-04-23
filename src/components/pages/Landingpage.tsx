import Header from "../organisms/Header";
import Movies from "../organisms/Movies";
import "./styles/landingpage.scss";

export default function Landingpage() {
  return (
    <>
      <div className="landing__page">
        <div className="radial">
          <Header></Header>
          <header className="flex p2 flex__sb flex__cv">
            <a href="/">
              <h1>FIL</h1>
              <h1>MEX</h1>
            </a>
            <ul className="flex g2">
              <li>
                <a href="">FILMES</a>
              </li>
              <li>
                <a href="">POPULARES</a>
              </li>
            </ul>
          </header>
          <div className="title__container">
            <h1 className="main__title">FILMEX</h1>
          </div>
        </div>
        <div className="p2">
          <Movies></Movies>
        </div>
      </div>
    </>
  );
}
