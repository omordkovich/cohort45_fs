import MyButton from "../myButton/MyButton";

export default function UserCard({ name, age, lastname }) {
  const handleClick = () => {
    alert(`Hallo, ${name}!`);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Lastname: {lastname}</p>
      <MyButton func={handleClick} text={`Choose ${name} ${lastname}`} />
    </div>
  );
}
