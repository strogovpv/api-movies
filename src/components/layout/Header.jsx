const Header = () => {
  return (
    <nav className="light-blue">
      <div className='nav-wrapper'>
      <a href="!#" className="brand-logo">Logo</a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='sass.html'>Sass</a>
          </li>
          <li>
            <a href='badges.html'>Components</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
