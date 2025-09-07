"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import DynamicIcon from "../DynamicIcon";

const SignIn = ({ mode = "parent" }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("resend", {
      email,
      callbackUrl: `/after-login/${mode}`,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="reading-max space-y-2">
      <div className="form-box mt-8">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">E-mail *</legend>
          <input
            type="email"
            value={email}
            className="input w-full"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Indtast din email adresse"
            required
          />
        </fieldset>
      </div>
      <button
        className="btn btn-primary w-full flex gap-3 items-center"
        type="submit"
      >
        <DynamicIcon name="FaEnvelope" size="14" />
        Send magisk link
      </button>
      <p className="text-xs text-gray-500 text-center">
        Et magisk link logger dig ind – og opretter automatisk en konto, hvis du
        ikke har en.
      </p>
    </form>
  );
};

export default SignIn;
