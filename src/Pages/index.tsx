import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import InputFormProps from './AddUser';
import NotFound from './NotFound'
import Layout from '../Layout/index'

const index = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/AddUser' element={<InputFormProps />}/>
                <Route path='/*' element={<NotFound />}/>
            </Routes>
        </Layout>
    );
};

export default index;