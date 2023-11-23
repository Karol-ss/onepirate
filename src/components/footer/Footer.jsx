import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        footer
        <div className={styles.legal}> 
            <p> 
                    Legal
            </p>
            <div className={styles.facebook}>
                <p>
                    facebook
                    </p>

                    <div className={styles.tumblr}>
                       <p> 
                        tumblrr
                       </p>
                        </div>
                
                </div>
        </div>
    </div>
  )
}

export default Footer
