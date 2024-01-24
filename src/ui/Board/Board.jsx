import React from "react";
import Square from "../Square/Square";
import cls from "./Board.module.scss";

const Board = ({step}) => {
    return (
        <div className="board">
            <div className={cls.row} id={cls.firstRow}>
                <div className={cls.column} id={cls.firstCol}>
                    <Square step={step}/>
                    <Square step={step}/>
                    <Square step={step}/>
                </div>
            </div>
            <div className={cls.row} id={cls.secondRow}>
                <div className={cls.column} id={cls.secondCol}>
                    <Square step={step}/>
                    <Square step={step}/>
                    <Square step={step}/>
                </div>
            </div>
            <div className={cls.row} id={cls.thirdRow}>
                <div className={cls.column} id={cls.thirdCol}>
                    <Square step={step}/>
                    <Square step={step}/>
                    <Square step={step}/>
                </div>
            </div>
        </div>
    );
};

export default Board;
