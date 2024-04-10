import { useRef, useState } from "react";
import Circle from "./Assets/circle.png";
import Cross from "./Assets/cross.png";

const Container = () => {
    let [data,setData] =  useState(["","","","","","","","",""]);
    const [lock,setLock] = useState(false);
    const [count,setCount] = useState(0);
    const title = useRef(null);

    const box0 = useRef(null);
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
    const box4 = useRef(null);
    const box5 = useRef(null);
    const box6 = useRef(null);
    const box7 = useRef(null);
    const box8 = useRef(null);
    const boxes = [box0,box1,box2,box3,box4,box5,box6,box7,box8];

    const toggle = (e,num)=>{
        if (lock){
            return 0;
        }
        const newData = [...data]
        if (newData[num]==""){
            if (count%2===0){
                e.target.innerHTML = `<img src=${Circle} />`
                newData[num] = "o"
            } else {
                e.target.innerHTML = `<img src=${Cross} />`
                newData[num] = "x"
            }
            setCount(count+1)
            setData(newData)
            console.log(newData)
            winCheck(newData)
        }
    }

    const winCheck = (data)=>{
        if (data[0]==data[1] && data[1]==data[2] && data[2]!==""){
            won(data[0])
        } else if (data[3]==data[4] && data[4]==data[5] && data[5]!==""){
            won(data[3])
        } else if (data[6]==data[7] && data[7]==data[8] && data[8]!==""){
            won(data[6])
        } else if (data[0]==data[3] && data[3]==data[6] && data[6]!==""){
            won(data[0])
        } else if (data[1]==data[4] && data[4]==data[7] && data[7]!==""){
            won(data[1])
        } else if (data[2]==data[5] && data[5]==data[8] && data[8]!==""){
            won(data[2])
        } else if (data[0]==data[4] && data[4]==data[8] && data[8]!==""){
            won(data[0])
        } else if (data[2]==data[4] && data[4]==data[6] && data[6]!==""){
            won(data[2])
        }
    }

    const won = (icon)=>{
        if (icon === "x"){
            title.current.innerHTML = `congratulations <img src=${Cross} /> Won`
        } else {
            title.current.innerHTML = `congratulations <img src=${Circle} /> Won`
        }
        setLock(true)
    }

    const handleRestart = ()=>{
        title.current.innerHTML = "Tic - Toc - Toe";
        setLock(false);
        boxes.forEach(eachbox=>{
            eachbox.current.innerHTML=""
        })
        setData(["","","","","","","","",""])
    }

    return ( 
        <div className="container">
            <h1 className="title" ref={title}>Tic - Toc - Toe</h1>
            <div className="board">
                <div className="row">
                    <div className="box" ref={box0} onClick={(e)=>{toggle(e,0)}}></div>
                    <div className="box" ref={box1} onClick={(e)=>{toggle(e,1)}}></div>
                    <div className="box" ref={box2} onClick={(e)=>{toggle(e,2)}}></div>
                </div>
                <div className="row">
                    <div className="box" ref={box3} onClick={(e)=>{toggle(e,3)}}></div>
                    <div className="box" ref={box4} onClick={(e)=>{toggle(e,4)}}></div>
                    <div className="box" ref={box5} onClick={(e)=>{toggle(e,5)}}></div>
                </div>
                <div className="row">
                    <div className="box" ref={box6} onClick={(e)=>{toggle(e,6)}}></div>
                    <div className="box" ref={box7} onClick={(e)=>{toggle(e,7)}}></div>
                    <div className="box" ref={box8} onClick={(e)=>{toggle(e,8)}}></div>
                </div>
            </div>
            <button onClick={handleRestart}>Restart</button>
        </div>
     );
}
 
export default Container;