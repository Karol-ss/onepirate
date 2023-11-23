import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import aviao from "../../assets/aviao.jpg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Icon } from "@mui/material";
import { ArrowDownward, AttachMoney, Deck, Sailing } from "@mui/icons-material";
import listras from "../../assets/fundolistra.png";
import Categories from "../../components/Categories/Categories";

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
            <div className={styles.enjoy}>
              <h3>
                Enjoy secret offers up to -70% off the best luxury hotels every
                Sunday.
              </h3>
            </div>

            <Button
              className={styles.register}
              href="SignUp"
              variant="contained"
              sx={{
                background: "#6867AC",
                fontFamily: "Roboto Condensed",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "28px",
                textTransform: "uppercase",
                textDecoration: "none",
                width: "200px",
                padding: "15px 67px 17px 67px",
                borderRadius: "0",
                display: "flex",
                alignItems: "center",
              }}
            >
              Register
            </Button>

            <h4>Discover the experience</h4>
            <Icon
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ArrowDownward
                sx={{
                  color: "#FFBCD1",
                  width: "19.72px",
                  height: "20.30px",
                }}
              />
            </Icon>
          </div>
        </div>
      </div>
      <div className={styles.info}>
       
          <img src={listras} alt="" />
          <div className={styles.sunshade}>
            <Icon
              sx={{
                width: "100%",
                height: "55px",

                marginTop: -75,
              }}
            >
              <Deck
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </Icon>
            <h1>The best luxury hotels</h1>
            <h2>
              From the latest trendy boutique hotel to the iconic palace with
              XXL pool, go for a mini-vacation just a few subway stops away from
              your home.
            </h2>
          </div>
          <div className={styles.boat}>
            <Icon
              sx={{
                width: "100%",
                height: "55px",

                marginTop: -7,
              }}
            >
              <Sailing
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </Icon>
            <h1>New experiences</h1>
            <h2>
              Privatize a pool, take a Japanese bath or wake up in 900m2 of
              garden... your Sundays will not be alike.
            </h2>
          </div>
          <div className={styles.money}>
            <Icon
              sx={{
                width: "100%",
                height: "55px",
                display: "flex",
                justifyContent: "flex-end",
                marginTop: -7,
              }}
            >
              <AttachMoney
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </Icon>
            <h1>Exclusive rates</h1>
            <h2>
              By registering, you will access specially negotiated rates that
              you will not find anywhere else.
            </h2>
          </div>
        </div>
    
      <Categories />
    </>
  );
};

export default Home;
