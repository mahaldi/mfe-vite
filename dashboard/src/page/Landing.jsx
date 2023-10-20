import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            LANDING PAGE DASHBOARD
            <br />
            <Link to="/dashboard/detail">
                <button>detail dashboard page</button>
            </Link>
        </div>

    )
}
export default Landing;