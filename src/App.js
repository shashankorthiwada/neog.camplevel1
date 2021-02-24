import "./styles.css";
import AlphanumericPassword from "./Alphanumeric";
import Todo from "./Todo";
import CartApp from "./CartApp";
import SwitchTab from "./SwitchTab";
import DarkMode from "./Darmode";
import TwitterCharacter from "./TwitterChars";
import AgeValidator from "./AgeValidator";
import PasswordMatcher from "./PasswordMatcher";
import CounterApp from "./CounterApp";

export default function App() {
  return (
    <div className="App">
      <h1>React Exercises</h1>
      <AlphanumericPassword />
      <hr></hr>
      <Todo />
      <hr></hr>
      <CartApp />
      <hr></hr>
      <SwitchTab />
      <hr></hr>
      <DarkMode />
      <br></br>
      <br></br>
      <hr></hr>

      <TwitterCharacter />
      <hr></hr>
      <AgeValidator />
      <hr></hr>
      <PasswordMatcher />
      <hr></hr>
      <CounterApp />
    </div>
  );
}
