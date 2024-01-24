import React, { useState } from "react";
import cls from "./Square.module.scss";

const Square = ({step}) => {
   const {value, setValue} = useState();
   function clickSquare(){
        alert(step)  
 }

    return (
        <div>
            <div className={cls.square} onClick={clickSquare}>
               {value}
            </div>
        </div>
    );
};

export default Square;
