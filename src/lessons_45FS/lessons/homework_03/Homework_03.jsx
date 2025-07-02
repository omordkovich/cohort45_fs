import LoginForm from "../../../components/loginForm/LoginForm";
import UserCard from "../../../components/userCard/UserCard";

export default function Homework_03() {
  return (
    <div>
      <h2>React Props children</h2>
      <p>
        Props используется для передачи данных от родительским дочерним
        компанентам
      </p>
      <UserCard name={"Bilbo"} age={45} lastname={"Baggins"} />
      <UserCard name={"Gendalf"} age={2000} lastname={"White"} />
      <UserCard name={"Gimli"} age={90} lastname={"Dwarfson"} />
      <LoginForm />
    </div>
  );
}
