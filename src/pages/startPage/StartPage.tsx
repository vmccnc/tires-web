import { Link } from "react-router-dom";
import "./StartPage.css"

const StartPage: React.FC = () => {
    return (
        <div className="nav-links">
        <Link to="/all">See all</Link>
        <Link to="/create">Create tire</Link>
        <Link to="/filter">Select tire</Link>
        <Link to="/tireDetail">Tire Detail</Link>
        </div>
    )
}

export default StartPage;