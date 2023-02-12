//////// import 3rd party libraries
import { Link } from "react-router-dom";

/////////// start of main functional component
export default function Home() {
  return (
    <section className="main-section">
      <div className="container main-content">
        <h1>Are you more of an introvert or extrovert?</h1>
        <figure className="main-content__home-img">
          <img
            src="https://www.psychologies.co.uk/wp-content/uploads/sites/3/2018/05/introvert_or_extrovert-1-scaled.jpg?resize=2048,1280"
            alt="Girl hiding her face with a hat"
            loading="lazy"
          />
        </figure>

        <p className="main-content__home-caption">
          Introverts gain energy being alone. Extroverts crave people and
          activity.
        </p>

        <Link to="/question/1" className="main-content__start-btn">
          Start
        </Link>
      </div>
    </section>
  );
}
