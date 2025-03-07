import styles from "../style"
import { arrowUp } from "../assets"

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[3px] cursor-pointer  `} >
        <div className={`${styles.flexCenter} flex-col   bg-primary w-[100%] h-[100%] hover:bg-[#5a0202d0] rounded-full `}>
          <a href="#started">
          <div className={`${styles.flexStart} flex-row`} >
              <p className="font-poppins font-medium text-[18px] leading-[32px] mr-2 " >
                <span className="text-gradient" >Get</span>
              </p>
              <img src={arrowUp} alt="arrow" className="w-[32px] h-[32px] object-contain " />
          </div>
          <p className="font-poppins font-medium text-[18px] leading-[32px] " >
                <span className="text-gradient" >Started</span>
          </p>
          </a>
        </div>
    </div>
  )


export default GetStarted