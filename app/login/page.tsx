"use client";

import Heading from "../component/Heading";
import LoginForm from "../component/LoginForm";

export default function page() {
  return (
    <div className="grid justify-center">
      <Heading text="Account Login" />
      <div className="my-[120px] mx-auto">
        <LoginForm />
      </div>
    </div>
  );
}
