export default function Header() {
  return (
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
  );
}
