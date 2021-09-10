import './App.css';
import Home from './pages/home';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route path={ROUTES.HOME}>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
