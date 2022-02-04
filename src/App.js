import './App.css';
import Home from './Pages/Home/Home/Home';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

function App() {
	return (
	<div className="App">
		<AuthProvider>
			<Router>
				<Navigation />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/home">
						<Home />
					</Route>

					<Route path="/login">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</AuthProvider>
	</div>
	);
}

export default App;
