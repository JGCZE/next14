import React from "react";
import { login } from "@/app/lib/action";
import { handleGithubLogin } from "@/app/lib/action"; // Import the 'handleGithubLogin' function

const LoginPage = async () => {

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login With GitHub</button>
      </form>

      <form action={login}>
        <input type="text" placeholder="userName" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
