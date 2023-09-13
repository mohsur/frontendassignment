import React from 'react'
import './Card.css'
export const Card = ({id,title,tag,status}) => {
    return (
        <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
            <div className=" flex-sb">
                <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
                <div className=" relative" style={{ width : "30px", height : "30px"}}>
                    <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=2000" alt="userimage" />
                    <div className="showStatus"></div>
                </div>
            </div>
            <div  style={{fontWeight : 200}} >
                <p>{title}</p>
            </div>
            <div className="cardTags">
            <div className="tags color-grey"> ... </div>
                {
                    tag?.map((elem, index) => {
                        return <div key={index} className="tags color-grey"> <span>•</span> {elem}</div>
                    })
                }
            </div>
        </div>
      )
}
