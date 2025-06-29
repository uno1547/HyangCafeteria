import { startTransition, useState } from "react";
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
            <h1>현재 대기</h1>
            {/* <div className={style.content}>
                <h2>20명</h2>
                <Button text="번호표뽑기" handler={NumberTicketHandler} />
            </div> */}
            <div className={style.wrapper}>
                <div className={style["cnt-div"]}>
                    <div className={style.stock}>
                        <span className={style.cntH}>잔여 수량</span>
                        <div>
                            <span className={style.cntV}>{`${20} / 100`}</span>
                            <span className={style.cntH}>개</span>
                        </div>
                        {/* <span className = {style.cntV}>{`${quantity ? quantity: 50} / 100 개`}</span> */}
                        {/* <span className = {style.cntV}>{`${quantity ? quantity: 50} / 100`}</span> */}
                    </div>
                    <div className={style.wait}>
                        <span className={style.cntH}>대기 인원 수</span>
                        <div>
                            <span className={style.cntV}>{15}</span>
                            <span className={style.cntH}>명</span>
                        </div>
                        {/* <span className = {style.cntV}>{`${waitCnt ? waitCnt : 5} 명`}</span> */}
                        {/* <span className = {style.cntV}>{`${waitCnt ? waitCnt : 5}`}</span> */}
                    </div>
                </div>
                <div className={style["btn-div"]} onClick = {NumberTicketHandler}>줄서기</div>
            </div>
        </>
    )
}

export default EnqueuePage;