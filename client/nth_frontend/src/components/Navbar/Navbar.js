import pisblogo from "../../assets/pisb-logo.png";
// import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { Link,NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, NavbarBrand, NavItem } from "react-bootstrap";
// import Link
const NavbarComp = () => {
  // const location = useLocation();

  // if (!location.pathname.match("/question")) {
  // return (
  <div>
    {/* <nav class="nav-bar pt-2 pb-2 pl-4 pr-2 navbar navbar-expand-lg navbar-dark">
      <a href="https://pictieee.in/" class="navbar-brand">
      <img src={pisblogo} width="110px" alt="PISB-logo"></img>
      </a>
      <button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed">
      <span class="navbar-toggler-icon">
      </span>
      </button>
      <div class="navbar-collapse collapse" id="basic-navbar-nav">
      <div class="m-auto navbar-nav">
      
      <Link to={"/"} aria-current="page" class="mr-3 ml-3 mt-2 mb-2 na-link active" id="home" >Home</Link>
      <Link to={"/register"} class="mr-3 ml-3 mt-2 mb-2 na-link" id="register" >Register</Link>
      <Link to={"/about"} class="mr-3 ml-3 mt-2 mb-2 na-link" id="about" href="/about">About</Link>
      <Link to={"/leaderboard"} class="mr-3 ml-3 mt-2 mb-2 na-link" href="/leaderboard">LeaderBoard</Link>
      <Link to={"/contact"} class="me-3 ms-3 mt-2 mb-2 me-5 na-link" id="contact" href="/contact">Contact</Link>

      </div>
      <Link to={"/login"}>
      <button class="mr-3 ml-2 mt-2 mb-2 hunt-button">Loginunt</button>
      </Link>

      <a href="https://www.ieee.org/" class="pisb-logo navbar-brand">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAgCAYAAADkK90uAAAACXBIWXMAAC4jAAAuIwF4pT92AAAIZWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTYtMDEtMTBUMjA6MTI6MjErMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDUtMzFUMTI6NDk6MzUrMDU6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA1LTMxVDEyOjQ5OjM1KzA1OjMwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExZWFkZDk5LThhNjItMDY0MS1iNzBiLTExMDQwMzc3Njc1MyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjUzNWFiMDVlLWI3YTgtMTFlNS05MTU1LWVlNjZkODJjZjhiYiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmYxYmVmMTJkLWFkODEtMTk0NC04N2M5LWIxZjNlYTlmYmU3OCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iMzAwMDAwMC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iMzAwMDAwMC8xMDAwMCIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIgZXhpZjpDb2xvclNwYWNlPSIxIiBleGlmOlBpeGVsWERpbWVuc2lvbj0iMTkwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNjAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmYxYmVmMTJkLWFkODEtMTk0NC04N2M5LWIxZjNlYTlmYmU3OCIgc3RFdnQ6d2hlbj0iMjAxNi0wMS0xMFQyMDoxMjoyMSswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTgzYmRlZS0xMzBmLTZiNGYtYmRhZS1mMmM4Mjc2ZWE2MDUiIHN0RXZ0OndoZW49IjIwMTYtMDEtMTBUMjA6MTI6MjErMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQi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" width="110px" alt="IEEE-logo"></img>
      </a>
      </div>
      </nav> */}
    {/* <div class="nav-bar pt-2 pb-2 pl-4 pr-2 navbar navbar-expand-lg navbar-dark"> */}

    <Navbar collapseOnSelect expand="lg" variant="dark" >
      <Container >
        <Navbar.Brand href="https://pictieee.in/" ><img src={pisblogo} width="110px" alt="PISB-logo" ></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={console.log('hitt')} />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <p className="text-center mt-4 mb-4"> */}
          <div className="mx-auto" style={{ width: "200" }}>

            {/* <Nav variant="pills" > */}
            <Nav className="justify-content-center">
              <Nav.Item class="nav-display" >
                <Nav.Link href="/" as={Link} to="/" class={'nav-link'} >Home</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
              <Nav.Link eventKey="link-1" href="/Login" as={Link} to="/login" >Login</Nav.Link>
            </Nav.Item> */}
              <Nav.Item class="nav-display">
                <Nav.Link eventKey="link-2" href="/About" as={Link} to="/about" >About</Nav.Link>
              </Nav.Item>
              <Nav.Item class="nav-display">
                <Nav.Link eventKey="link-3" href="/LeaderBoard" as={Link} to="/leaderboard" >LeaderBoard</Nav.Link>
              </Nav.Item>
              <Nav.Item class="nav-display">
                <Nav.Link eventKey="link-4" href="/Contact" as={Link} to="/contact" >Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item class="nav-display">
                <Nav.Link eventKey="link-5" href="/login" as={Link} to="/login" >
                  <div class="login-btn"><button type="button" class="nes-btn is-warning">Login</button></div></Nav.Link>
              </Nav.Item>
              {/* <Nav.Link href="/" class="me-3 ms-3 mt-2 mb-2 me-5" id="home" Link>Home</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">LeaderBoard</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link> */}

              {/* <div class="m-auto navbar-nav"> */}
              {/* <Link to="/" className="nav-link">Home</Link> */}
              {/* <NavItem><Link to={"/"} aria-current="page" className="nav-link" >Home</Link></NavItem>
            <NavItem><Link to={"/register"} className="nav-link" >Register</Link></NavItem> */}
              {/* <Link to={"/about"} className="nav-link" >About</Link>
            <Link to={"/leaderboard"} className="nav-link" href="/leaderboard">LeaderBoard</Link>
            <Link to={"/contact"} className="nav-link" id="contact" href="/contact">Contact</Link> */}

              {/* </div> */}

              {/* <Nav.Item>
          <Link to={'/login'}><button  type="button" class="nes-btn is-warning">Login</button></Link>
          </Nav.Item>   */}
            </Nav>
          </div>

          <Nav>
            <Nav.Link href="https://www.ieee.org/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAgCAYAAADkK90uAAAACXBIWXMAAC4jAAAuIwF4pT92AAAIZWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTYtMDEtMTBUMjA6MTI6MjErMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDUtMzFUMTI6NDk6MzUrMDU6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA1LTMxVDEyOjQ5OjM1KzA1OjMwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExZWFkZDk5LThhNjItMDY0MS1iNzBiLTExMDQwMzc3Njc1MyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjUzNWFiMDVlLWI3YTgtMTFlNS05MTU1LWVlNjZkODJjZjhiYiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmYxYmVmMTJkLWFkODEtMTk0NC04N2M5LWIxZjNlYTlmYmU3OCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iMzAwMDAwMC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iMzAwMDAwMC8xMDAwMCIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIgZXhpZjpDb2xvclNwYWNlPSIxIiBleGlmOlBpeGVsWERpbWVuc2lvbj0iMTkwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNjAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmYxYmVmMTJkLWFkODEtMTk0NC04N2M5LWIxZjNlYTlmYmU3OCIgc3RFdnQ6d2hlbj0iMjAxNi0wMS0xMFQyMDoxMjoyMSswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTgzYmRlZS0xMzBmLTZiNGYtYmRhZS1mMmM4Mjc2ZWE2MDUiIHN0RXZ0OndoZW49IjIwMTYtMDEtMTBUMjA6MTI6MjErMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQi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" width="110px" alt="IEEE-logo"></img></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>

  // );
  // }
  return (
    <div>
    <Navbar collapseOnSelect  expand="lg" variant="dark" className="nav-bar pt-2 pb-2 pl-4 pr-2"  >
        <Container >
          <Navbar.Brand href="https://pictieee.in/">
            <img src={pisblogo} width="110px" alt="PISB-logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
            <Nav.Item  >
                <Nav.Link exact
                activeClassName="active" href="/" as={Link} to="/" class={'nav-link'} className="me-3 ms-3 mt-4 mb-2 na-link">Home</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
              <Nav.Link eventKey="link-1" href="/Login" as={Link} to="/login" >Login</Nav.Link>
            </Nav.Item> */}
              <Nav.Item >
                <Nav.Link exact
                activeClassName="active" eventKey="link-2" href="/About" as={Link} to="/about" className="me-3 ms-3 mt-4 mb-2 na-link">About</Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link exact
                activeClassName="active" eventKey="link-3" href="/LeaderBoard" as={Link} to="/leaderboard" className="me-3 ms-3 mt-4 mb-2 na-link">LeaderBoard</Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link exact
                activeClassName="active" eventKey="link-4" href="/Contact" as={Link} to="/contact" className="me-3 ms-3 mt-4 mb-2 na-link">Contact</Nav.Link>
              </Nav.Item>
              
              <Nav.Item>
              <Nav.Link exact
                activeClassName="active" eventKey="link-5" href="/login" as={Link} to="/login"  className="me-3 ms-3 mt-2 mb-2 na-link"> 
                  <button  className="me-3 ms-2 mt-2 mb-2 hunt-button">Login</button></Nav.Link>
              </Nav.Item>
            </Nav>
            {/* {true ? (
              <Link
                // to={isLogin() ? "question/put_your_answer_here" : "/hunt"}
                to={"/login"}
              >
                <button className="me-3 ms-2 mt-2 mb-2 hunt-button">
                  Hunt
                </button>
              </Link>
            ) : null} */}
            <Navbar.Brand className="pisb-logo" href="https://www.ieee.org/">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAgCAYAAADkK90uAAAACXBIWXMAAC4jAAAuIwF4pT92AAAIZWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTYtMDEtMTBUMjA6MTI6MjErMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDUtMzFUMTI6NDk6MzUrMDU6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA1LTMxVDEyOjQ5OjM1KzA1OjMwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExZWFkZDk5LThhNjItMDY0MS1iNzBiLTExMDQwMzc3Njc1MyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjUzNWFiMDVlLWI3YTgtMTFlNS05MTU1LWVlNjZkODJjZjhiYiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmYxYmVmMTJkLWFkODEtMTk0NC04N2M5LWIxZjNlYTlmYmU3OCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iMzAwMDAwMC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iMzAwMDAwMC8xMDAwMCIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIgZXhpZjpDb2xvclNwYWNlPSIxIiBleGlmOlBpeGVsWERpbWVuc2lvbj0iMTkwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNjAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmYxYmVmMTJkLWFkODEtMTk0NC04N2M5LWIxZjNlYTlmYmU3OCIgc3RFdnQ6d2hlbj0iMjAxNi0wMS0xMFQyMDoxMjoyMSswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTgzYmRlZS0xMzBmLTZiNGYtYmRhZS1mMmM4Mjc2ZWE2MDUiIHN0RXZ0OndoZW49IjIwMTYtMDEtMTBUMjA6MTI6MjErMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQi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" width="110px" alt="IEEE-logo"></img>
            </Navbar.Brand>
          </Navbar.Collapse>
      </Container>
      </Navbar>
      </div>
  )
}

export default NavbarComp;


