import { ADD_TO_LIST} from "./constants";
const initialState=[];
export const reducer=(state=initialState,action)=>{
   switch(action.type){
     case ADD_TO_LIST:
        return[
           ...state,
           action.data
        ]
     default:
         return state
   }
}