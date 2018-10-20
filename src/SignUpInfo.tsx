import { Col, Input, Radio, Row } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import * as React from 'react';
import Difficulty from './models/difficulty';
import './styles/signupinfo.css';

interface Props {
	chosenDiff?: Difficulty,
	difficulties: Difficulty[];
	username?: string;
	onSetUsername: (username: string) => void;
	onChosenDiff: (diff: Difficulty) => void;
}

export default (props: Props) => (
	<div>
		<Row>
			<Col span={7}>
				<div className="label">Username:</div>
				<Input
					placeholder="Username"
					value={props.username}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						props.onSetUsername(e.target.value);
					}}
				/>
			</Col>
		</Row>
		<Row>
			<div className="label">Difficulty:</div>
			<Radio.Group
				onChange={(e: RadioChangeEvent) => {
					props.onChosenDiff(e.target.value);
				}}
				buttonStyle="solid">
				{props.difficulties.map(diff => (
					<Radio.Button key={diff.name} value={diff}>
						{diff.name}
					</Radio.Button>
				))}
			</Radio.Group>
		</Row>
	</div>
);
