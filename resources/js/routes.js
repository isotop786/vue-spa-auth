import Example from './components/ExampleComponent';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
export default
{
    mode:'history',

    routes: [
        {
            path:'/',
            name:'home',
            component:Home
        },

        {
            path:'/about',
            name:'about',
            component:About
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/register',
            name:'register',
            component:Register
        },


    ]
}
