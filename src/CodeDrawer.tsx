import { Button, Card, Drawer } from 'antd';
import * as React from 'react';
import * as CopyToClipboard from 'react-copy-to-clipboard';
import './styles/signupbox.css';

interface Props {
	showDrawer: boolean;
	onCloseDrawer: (() => void);
	signUpForm: string;
	username: string | undefined;
}

class CodeDrawer extends React.Component<Props, {}> {
	constructor(props: any) {
		super(props);
	}
	public render() {
		return (
			<Drawer
				onClose={this.props.onCloseDrawer}
				title="Sign Up and Turn In Forms"
				placement="right"
				closable={true}
				width="500"
				visible={this.props.showDrawer}>
				<p>
					This is your full sign up form. Post it in{' '}
					<a
						target="_blank"
						href="https://myanimelist.net/forum/?action=message&topic_id=1696289">
						{' '}
						this topic
					</a>
					.
				</p>
				<p>
					If you have already signed up, find your old post&nbsp;
					<a
						target="_blank"
						href={`https://myanimelist.net/forum/search?u=${
							this.props.username
						}&q=&uloc=1&loc=-1`}>
						here
					</a>
					.
				</p>
				<CopyToClipboard text={this.props.signUpForm}>
					<Card
						style={{
							height: '140px',
							overflow: 'auto',
							whiteSpace: 'pre-wrap'
						}}>
						{this.props.signUpForm}
					</Card>
				</CopyToClipboard>
				<div
					style={{
						position: 'absolute',
						bottom: 0,
						width: '100%',
						borderTop: '1px solid #e8e8e8',
						padding: '10px 16px',
						textAlign: 'right',
						left: 0,
						background: '#fff',
						borderRadius: '0 0 4px 4px'
					}}>
					<Button
						style={{
							marginRight: 8
						}}
						onClick={this.props.onCloseDrawer}>
						Close
					</Button>
				</div>
			</Drawer>
		);
	}
}

export default CodeDrawer;
