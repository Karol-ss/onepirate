import styles from "./Home.module.css";
import aviao from "../../assets/aviao.jpg";

const Home = () => {
  return (
    <div>
      <div className={styles.uys}>
        <img src={aviao} alt="imagem de avião" />
        <div>
          <p>
            <span className={styles.destaque}>upgrade your sundays</span>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
