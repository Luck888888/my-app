import React from 'react';


import { UserList, UserEdit,UserCreate } from './chanels';
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate} from './choices';
import { CategoriesList, CategoriesCreate, CategoriesEdit} from './categories';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
// import jsonServerProvider from './dataProvider';
import jsonServerProvider from 'ra-data-json-server';


 const provider = jsonServerProvider('http://localhost:8000/v2');

const App = () => (
        <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={provider}>
            <Resource name="chanels"  list={UserList}  edit={UserEdit} create={UserCreate} icon={UserIcon} />
            <Resource name="choice" list={PostList} edit={PostEdit}  create={PostCreate} icon={PostIcon} />
            <Resource name="categories" list={CategoriesList } edit={CategoriesEdit }  create={CategoriesCreate } icon={PostIcon} />
        </Admin>
    );

export default App;