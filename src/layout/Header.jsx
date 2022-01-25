
// У хедера не будет состояний поэтому функциональный компонент
export default function Header() {
    return (
        <nav className="#43a047 green darken-1">
        <div className="nav-wrapper">
          <a href="!#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="!#">Repo</a></li>
          </ul>
        </div>
      </nav>
    
    )
}