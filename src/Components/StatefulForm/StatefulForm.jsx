import { useState } from "react";

const StatefulForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    if (password.length < 6) {
      setError("Please enter a valid Password");
    }
  };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={"Karim"}
          className="input input-primary"
          type="text"
          name="name"
          required
        />
        <br />
        <br />
        <input
          onChange={handleEmailChange}
          className="input input-primary"
          type="email"
          name="email"
        />
        <br />
        <br />
        <input
          onChange={handlePasswordChange}
          className="input input-primary"
          type="password"
          name="password"
        />
        <br />
        <br />
        <input className="btn btn-primary" type="submit" value="submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StatefulForm;
