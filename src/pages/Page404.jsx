//////// import 3rd party libraries
import { Link } from "react-router-dom";

/////////// start of main functional component
export default function Page404() {
  return (
    <section className="page-404">
      <h2>Page 404. Not Found</h2>

      <Link to="/" className="back-btn">
        <button>Back</button>
      </Link>
    </section>
  );
}
