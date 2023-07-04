import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";
import landing from "./ladingbg.jpg";

function Detail() {
  const navigate = useNavigate();
  const goToHome = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className={styles.landing}>
      <img src={landing} alt="" />
      <button onClick={goToHome}>Home</button>
    </div>
  );
}

export default Detail;
