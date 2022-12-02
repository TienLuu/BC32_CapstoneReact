// Import Library's Hook
import { Link } from "react-router-dom";

// Import Module Css
import styles from "./styles.module.scss";

const Signin = () => {
   return (
      <div className={styles.signin}>
         <div className={styles.signinLeft}>
            <div className={styles.title}>
               <h4>Sign in</h4>
            </div>
            <form action="">
               <div>
                  <input type="text" placeholder="Username" />
               </div>
               <div>
                  <input type="text" placeholder="Password" />
               </div>
               <div className={styles.lookingFor}>
                  <p>
                     Forgot your password?<span> Or Resigter</span>
                  </p>
               </div>
               <button>sign in</button>
            </form>
         </div>
         <div className={styles.signinRight}>
            <div>
               <div className={styles.title}>
                  <h4>Hello, Friend!</h4>
               </div>
               <p className={styles.text}>
                  Enter your personal details and start journey with us
               </p>
               <Link to="/signup">
                  <button className={styles.btnNavigate}>sign Up</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Signin;
