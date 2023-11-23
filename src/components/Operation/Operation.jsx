import { Link } from "react-router-dom";
import { Icon } from "@mui/material";
import { Gavel, Sell, Campaign } from "@mui/icons-material";

import listras from "../../assets/fundolistra.png";
import styles from "./Operation.module.css";

const Operation = () => {
  return (
    <div className={styles.info}>
      <img src={listras} alt="" />
          <p>
            <span className={styles.line}>how it works</span>
          </p>
      <div className={styles.warnings}>
        <div className={styles.time}>
          <p>1.</p>
          <Icon
            sx={{
              width: "100%",
              height: "55px",
              marginTop: "1em",
            }}
          >
            <Gavel
              sx={{
                width: "50px",
                height: "50px",
              }}
            />
          </Icon>
          <h2>Appointment every Wednesday 9am.</h2>
        </div>
        <div className={styles.offer}>
          <p>2.</p>
          <Icon
            sx={{
              width: "100%",
              height: "55px",
              marginTop: "1em",
            }}
          >
            <Sell
              sx={{
                width: "50px",
                height: "50px",
              }}
            />
          </Icon>
          <h2>
            First come, first served. Our offers are in limited quantities, so
            be quick.
          </h2>
        </div>
        <div className={styles.notice}>
          <p>3.</p>
          <Icon
            sx={{
              width: "100%",
              height: "55px",
              marginTop: "1em",
            }}
          >
            <Campaign
              sx={{
                width: "50px",
                height: "50px",
              }}
            />
          </Icon>
          <h2>
            New offers every week. New experiences, new surprises. Your Sundays
            will no longer be alike.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Operation;
