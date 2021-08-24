class ObjectHelper {
    public static isEmpty(obj: any) {
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                return false;
            }
        }
        return true;
    }
}

export default ObjectHelper;