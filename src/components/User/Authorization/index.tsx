import {connect} from "react-redux";
import {Presenter} from "./Presenter";
import {getCurrentUser} from "../../../redux/actions";

const mapStateToProps = (state: any) => ({
    state,
    getUserAuthLoader: state.user.getUserAuthLoader,
    userAuth: state.user.userAuth,
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    getCurrentUser: () => dispatch(getCurrentUser()),
});

const Authorization = connect(mapStateToProps, mapDispatchToProps)(Presenter);

export default Authorization;