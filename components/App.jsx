import React from 'react';
import Home from './Home.jsx';
import NavBar from './NavBar.jsx';
import NavPage from './NavPage.jsx';

class App extends React.Component {

	render() {
		return (
			<div>
				<Home />
				<NavBar />
				<NavPage />
			</div>
		);
	}
}

export default App;
