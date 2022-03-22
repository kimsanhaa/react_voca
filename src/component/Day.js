import vocaData from "../db/data.json";

export default function Day() {
    const day= 2;
    const worldList = vocaData.words.filter(word=>(word.day===day))
    console.log(worldList)
    return (<>
        <table>
            <tbody>
                {worldList.map(word => (
                    <tr key={word.id}>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>

                ))}

            </tbody>
        </table>


    </>
    );
}