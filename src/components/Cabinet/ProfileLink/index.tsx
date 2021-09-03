import {connect} from "react-redux";
import {Presenter} from "./Presenter";

const mapStateToProps = (state: any) => ({
    state,
    userAuth: state.user.userAuth,
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
});

const ProfileLink = connect(mapStateToProps, mapDispatchToProps)(Presenter);

export default ProfileLink;