import {connect} from "react-redux";
import {Presenter} from "./Presenter";
import {getBots} from "../../../redux/actions";

const mapStateToProps = (state: any) => ({
    state,
    getBotsLoader: state.bots.getBotsLoader,
    bots: state.bots.bots
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    getBots: () => dispatch(getBots()),
});

const Bots = connect(mapStateToProps, mapDispatchToProps)(Presenter);

export default Bots;
