import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthContext.js";

export default function SignUpForm() {
  const { user, login } = useContext(AuthContext);
  //hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    login(data.username);
    alert(
      "submitted with email: " + data.email + "and password" + data.password,
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Username</label>
          <input
            type="text"
            placeholder=" "
            {...register("username", { required: "username is required" })}
          />
          {errors.username && (
            <p style={{ color: "crimson" }}>{errors.username.message}</p>
          )}
        </div>

        {/*         
          <div style={{ marginBottom: "1rem" }}>
          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p style={{ color: "crimson" }}>{errors.email.message}</p>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Password</label>
          <input
            type="password"
            placeholder="*********"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 4,
                message: "Password must be at least 4 chars",
              },
              maxLength: {
                value: 12,
                message: "Password cannot exceed 12 chars",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "crimson" }}>{errors.password.message}</p>
          )}
        </div> 
        */}

        <button type="submit">Create account</button>
      </form>
      {user.isAuth && <p>User Logged In</p>}
    </div>
  );
}
