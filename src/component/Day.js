import vocaData from "../db/data.json";
import {useParams} from "react-router-dom";
import Wrod from "./Word";

export default function Day() {
    const day= useParams().day;
    console.log(day)
    const worldList = vocaData.words.filter(word=>word.day===Number(day))
     console.log(worldList)

   
   
    return (
    <>
    <h2>Day {day}</h2>
        <table>
            <tbody>
                {worldList.map(word => (
                    <Wrod word={word} key={word.id}/>

                ))}

            </tbody>
        </table>


    </>
    );
}