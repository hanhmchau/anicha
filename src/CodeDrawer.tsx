import { Button, Divider, Drawer } from 'antd';
import * as React from 'react';
import CopyableTextArea from './CopyableTextarea';
import Difficulty from './models/difficulty';
import Selection from './models/selection';
import './styles/signupbox.css';

interface Props {
	showDrawer: boolean;
	chosenDiff: Difficulty | undefined;
	selections: Selection[][];
	onCloseDrawer: (() => void);
	username: string | undefined;
	signUpForm: string;
	turnInForm: string;
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
					This is your full <b>sign up form</b>. Post it in{' '}
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
							this.props.username || '####'
						}&q=&uloc=1&loc=-1`}>
						here
					</a>
					.
				</p>
				<CopyableTextArea copyableContent={this.props.signUpForm} />
				<Divider />
				<p>
					This is your <b>turn in form</b>. Post it in{' '}
					<a
						target="_blank"
						href="https://myanimelist.net/forum/?action=message&topic_id=1696289">
						the same topic
					</a>
					.
				</p>
				<CopyableTextArea copyableContent={this.props.turnInForm} />
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
