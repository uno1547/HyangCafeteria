import { useState } from "react";
import ricepan from "../../../img/천밥.png";
import Button from "../components/Button/Button";
import style from "./EnqueuePage.module.css"
const EnqueuePage = () => {

    const [loading, setLoading] = useState(false);

    const NumberTicketHandler = async () => {
        setLoading(true);
        console.log("번호표 뽑음!");

        try {
            const TicketNumber = await fetch("", {
                method: "POST"
            })
            alert("번호표를 뽑았습니다.")
        }
        catch (error) {
            alert("오류발생")
        }finally{
            setLoading(false)
        }
    }
    return (
        <>
            <h1>번호표뽑기</h1>
            <div className={style.name}>천원의 아침밥[번호표]</div>
            <div>
                <img src={ricepan} alt="" className={style.img}/>
            </div>
            <div>
                <Button text="번호표뽑기" handler={NumberTicketHandler} />
            </div>
        </>
    )
}

export default EnqueuePage;