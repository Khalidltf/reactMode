import { useState } from "react";
import Toggle from "./Toggle";
import useLocalStorage from "use-local-storage";
import "./form.scss";

function Form() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(info);
    setInfo(() => {
      return {
        email: "",
        password: "",
      };
    });

    const { email, password } = info;
    if (email === "test@g.xom" && password === "1234567") {
      alert("Success signed in");
    } else {
      alert("Incorrect email or password");
    }
  }

  return (
    <>
      <div className="main" data-theme={isDark ? "dark" : "light"}>
        <Toggle
          isChecked={isDark}
          handleChange={() => {
            setIsDark((prevState) => !prevState);
          }}
        />
        <p className="sign">Sign in</p>
        <form className="my__form" onSubmit={handleSubmit}>
          <input
            className="email"
            type="email"
            name="email"
            value={info.email}
            placeholder="Username"
            onChange={handleInputChange}
          />
          <input
            className="password"
            type="password"
            name="password"
            value={info.password}
            placeholder="Password"
            onChange={handleInputChange}
          />
          <button className="submit">Sign in</button>
        </form>
      </div>
    </>
  );
}

export default Form;
