import ObjectHelper from "../../helpers/ObjectHelper";

class HasAutorize {
    public static execute(userAuth: any) {
        if (ObjectHelper.isEmpty(userAuth)) {
            return false;
        }
        if (userAuth.status !== 200) {
            return false;
        }
        return true;
    }
}

export default HasAutorize;