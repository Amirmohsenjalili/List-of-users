import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div>
            The page according to your request was not found. Please try again. 
            <Link to={'/'}>Click to return to the Home page</Link>
        </div>
    );
};

export default index;