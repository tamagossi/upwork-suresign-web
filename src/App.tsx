import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import BetaThankYou from './pages/BetaThankYou';
import InputThankYou from './pages/InputThankYou';
import Privacy from './pages/Privacy';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Homepage />,
	},
	{
		path: '/thank-you-beta',
		element: <BetaThankYou />,
	},
	{
		path: '/thank-you-input',
		element: <InputThankYou />,
	},
	{
		path: '/privacy',
		element: <Privacy />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
