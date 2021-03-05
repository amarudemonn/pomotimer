import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <section className="get-started" style={{ padding: "1rem" }}>
      <h1 className="ui header">Pomotimer</h1>
      <p>
        Pomotimer helps people to be more productive by using Pomodoro Technique
      </p>
      <Link to="/feed" className="ui primary button">
        Get Started
      </Link>
    </section>
  );
}

export default GetStarted;
