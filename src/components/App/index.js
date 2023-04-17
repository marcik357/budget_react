import { Wrapper } from './style.js';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Root from "../../routes/root.js";

import ErrorPage from "../../error-page.js";

import Home from '../../routes/Home/index.js'
import Statistics from '../../routes/Statistics/index.js'
import About from '../../routes/About/index.js'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "home",
        element: <Home />,
    },
    {
        path: "statistics",
        element: <Statistics />,
    },
    {
        path: "about",
        element: <About />,
    },
]);

const App = () => {
    return (
        <Wrapper>
            <RouterProvider router={router} />

        </Wrapper>
    )
}

export default App