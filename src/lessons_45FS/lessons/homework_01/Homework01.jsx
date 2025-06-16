import "./homework01.css";
import logo from "../../../assets/avatar01.jpg";

export default function Homework01() {
  return (
    <div className="card">
      <img className="avatar" src={logo} alt="image" />
      <div className="text-field">
        <div className="name">
          <p>Name:</p>
          <p>Oleg Mordkovich</p>
        </div>
        <div className="hobbys">
          <p>Hobbys:</p>
          <ul className="hobby-list">
            <li>Gaming</li>
            <li>Movies</li>
            <li>Hiking</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
