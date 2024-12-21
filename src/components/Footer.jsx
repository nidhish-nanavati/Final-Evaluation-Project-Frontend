import React from 'react'
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.formBot}>
            <div className={styles.formBotTitle}>

            </div>
            <div>
            Made with ❤️ by @cuvette
            </div>
        </div>
        <div className={styles.product}>
            <div className={styles.productTitle}>
                Product
            </div>
            <div>
                Status<img src='/send.png' height='16' width='16' />
            </div>
            <div>
                Documentation<img src='' height='16' width='16' />
            </div>
            <div>
                Roadmap<img src='' height='16' width='16' />
            </div>
            <div>
                Pricing<img src='' height='16' width='16' />
            </div>
        </div>
        <div className={styles.community}>
            <div className={styles.communityTitle}>
                Community
            </div>
            <div>
                Discord<img src='' height='16' width='16' />
            </div>
            <div>
                Github repository<img src='' height='16' width='16' />
            </div>
            <div>
                Twitter<img src='' height='16' width='16' />
            </div>
            <div>
                Linkedin<img src='' height='16' width='16' />
            </div>
            <div>
                OSS Friends
            </div>
        </div>
        <div className={styles.company}>
            <div className={styles.companyTitle}>
                Community
            </div>
            <div>
                About
            </div>
            <div>
                Contact
            </div>
            <div>
                Terms of Service
            </div>
            <div>
                Privacy Policy
            </div>
        </div>
    </footer>
  )
}

export default Footer
