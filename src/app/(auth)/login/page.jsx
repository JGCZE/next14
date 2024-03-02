import React from "react";
import { handleGithubLogin } from "@/app/lib/action"; // Import the 'handleGithubLogin' function

const LoginPage = async () => {

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login With GitHub</button>
      </form>
    </div>
  );
};

export default LoginPage;
