import vocaData from "../db/data.json";


export default function DayList(){
 console.log(vocaData);
    return (<ul className="list_day">
        {vocaData.days.map(day=>(
            <li key={day.id}>Day {day.day}
            </li>
        ))}
     
    </ul>
    );
}