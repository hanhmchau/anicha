import { Layout } from 'antd';
import * as React from 'react';
import './App.css';
import HeaderBar from './HeaderBar';
import SignUpBox from './SignUpBox';
const { Footer } = Layout;

class App extends React.Component {
	public render() {
		return (
			<Layout className="layout">
				<HeaderBar />
				<SignUpBox />
				<Footer style={{ textAlign: 'center' }}>
					Copyright © Anicha {new Date().getFullYear()}
				</Footer>
			</Layout>
		);
	}
}

export default App;
