import {useEffect, useState} from "react";

import styled from "styled-components";

const NegStrong = styled.strong`
    color: red;
`

const CalcLi = styled.li`
    display: inline;
    padding: 5px;
`

const CalcButton = styled.button`
    background-color: #07e191; /* Green */
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
`

function Calculator() {
    const [result, setResult] = useState(0);

    const [x, setX] = useState("");
    const [y, setY] = useState("");

    function Addition() {
        const numX = Number(x);
        const numY = Number(y);
        setResult(numX + numY);
    }
    function Subtraction() {
        const numX = Number(x);
        const numY = Number(y);
        setResult(numX - numY);
    }

    function Multiplication() {
        const numX = Number(x);
        const numY = Number(y);
        setResult(numX * numY);
    }

    function Division() {
        const numX = Number(x);
        const numY = Number(y);
        setResult(numX / numY);
    }

    function Power() {
        const numX = Number(x);
        const numY = Number(y);
        for (let i = 0; i < numY; i++) {
            setResult(result*numX);
        }
    }

    function Clear() {
        setX("");
        setY("");
        setResult(0);
    }

    return (
        <div>
            <h2>Calculator Web Application</h2>
            <p>
                <input type="number" value={x} 
                       onChange={(e) => 
                           setX(e.target.value)} id="x" />
                <input type="number" value={y} 
                       onChange={(e) => 
                           setY(e.target.value)} id="y"/>
                <strong>=</strong>
                {result < 0 ?
                    <NegStrong> {result} </NegStrong> :
                    <strong>{result}</strong>
                }
            </p>
            <br/>
            <ul>
                <CalcLi>
                    <CalcButton onClick={Addition}> + </CalcButton>
                </CalcLi>
                <CalcLi>
                    <CalcButton onClick={Subtraction}> - </CalcButton>
                </CalcLi>
                <CalcLi>
                    <CalcButton onClick={Multiplication}> × </CalcButton>
                </CalcLi>
                <CalcLi>
                    <CalcButton onClick={Division}> ÷ </CalcButton>
                </CalcLi>
                <CalcLi>
                    <CalcButton onClick={Power}> x<sup>y </sup></CalcButton>
                </CalcLi>
                <CalcLi>
                    <CalcButton onClick={Clear}> C </CalcButton>
                </CalcLi>
            </ul>
        </div>
    )
}

export default Calculator;