import { Component } from "react";
interface State {
    compact: boolean;
    text: string;
    emoji: string;
}
interface Props {
    onConfirm: (comment: {
        text: string;
        emoji: string;
    }) => void;
    onOpen: () => void;
    onUpdate?: () => void;
}
export declare class Tip extends Component<Props, State> {
    state: State;
    componentDidUpdate(nextProps: Props, nextState: State): void;
    render(): JSX.Element;
}
export default Tip;
