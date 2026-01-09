// import { useState } from "react";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("student");
//   const [message, setMessage] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const response = await fetch("http://localhost:5000/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ email, password, role })
//     });

//     const data = await response.json();
//     setMessage(data.success ? `Welcome ${data.role}` : data.message);
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <h2>Exam Portal Login</h2>

//       <input
//         type="email"
//         placeholder="Email"
//         required
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         required
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <select onChange={(e) => setRole(e.target.value)}>
//         <option value="student">Student</option>
//         <option value="admin">Admin</option>
//       </select>

//       <button type="submit">Login</button>

//       <p>{message}</p>
//     </form>
//   );
// }

// export default Login;
import { useState } from "react";
import "./App.css"; // Make sure this import is here

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password, role })
    });

    const data = await response.json();
    setMessage(data.success ? `Welcome ${data.role}` : data.message);
  };

  return (
    <div className="login-card">
      <h2>Exam Portal Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={handleLogin}>Login</button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
