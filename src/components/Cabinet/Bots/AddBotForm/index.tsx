import {Presenter} from "./Presenter";
import {addBot} from "../../../../redux/actions";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => {
    return {
        state,
        addBotLoader: state.bots.addBotLoader,
    };
};
const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    addBot: (name: string, apiKey: string) => dispatch(addBot(name, apiKey)),
});

const AddBotForm = connect(mapStateToProps, mapDispatchToProps)(Presenter);
export default AddBotForm;
