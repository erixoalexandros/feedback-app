import Card from "../shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <p>This is just an about page</p>
        <Link to="/">Back to Home</Link>
      </div>
    </Card>
  );
}

export default AboutPage;
