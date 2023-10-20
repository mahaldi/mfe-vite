import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            LANDING PAGE MARKETING
            <br />
            <Link to="/pricing">
                <button>pricing page</button>
            </Link>
        </div>

    )
}
export default Landing;