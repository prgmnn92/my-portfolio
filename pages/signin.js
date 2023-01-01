import React, { useState } from "react";
import Container from "../components/Container";
import { useRouter } from "next/router";
import { useAuth } from "../store/auth-context";
import MagneticButton from "../components/MagneticButton";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { signIn, signInWithGoogle, logout } = useAuth();

  const onSubmit = (event) => {
    // setError(null);
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    event.preventDefault();

    signIn(email, password)
      .then((authUser) => {
        console.log("Success. The user is created in Firebase");
        console.log(authUser);
        router.push("/");
      })
      .catch((error) => {
        // An error occurred. Set error message to be displayed to user
        // setError(error.message);
        console.log(error);
      });
  };

  return (
    <>
      <Container>
        <h1 className="text-2xl py-8">Sign In Page</h1>
        <form className="grid grid-cols-2 gap-2 md:gap-4" onSubmit={onSubmit}>
          <input
            className="drop-shadow bg-white rounded-2xl p-4 col-span-1"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="drop-shadow bg-white rounded-2xl p-4 col-span-1"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="py-4 col-span-2">
            <MagneticButton type="submit">Submit</MagneticButton>
          </div>
          <div className="pt-16">
            <MagneticButton className="!bg-white" onClick={signInWithGoogle}>
              Sign In With Google
            </MagneticButton>
          </div>
        </form>
        <div className="pt-16">
          <MagneticButton onClick={logout}>Logout</MagneticButton>
        </div>
      </Container>
    </>
  );
};

export default Signup;
