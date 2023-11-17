import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import aviao from "../../assets/aviao.jpg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Icon } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";

const Home = () => {
  return (
    <>
      <div>
        <div className={styles.uys}>
          <img src={aviao} alt="imagem de avião" />
          <div>
            <p>
              <span className={styles.destaque}>upgrade your sundays</span>
            </p>
          </div>
          <div className={styles.enjoy}>
            <h3>
              Enjoy secret offers up to -70% off the best luxury hotels every
              Sunday.
            </h3>
          </div>
          <Link className={styles.register} to={"/SignUp"}>
            <Button
              variant="contained"
              sx={{
                background: "#6867AC",
                fontFamily: "Roboto Condensed",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "28px",
                textTransform: "uppercase",
                // textDecoration: "none",
                width: "200px",
                padding: "15px 67px 17px 67px",
                borderRadius: "0",
              }}
            >
              Register
            </Button>
          </Link>
          <h4>Discover the experience</h4>
          <Icon>
            <ArrowDownward
              sx={{
                color: "#FFBCD1",
                width: "19.72px",
                height: "20.30px",
                display: "flex",
                justifyContent: "center",
              }}
            />
          </Icon>
        </div>
      </div>
      <div className={styles.information}>
              fffff
      </div>
    </>
  );
};

export default Home;
