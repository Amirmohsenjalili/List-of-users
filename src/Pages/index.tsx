import { Route, Routes } from 'react-router-dom';
import SignIn from './SingIn';
import Home from './Home';
import InputFormProps from './AddUser';
import NotFound from './NotFound'

const index = () => {
    return (
            <Routes>
                <Route path='/' element={<SignIn />}/>
                <Route path='/ListUser' element={<Home />}/>
                <Route path='/AddUser' element={<InputFormProps />}/>
                <Route path='/*' element={<NotFound />}/>
            </Routes>
    );
};

export default index;