import { Routes, Route } from 'react-router-dom';
// import { ProtectedRoute } from '../protectedRoute/ProtectedRoute';

// import Page404 from '../../containers/page404/Page404';
import SignIn from '../../components/form/signIn/SignIn';
import SignUp from '../../components/form/signUp/SignUp';
import ForgetPass from '../../components/form/forgetPass/ForgetPass';
import GoogleAcc from '../../components/form/googleAcc/GoogleAcc';
import ChangePass from '../../components/form/changePass/ChangePass';
import Dashboard from '../../containers/dashboard/Dashboard';
import Onboarding from '../../components/onboarding/Onboarding';
import StepsProcess from '../../components/application/stepsProcess/StepsProcess';
import Ticketing from '../../components/ticketing/Ticketing';
import Profile from '../../components/dashboard/profile/Profile';


const AppRouter = () => {
    const routes = [
        // {
        //     path: '*',
        //     component: <Page404 />,
        //     protected: false,
        //     exact: false,
        // },
        {
            path: '/onboarding',
            component: <Onboarding />,
            protected: false,
            exact: true,
        },
        {
            path: '/auth/signin',
            component: <SignIn />,
            protected: false,
            exact: true,
        },
        {
            path: '/auth/signup',
            component: <SignUp />,
            protected: false,
            exact: true,
        },
        {
            path: '/auth/forget_password',
            component: <ForgetPass />,
            protected: false,
            exact: true,
        },
        {
            path: '/auth/google_account',
            component: <GoogleAcc />,
            protected: false,
            exact: true,
        },
        {
            path: '/auth/change_password',
            component: <ChangePass />,
            protected: false,
            exact: true,
        },
        {
            path: '/dashboard',
            component: <Dashboard />,
            protected: true,
            exact: true
        },
        {
            path: '/dashboard/new_ticket',
            component: <Ticketing />,
            protected: true,
            exact: true
        },
        {
            path: '/dashboard/new-application',
            component: <StepsProcess />,
            protected: true,
            exact: true
        },
        {
            path: '/dashboard/profile',
            component: <Profile />,
            protected: true,
            exact: true
        },
    ]
    return (
        <Routes>
            {routes.map((element, index) => (
                <>
                    <Route key={`approutes_${index}`} exact={element.exact} path={element.path} element={element.protected ?
                        <>
                            {element.component}
                        </>
                        :
                        element.component
                    } />
                </>
            ))}
        </Routes>
    );
};

export default AppRouter;