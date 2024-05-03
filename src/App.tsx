import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Loading from "./components/loading";
// import Explore_Users from './pagges/explore-users/explore-users'
// import Terms_And_Policy from './pagges/policy/policy'

function App() {
    const Home = lazy(() => import("./pagges/home/home"));
    // const Login = lazy(() => import('./pagges/auth-login/login'))
    const Register = lazy(() => import("./pagges/auth-register/register"));
    const TindExplore_Profileer = lazy(
        () => import("./pagges/explore-profile/explore-profile"),
    );
    const Edit_Profile = lazy(
        () => import("./pagges/edit-profile/edit-profile"),
    );
    const Email_Redirect = lazy(
        () => import("./pagges/email-redirect/email-redirect"),
    );
    const Explore_Layout = lazy(() => import("./layout/explore"));
    const Explore_Users = lazy(
        () => import("./pagges/explore-users/explore-users"),
    );
    const Terms_And_Policy = lazy(() => import("./pagges/policy/policy"));

    return (
        <div>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/policy" element={<Terms_And_Policy />} />
                    <Route
                        path="/email-redirect"
                        element={<Email_Redirect />}
                    />
                    <Route path="/explore" element={<Explore_Layout />}>
                        <Route index element={<Explore_Users />} />
                        <Route
                            path="profile"
                            element={<TindExplore_Profileer />}
                        />
                        <Route path="edit-profile" element={<Edit_Profile />} />
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
