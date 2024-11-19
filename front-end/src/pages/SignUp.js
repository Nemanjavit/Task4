import { useState, useEffect } from "react";
import axios from "axios";

const SignUp = () => {
  const [signup, setSignUp] = useState({ email: "", password: "" });
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/users", signup)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users:", error);
      });
  }, []);

  return (
    <div>
      <h1>users list</h1>
      <ul>
        {users.map((user) => {
          return <li key={user.userId}>{user.email}</li>;
        })}
      </ul>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          autoComplete="false"
          name="email"
          onChange={(e) => setSignUp({ ...signup, email: e.target.value })}
          value={signup.email}
          type="email"
          placeholder="email"
        />
        <input
          name="password"
          onChange={(e) => setSignUp({ ...signup, password: e.target.value })}
          value={signup.password}
          type="password"
          placeholder="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default SignUp;
