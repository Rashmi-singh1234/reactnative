import { ADD_TO_LIST} from "./constants";

export function addToList(item){
    return {
        type:ADD_TO_LIST,
        data:item,
    }
}
