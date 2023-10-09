import { Link } from 'react-router-dom';
import Layout from '../../Layout';

const index = () => {
    return (
        <Layout>
            The page according to your request was not found. Please try again. 
            <Link to={'/'}>Click to return to the Home page</Link>
        </Layout>
    );
};

export default index;