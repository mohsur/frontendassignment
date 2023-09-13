import React from "react";
import { useSelector } from "react-redux";
import "./Listboard.css";
import { Card } from "../Card/Card";

const Listboard = () => {
  const { choicedData } = useSelector(
    (state) => state.ChoiceReducer
  );
 console.log(choicedData);
  return (
    choicedData && (
      <div className="ListBoardContainer" style={{ justifyContent: "space-evenly" }}>
        {choicedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="ListBoardCardContainer">
                <div className=" flex-sb">
                  <div className="leftView">
                    { (
                      <>
                        <div
                          className=" relative"
                          style={{ width: "15px", height: "15px", display : 'inline-block' }}
                        >
                          
                        </div>
                      </>
                    )}
                    <span>
                      {" "}
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  
                </div>
                <div className=" flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default Listboard;
