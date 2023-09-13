import React, { useEffect, useState } from "react";
import { TiThList } from "react-icons/ti";
import "./Navbar.css";
import { useDispatch, useSelector} from "react-redux";
import { choicedData } from "../../fetching/fetchingdata";

const getGroup = () => {
   
  
    if(localStorage.getItem("group")){
      return localStorage.getItem("group");
    }else{
      return "status";
    }
  }
  
  const getOrder = () => {
    if(localStorage.getItem("order")){
      return localStorage.getItem("order");
    }else{
      return "priority";
    }
  }
const Navbar= () => {
    const [displayOnClick, setDisplayOnClick] = useState(false);
    const dispatch = useDispatch();
    const {queries, userqueries} = useSelector(state => state.itemreducer);
    const [groupValue, setGroupValue] = useState(getGroup());
    const [orderValue, setOrderValue] = useState(getOrder());
  
    const handleGroupValue = (e, valueBool) => {
      if(valueBool){
        setGroupValue(e.target.value);
        setDisplayOnClick(!displayOnClick);
        localStorage.setItem("group", e.target.value);
      }else{
        setOrderValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("order", e.target.value);
      }
    }
  
    useEffect(() => {
      if(groupValue === 'user'){
        dispatch(choicedData(groupValue, {
          queries, userqueries
        }, orderValue))
      }else{
        dispatch(choicedData(groupValue, queries, orderValue));
      }
    }, [queries, dispatch, groupValue, userqueries, orderValue]);
   
    
    return (
      <div className="Nav-header" style={{paddingLeft : "10px"}}>
        <div className="showButton">
          <button
            className="p-20 f-20 btn"
            onClick={() => setDisplayOnClick(!displayOnClick)}
          >
            {" "}
            <TiThList /> Display
          </button>
          {displayOnClick && (
            <>
              <div className="dropDown flex-gap-10 p-10">
                <div className="selectGroup flex-sb">
                  <span>Grouping</span>
                  <select value={groupValue} onChange={(e) => handleGroupValue(e, true)} className="selectStyle" name="group" id="group">
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                  </select>
                </div>
                <div className="selectGroup flex-sb">
                  <span>Ordering</span>
                  <select value={orderValue} onChange={(e) => handleGroupValue(e, false)} className="selectStyle" name="order" id="order">
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                  </select>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };


export default Navbar
