import styles from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";




const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.legal}>
        <h3>
      <span className={styles.cool}>Legal</span>
        </h3>
        <p>Terms</p>
        <p>Privacy</p>


      </div>
      <div className={styles.icons}>
        <FacebookIcon />
        <TwitterIcon />
      </div>

      <div className={styles.language}> 
    
        <p>Language</p>

      

    </div>
            </div>
  );
};

export default Footer;
