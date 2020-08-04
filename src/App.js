import React, { useState } from 'react';
import {
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import styled from 'styled-components';
import { useTransition, animated, config } from 'react-spring';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const Site = styled.div`
  background: #ffe5d9;
  min-height: 100vh;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
`;

const Navigation = styled.nav`
  background: #f4acb7;
  min-height: 75px;
  margin-top: -20px;
  padding: 25px;
  ul {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
  }
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 25px;
  font-size: 1.3rem;

  a {
    color: #ffe5d9;
    text-decoration: none;
    transition: filter 300ms;
  }

  a:hover {
    filter: brightness(1.3);
  }
`;

function NavigationItem(props){
  const [open, setOpen] = useState(false);

  return (
    <NavItem>
      <Link to={props.url} onClick={() => setOpen(!open)}>{props.name}</Link>

      {open && props.children}
    </NavItem>
  )
}

function Navi() {
  return (
    <Navigation className="navbar">
      <ul className="navbar-nav">
        <NavigationItem name="Home" url="/"/>
        <NavigationItem name="Portfolio" url="/portfolio"/>
        <NavigationItem name="Contact" url="/contact"/>
      </ul>
    </Navigation>
  )
}

function App() {
  const location = useLocation();

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate(100%, 0)' },
    enter: { opacity: 1, transform: 'translate(0%, 0)' },
    leave: { opacity: 0, transform: 'translate(-50%, 0)' },
    config: config.slow,
  });

  return (
    <Site>
      <Navi/>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </animated.div>
      ))}
    </Site>
  );
}

export default App;
