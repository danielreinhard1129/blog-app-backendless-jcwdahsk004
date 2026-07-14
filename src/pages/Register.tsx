import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = async () => {
    try {
      const url = "https://cleverfloor-us.backendless.app/api/users/register";
      await axios.post(url, {
        name: name,
        email: email,
        password: password,
      });

      alert("Register success!");
    } catch (error) {
      console.log(error);
      alert("Register failed!");
    }
  };

  return (
    <div>
      <h1>Register</h1>

      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="text"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
