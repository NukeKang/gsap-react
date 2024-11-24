import { Link, Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <header id='parallax__title'>
        <h1>GSAP Parallax Effect01</h1>
        <p>GSAP scrollTrigger - 애니메이션 기본 효과</p>
        <ul>
          <li className={currentPath === '/' ? 'active' : ''}>
            <Link to='/'>1</Link>
          </li>
          {[...Array(14)].map((_, index) => (
            <li
              key={index + 2}
              className={currentPath === `/gsap${index + 2}` ? 'active' : ''}
            >
              <Link to={`/gsap${index + 2}`}>{index + 2}</Link>
            </li>
          ))}
        </ul>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
