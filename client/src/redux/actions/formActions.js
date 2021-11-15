import axios from 'axios'


export const addForm=(form)=> async dispatch=>{
    dispatch({type:'ADD_FORM_REQUEST'})

    try{
        const response = await axios.post('/api/forms/addform',{form})
        console.log(response);
        dispatch({type:'ADD_FORM_SUCCESS'})
    }catch(error){
        dispatch({type:'ADD_FORM_FAILED',payload: error})
        console.log("error aaving")
    }
}






