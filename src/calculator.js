// import { useState } from 'react';
// import {evaluate} from 'mathjs'
// import "./calc.css"


// function Calculator() {
//     let [result, setResult] = useState('');
//     let [hasdote, sethasDote] = useState(false);
//     let op = ['-', '+', '*', '/'];

//     const checkinput = (text) => {
//         if (text === '÷') return '/';
//         if (text === '×') return '*';
//         return text;

//     }


//     const clickhandler = (e) => {
//         let input = checkinput(e.target.innerText);
//         if (input === '.') {
//             if (hasdote === true) return
//             else sethasDote(true)
//         };

//         if (op.includes(input)) {
//             sethasDote(false)
//         }
//         setResult(result + input);
//     }

//     const clearBtn = (e) => {
//         setResult('');
//         sethasDote(false);
//     }

//     const deleteBtn = (e) => {
//         if(result.endsWith(".")){
//             sethasDote(false);


//         }
//         setResult(result.slice(0, -1));

//     }

//     const equalBtn = (e) => {
//         setResult(String(evaluate(result)));
//         sethasDote(true);

//     }

//     return (
//         <div className="container">
//             <div className="screan">
//                 {result}
//             </div>
//             <div className="buttons">
//                 <button onClick={clearBtn} className="width btn-color">Claer</button>

//                 <button on onClick={deleteBtn} className="btn-color">c</button>

//                 <button onClick={clickhandler} className="btn-color">÷</button>

//                 <button onClick={clickhandler}>7</button>
//                 <button onClick={clickhandler}>8</button>
//                 <button onClick={clickhandler}>9</button>

//                 <button onClick={clickhandler} className="btn-color">×</button>

//                 <button onClick={clickhandler}>4</button>
//                 <button onClick={clickhandler}>5</button>
//                 <button onClick={clickhandler}>6</button>

//                 <button onClick={clickhandler} className="btn-color">-</button>

//                 <button onClick={clickhandler}>1</button>
//                 <button onClick={clickhandler}>2</button>
//                 <button onClick={clickhandler}>3</button>

//                 <button onClick={clickhandler} className="btn-color">+</button>

//                 <button onClick={clickhandler}>0</button>
//                 <button onClick={clickhandler}>.</button>

//                 <button onClick={equalBtn} className="width btn-color">=</button>
//             </div>

//         </div>
//     )
// }
// export default Calculator
///////////////////////
import { useState } from 'react';
import { evaluate } from 'mathjs';
import "./calc.css";
function Calculator() {
    let [result, setResult] = useState('');
    let [dot,setDot]= useState(false);
    let op =['+', '-', '*', '/']

    const checkop=(text)=>{
        if(text==='×') return '*';
        if(text==='÷') return '/';
        return text;
    }

    const clickhandler = (e) => {
        let input = checkop(e.target.innerText);
        if(input==='.'){
            if(dot===true)return;
            else setDot(true);
        }
        if(op.includes(input)){
            setDot(false);
        }
       setResult(result+ input);


    }
    const clearBtn=()=>{
        setResult('');
        setDot(false)

    }
    const deleteBtn=()=>{
        if(result.endsWith(".")){
            setDot(false);
        }

        setResult(result.slice(0,-1));

    }
    const equalBtn=()=>{
        setResult(String(evaluate(result)))
        setDot(true);
        

    }

    return (
        <div  className="container">
            <div contenteditable="true" data-placeholder="Put some Number" className="screan" >
                {result} 
            </div>
            <div className="buttons">
                <button onClick={clearBtn} className="width btn-color">Claer</button>

                <button on onClick={deleteBtn} className="btn-color">c</button>

                <button onClick={clickhandler} className="btn-color">÷</button>

                <button onClick={clickhandler}>7</button>
                <button onClick={clickhandler}>8</button>
                <button onClick={clickhandler}>9</button>

                <button onClick={clickhandler} className="btn-color">×</button>

                <button onClick={clickhandler}>4</button>
                <button onClick={clickhandler}>5</button>
                <button onClick={clickhandler}>6</button>

                <button onClick={clickhandler} className="btn-color">-</button>

                <button onClick={clickhandler}>1</button>
                <button onClick={clickhandler}>2</button>
                <button onClick={clickhandler}>3</button>

                <button onClick={clickhandler} className="btn-color">+</button>

                <button onClick={clickhandler}>0</button>
                <button onClick={clickhandler}>.</button>

                <button onClick={equalBtn} className="width btn-color">=</button>

            </div>
        </div>
    )

}
export default Calculator