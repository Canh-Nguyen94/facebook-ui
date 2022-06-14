import React, { useState } from "react";
import Link from "next/link";
import {useAuth} from "../../context/AuthContext"
import { useRouter } from "next/router";


function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
const router = useRouter();
  const {user, login} = useAuth();
  if(user) {
    console.log("has user")
    router.push("localhost:3000")}

  const handleSubmit = async () => {
    login(userEmail,password);
  };
  return (
    <div className="login-container">
      <form action="">
        <h2>Login</h2>
        <div className="form-section">
          <input
            type="text"
            id="email"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            placeholder="Email or phone number"
            required
          />
          
        </div>
        <div className="form-section">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
            required
          />
          
        </div>
        <div className="form-button">
          <button
            className="button-blue"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Login
          </button>
          <Link href="/user/register" passHref>
            <h4>
              Don't have an account?<span>Register</span>
            </h4>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;

Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
