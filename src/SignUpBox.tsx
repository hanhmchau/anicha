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
		const selections = [[], [], []];
		this.state = {
			difficulties,
			selections
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
							onCheckAll={this.checkAll.bind(this)}
							isAllDisabled={this.isAllDisabled()}
							checkAll={this.isAllChecked()}
							indeterminate={this.isIndeterminate()}
							onSetStatus={this.onSetStatus.bind(this)}
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
	private checkAll(checked: boolean) {
		const newSelections: Selection[][] = [];
		newSelections.forEach(tierSelections => {
			const newTierSelection: Selection[] = [];
			tierSelections.forEach(sel => {
				if (sel.challenge && sel.anime && sel.completed !== checked) {
					newTierSelection.push({
						...sel,
						completed: checked
					});
				} else {
					newTierSelection.push(sel);
				}
			});
			newSelections.push(newTierSelection);
		});
		this.setState({
			selections: newSelections
		});
	}
	private isAllDisabled() {
		const flattenedSelections: Selection[] = [].concat.apply(
			[],
			this.state.selections
		);
		return flattenedSelections.every(sel => !(sel.anime && sel.challenge));
	}
	private isAllChecked() {
		const flattenedSelections: Selection[] = [].concat.apply(
			[],
			this.state.selections
		);
		if (flattenedSelections.every(sel => !(sel.anime && sel.challenge))) {
			return false;
		}
		return flattenedSelections.every(sel => {
			if (sel.anime && sel.challenge) {
				return sel.completed;
			}
			return true;
		});
	}
	private isIndeterminate() {
		const flattenedSelections: Selection[] = [].concat.apply(
			[],
			this.state.selections
		);
		const indeterminate =
			flattenedSelections.some(sel => !sel.completed) &&
			flattenedSelections.some(sel => sel.completed);
		return indeterminate;
	}
	private onSetStatus(
		completed: boolean,
		inputIndex: number,
		tierIndex: number
	) {
		const tierSelection = this.state.selections[tierIndex].slice();
		const replacedSel = tierSelection[inputIndex];
		tierSelection.splice(inputIndex, 1, {
			...replacedSel,
			completed
		});
		const newSelections = this.state.selections.slice();
		newSelections.splice(tierIndex, 1, tierSelection);
		this.setState({
			selections: newSelections
		});
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
			}).slice();
			newSelections.push(sortedSelections);
		});
		// tslint:disable:no-console
		console.log(newSelections);
		this.setState({
			selections: newSelections
		});
	}
	private onSelectChallenge(
		challenge: Challenge,
		inputIndex: number,
		tierIndex: number
	) {
		const tierSelection = this.state.selections[tierIndex].slice();
		const replacedSel = tierSelection[inputIndex];
		tierSelection.splice(inputIndex, 1, {
			...replacedSel,
			challenge
		});
		const newSelections = this.state.selections.slice();
		newSelections.splice(tierIndex, 1, tierSelection);
		this.setState({
			selections: newSelections
		});
	}
	private onSelectAnime(anime: Anime, inputIndex: number, tierIndex: number) {
		const tierSelection = this.state.selections[tierIndex].slice();
		const replacedSel = tierSelection[inputIndex];
		tierSelection.splice(inputIndex, 1, {
			...replacedSel,
			anime
		});
		const newSelections = this.state.selections.slice();
		newSelections.splice(tierIndex, 1, tierSelection);
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
