import { useState } from "react";
import PageHeader from "../components/common/pageHeader";
import Form from "../_tutorials/form";

function SignIn() {
  return (
    <div className="container">
      <PageHeader title="Sign In" description="sign in with your account" />

      <Form />
    </div>
  );
}

export default SignIn;
