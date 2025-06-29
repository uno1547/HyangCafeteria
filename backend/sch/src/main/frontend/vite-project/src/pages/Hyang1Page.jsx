import TodayMenu from "../components/Hyang1/TodayMenu"
import hyang1PageStyle from "./Hyang1Page.module.css"

const Hyang1 = () => {
  const today = new Date()
  const year = today.getFullYear();         // 2025
  const month = today.getMonth() + 1;       // 4 (주의: 0부터 시작함)
  const date = today.getDate();             // 12
  const formatted = `${year}년 ${month}월 ${date}일`;

  return (
    <>
      <h2 className={hyang1PageStyle["cafeteria-name"]}>향설생활관1</h2>
      <h3 className={hyang1PageStyle["date-text"]}>{formatted}</h3>
      <TodayMenu/>
    </>
  )
}

export default Hyang1