import vocaData from "../db/data.json";
import { Link } from "react-router-dom";


export default function DayList(){
 console.log(vocaData);
 console.log(vocaData.days)
    return (<ul className="list_day">
        {vocaData.days.map(day=>(
            <li key={day.id}>
                {/* key가 뭔지 공부하기  */}
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
            </li>
        ))}
     
    </ul>
    );
}