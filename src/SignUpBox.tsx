import { Layout } from 'antd';
import * as React from 'react';
import { difficulties } from './consts';
import Anime from './models/anime';
import Challenge from './models/challenge';
import Difficulty from './models/difficulty';
import Selection from './models/selection';
import MultiTierBox from './MultiTierBox';
import SignUpInfo from './SignUpInfo';
import './styles/signupbox.css';
const { Content } = Layout;

interface State {
	difficulties: Difficulty[];
	chosenDiff?: Difficulty;
	username?: string;
	selections: Selection[][];
}

class SignUpBox extends React.Component<{}, State> {
	constructor(props: any) {
		super(props);
		this.state = {
			difficulties,
			selections: [[], [], []]
		};
	}
	public render() {
		return (
			<Content style={{ padding: '0 100px' }}>
				<div style={{ background: '#fff', padding: 24 }}>
					<SignUpInfo
						username={this.state.username}
						onSetUsername={this.onSetUsername.bind(this)}
						onChosenDiff={this.onChosenDiff.bind(this)}
						difficulties={this.state.difficulties}
					/>
					{this.state.chosenDiff && (
						<MultiTierBox
							onSelectAnime={this.onSelectAnime.bind(this)}
							onSort={this.onSort.bind(this)}
							selections={this.state.selections}
							chosenDiff={this.state.chosenDiff}
							onSelect={this.onSelectChallenge.bind(this)}
						/>
					)}
				</div>
			</Content>
		);
	}
	private onSort() {
		const newSelections: Selection[][] = [];
		this.state.selections.forEach(tierSelections => {
			const sortedSelections = tierSelections.sort((a, b) => {
				if (!a.challenge && b.challenge) {
					return 1;
				}
				if (a.challenge && !b.challenge) {
					return -1;
				}
				if (!a.challenge && !b.challenge) {
					return 0;
				}
				return a.challenge!.id - b.challenge!.id;
			});
			newSelections.push(sortedSelections);
		});
		this.setState({
			selections: newSelections
		});
	}
	private onSelectChallenge(
		challenge: Challenge,
		inputIndex: number,
		tierIndex: number
	) {
		const newSelections = this.state.selections.slice();
		const currentSelection = newSelections[tierIndex][inputIndex];
		newSelections[tierIndex][inputIndex] = {
			...currentSelection,
			challenge
		};
		this.setState({
			selections: newSelections
		});
	}
	private onSelectAnime(
		anime: Anime,
		inputIndex: number,
		tierIndex: number
	) {
		const newSelections = this.state.selections.slice();
		const currentSelection = newSelections[tierIndex][inputIndex];
		newSelections[tierIndex][inputIndex] = {
			...currentSelection,
			anime
		};
		this.setState({
			selections: newSelections
		});
	}
	private onChosenDiff(chosenDiff: Difficulty): void {
		const selections = this.getSelections(chosenDiff);
		this.setState({
			chosenDiff,
			selections
		});
	}
	private onSetUsername(username: string): void {
		this.setState({
			username
		});
	}
	private getSelections(chosenDiff: Difficulty) {
		if (!chosenDiff) {
			return [[], [], []];
		}
		const selections: Selection[][] = [];
		chosenDiff.required.forEach((requiredValue, index) => {
			const currentSelections = this.state.selections[index];
			const inner: Selection[] = new Array();
			for (let i = 0; i < requiredValue; i++) {
				const curSel = currentSelections[i];
				const newSel = new Selection();
				if (curSel) {
					newSel.challenge = curSel.challenge;
					newSel.anime = curSel.anime;
				}
				inner.push(newSel);
			}
			selections.push(inner);
		});
		return selections;
	}
}

export default SignUpBox;
