import { Route, Routes } from 'react-router-dom';
import SignIn from './SingIn';
import Home from './Home';
import InputFormProps from './AddUser';
import NotFound from './NotFound'
import Layout from '../Layout';

const Page = () => {
    return (
            <Routes>
                <Route path='/' element={<SignIn />}/>
                <Route path='/&' element={<Layout />}>
                    <Route path='ListUser' element={<Home />}/>
                    <Route path='AddUser' element={<InputFormProps />}/>
                </Route>
                <Route path='/*' element={<NotFound />}/>
            </Routes>
    );
};

export default Page;