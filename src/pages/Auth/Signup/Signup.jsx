// Import Library's Hook
import { Link } from "react-router-dom";

// Import Module Css
import styles from "./styles.module.scss";

const Signup = () => {
   return (
      <>
         <div className={styles.signup}>
            <div className={styles.signupLeft}>
               <div className={styles.title}>
                  <h4>Sign up</h4>
               </div>
               <form action="">
                  <div>
                     <input type="text" placeholder="Full Name" />
                  </div>
                  <div>
                     <input type="text" placeholder="Username" />
                  </div>
                  <div>
                     <input type="text" placeholder="Password" />
                  </div>
                  <div>
                     <input type="text" placeholder="Email" />
                  </div>
                  <div>
                     <input type="text" placeholder="Phone Number" />
                  </div>

                  <div className={styles.checkboxContract}>
                     <input type="checkbox" name="contract" id="contract" />{" "}
                     <label for="contract">
                        I agree to the terms of services
                     </label>
                  </div>
                  <button>sign up</button>
               </form>
            </div>
            <div className={styles.signupRight}>
               <div>
                  <div className={styles.title}>
                     <h4>Welcome Back!</h4>
                  </div>
                  <p className={styles.text}>
                     To keep connected with us please login with your personal
                     info
                  </p>
                  <Link to="/signin">
                     <button className={styles.btnNavigate}>sign in</button>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default Signup;
