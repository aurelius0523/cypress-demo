import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {

  const [isShown, setShown] = React.useState(false);
  const [isButtonDisabled, setButtonDisabled] = React.useState(true);
  const [hasVanished, setVanished] = React.useState(false);
  const [dynamicClassName, setDynamicClassName] = React.useState({
    isActive: false,
    className: ""
  });

  const handlebuttonClick = () => {
    setShown(true);
  }

  const handleToggle = () => {
    setShown(!isShown);
  }

  const handleDisabledButtonToggleClick = () => {
    setButtonDisabled(!isButtonDisabled);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setDynamicClassName({ isActive: true, className: "active" });
    }, 2000);

    setTimeout(() => {
      setVanished(true);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <br />
        <fieldset>
          <legend>Dynamic Content Demo</legend>
          <div>
            <button id="showButton" onClick={handlebuttonClick}>Show dynamic div</button>
          </div>
          {isShown &&
            <Fragment>
              <div>This content is dynamically added on click!</div>
              <div>
                <button onClick={handleToggle}>hide this content</button>
              </div>
            </Fragment>
          }
        </fieldset>

        <br />
        <fieldset>
          <legend> Disabled Button Demo </legend>
          <div><button id="disabledButton" disabled={isButtonDisabled}>User shouldn't be able to programatically click disabled button and Cypress should throw error</button></div>
          {!isButtonDisabled &&
            <div>The button is now Clickable!</div>
          }
          <div>
            <button id="disabledButtonToggle" onClick={handleDisabledButtonToggleClick}>Click this to toggle disable button state</button>
          </div>
        </fieldset>

        <br />
        <fieldset>
          <legend> Blocked element Demo </legend>
          <div style={{ position: "relative" }}>
            <button id="blockedButton">This button is blocked by transparent overlay. Cypress should throw error</button>
            <div
              id="blockingElement"
              style={{
                opacity: "50%",
                position: "absolute",
                top: 0,
                bottom: "-10px",
                left: "-10px",
                right: "-10px",
                backgroundColor: "black"
              }}
            >
            </div>
          </div>
        </fieldset>

        <br />
        <fieldset>
          <legend> Delayed Assertion </legend>
          <div id="delayedAssertion" className={dynamicClassName.className}>This div has a classname that is appended after 2 seconds. The current className value is {dynamicClassName.className}</div>
        </fieldset>

        <br />
        <fieldset>
          <legend> Asserting that element will go away within 2 seconds </legend>
          {!hasVanished &&
            <div className="vanishingElement">
              This element will vanish within 2 seconds
          </div>
          }
        </fieldset>
      </header>
    </div>
  );
}

export default App;
