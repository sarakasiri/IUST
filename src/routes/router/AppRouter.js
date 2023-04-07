import { Routes, Route } from 'react-router-dom';
// import { ProtectedRoute } from '../protectedRoute/ProtectedRoute';

// import Page404 from '../../containers/page404/Page404';
import SignIn from '../../components/form/signIn/SignIn';
import SignUp from '../../components/form/signUp/SignUp';
import ForgetPass from '../../components/form/forgetPass/ForgetPass';
import GoogleAcc from '../../components/form/googleAcc/GoogleAcc';
import ChangePass from '../../components/form/changePass/ChangePass';
import Onboarding from '../../components/onboarding/Onboarding';
import Profile from '../../components/dashboard/profile/Profile';
import Request from '../../components/dashboard/request/Request';
import Notification from '../../components/dashboard/notification/Notification';
import FirstStep from '../../components/application/firstStep/FirstStep';
import SecondStep from '../../components/application/secondStep/SecondStep';
import ThirdStep from '../../components/application/thirdStep/ThirdStep';
import FourthStep from '../../components/application/fourthStep/FourthStep'
import SixthStep from '../../components/application/sixthStep/SixthStep';
import StepsProcess from '../../components/application/stepsProcess/StepsProcess';
import FinishedRegisteration from '../../components/application/finishedRegisteration/FinishedRegisteration';
import Ticketing from '../../components/ticketing/Ticketing';


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
            path: '/auth/change-password',
            component: <ChangePass />,
            protected: false,
            exact: true,
        },
        {
            path: '/dashboard',
            component: <StepsProcess />,
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