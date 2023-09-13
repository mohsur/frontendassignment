import axios from 'axios';

export const Datafetching = () => async (dispatch) =>{
    try {
        dispatch({type : 'CALL'})
    
        const {data} = await axios.get(`https://api.quicksell.co/v1/internal/frontend-assignment/`);
        console.log(data);
        dispatch({type : 'CALL_SUCCESS', payload : data});

    } catch (error) {
        dispatch({type : 'CALL_FAILURE'})
    }
}

export const choicedData = (group, queries, orderValue) => async (dispatch) =>{
    try {
        dispatch({type : 'CHOICE_CALL'})

        let user = false;
        let items = new Set();
        let arr = [], choicedData = [];

        if(group === 'status'){
            queries.forEach((x) => {
                items.add(x.status);
            })
    
            arr = [...items];
    
            arr.forEach((x, index) => {
                let arr = queries.filter((y) => {
                    return x === y.status;
                })
                choicedData.push({
                    [index] : {
                        title : x,
                        value : arr
                    }
                })
            })
        }else if(group === 'user'){
            user = true;
            queries?.userqueries?.forEach((x, index) => {
                arr = queries?.queries?.filter((Felem) => {
                    return x.id === Felem.userId;
                })

                choicedData.push({
                    [index] : {
                        title : x.name,
                        value : arr
                    }
                })
            })
        }else{
            let prior_list = ["No priority", "Low", "Medium", "High", "Urgent"];

            prior_list.forEach((x, index) => {
                arr = queries.filter((y) => {
                    return index === y.priority;
                })

                choicedData.push({
                    [index] : {
                        title : x,
                        value : arr
                    }
                })
            })
        }

        if(orderValue === "title"){
            choicedData.forEach((x, index) => {
                x[index]?.value?.sort((a, b) => a.title.localeCompare(b.title))
            })
        }

        if(orderValue === "priority"){
            choicedData.forEach((x, index) => {
                x[index]?.value?.sort((a, b) => b.priority - a.priority)
            })
        }
        
        dispatch({type : 'CHOICE_CALL_SUCCESS', payload : {choicedData, user}});

    } catch (error) {
        dispatch({type : 'CHOICE_CALL_FAILURE', payload : error.message})
    }
}



