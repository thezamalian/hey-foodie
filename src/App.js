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
import MyOrders from './Pages/UserPanel/MyOrders/MyOrders';
import ManageAllOrders from './Pages/AdminPanel/ManageAllOrders/ManageAllOrders';
import AddNewPackage from './Pages/AdminPanel/AddNewPackage/AddNewPackage';
import AddReview from './Pages/UserPanel/AddReview/AddReview';
import BookOrder from './Pages/UserPanel/BookOrder/BookOrder';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

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
					<PrivateRoute path="/my-orders">
						<MyOrders />
					</PrivateRoute>
					<PrivateRoute path="/all-orders">
						<ManageAllOrders />
					</PrivateRoute>
					<PrivateRoute path="/add-package">
						<AddNewPackage />
					</PrivateRoute>
					<PrivateRoute path="/add-review">
						<AddReview />
					</PrivateRoute>

					<PrivateRoute path="/book-order/:id">
						<BookOrder />
					</PrivateRoute>
					
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
