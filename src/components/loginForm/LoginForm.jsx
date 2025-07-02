import MyInput from "../myInput/MyInput";
import MyButton from "../myButton/MyButton";

export default function LoginForm() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <MyInput
          name="name"
          type="text"
          placeholder="Enter your name"
          label="Name: "
        />
        <MyInput
          name="email"
          type="text"
          placeholder="Enter your e-mail"
          label="E-Mail: "
        />
        <MyInput
          name="password"
          type="text"
          placeholder="Enter your password"
          label="Password: "
        />
        <MyButton type="submit" text="Login" />
      </form>
    </div>
  );
}
