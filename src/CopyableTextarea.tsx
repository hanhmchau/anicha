import { Button } from 'antd';
import * as React from 'react';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as CopyToClipboard from 'react-copy-to-clipboard';
import './styles/signupbox.css';

interface Props {
	copyableContent: string;
	height?: number;
}

interface State {
	showCopyButton: boolean;
	copied: boolean;
}

class CopyableTextArea extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			showCopyButton: false,
			copied: false
		};
	}
	public render() {
		const { copyableContent, height = 100 } = { ...this.props };
		return (
			<div
				className="copyable-container"
				style={{
					height: `${height}px`
				}}
				onMouseEnter={() => this.showCopyButton()}
				onMouseLeave={() => this.hideCopyButton()}>
				<ReactCSSTransitionGroup
					transitionName="fade"
					transitionEnterTimeout={100}
					transitionLeaveTimeout={200}>
					{this.state.showCopyButton ? (
						<div key="clip">
							<CopyToClipboard
								onCopy={() => this.onCopy()}
								text={copyableContent}>
								<Button
									style={{
										height: `${height}px`
									}}>
									{this.state.copied ? 'Copied' : 'Copy'}
								</Button>
							</CopyToClipboard>
						</div>
					) : (
						<div
							key="content"
							style={{
								padding: '18px'
							}}>
							{copyableContent}
						</div>
					)}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
	private onCopy() {
		this.setState({
			copied: true
		});
	}
	private showCopyButton() {
		this.setState({
			showCopyButton: true,
			copied: false
		});
	}
	private hideCopyButton() {
		this.setState({
			showCopyButton: false,
			copied: false
		});
	}
}

export default CopyableTextArea;
