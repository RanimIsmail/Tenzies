import React from "react";

export default function Die(props){
    function dots(val){
        switch(val) {
            case 1 :
                return(
                    <div className="oneDot">
                         <div className="dot"> </div> 
                    </div>
                   
                )
             case 2 :
                 return(
                 <div className="two-dots">
                    <div className="dot"> </div><div className="dot"> </div>
                 </div> )
    
             case 3 :
                 return(
                
                 <div className="three-dots">
                    <div className="dot"> </div>
                    <div className="dot"> </div>
                    <div className="dot"> </div>
                 </div> 
                 )
                 
             case 4 :
                return(
                    <div className="four-dots">
                       <div className="dot"> </div>
                       <div className="dot"> </div>
                       <div className="dot"> </div>
                       <div className="dot"> </div>
                    </div>) 
                 
            case 5 :
                 return(
                    <div className="five-dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"> </div>
                        <div className="dot"> </div>
                        </div> 
                 )
            case 6 :
                return(
                    <div className="six-dots">
                        <div className="dot"> </div>
                        <div className="dot"> </div>
                        <div className="dot"> </div>
                        <div className="dot"> </div>
                        <div className="dot"> </div>
                        <div className="dot"> </div>
                    </div>
                )
            default : <></>    
        }
    }
     return(
        <div className="die-box" style={{ backgroundColor : props.isHeld ? "#FA7F08" : "#f4fcfa"}}
        onClick={props.holdDice}> 
            {/* <h2 className="die-num"> {props.value}</h2> */}
            {/* <div className="dot"> </div> */}
            {dots(props.value)}
        

        </div>
     )
}