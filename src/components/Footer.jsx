import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"
import styles from "../style"


const Footer = () =>  (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `} >
        <div className="flex-1 flex flex-col justify-start mr-10" >
          <img src={logo} alt="hoobank" 
          className="w-[266px] h-[72px] object-contain " />
          <p className={`${styles.paragraph} mt-4 max-w-[318px]`} >A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10" >
            {footerLinks.map((footerLink)=> (
              <div key={footerLink.id} classNa me="flex flex-col ss:my-0 my-4 min-w-[150px]" >
                <h4 className="font-poppins font-medium text-[19px] leading-[27px] text-white " >
                  {footerLink.title}
                </h4> 
                <ul className="list-none mt-4" >
                  {footerLink.links.map((link, index)=>(
                      <li key={link.name} className={`font-poppins font-normal text-[15px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4 `} >
                        {link.name}
                      </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      
      <div className="w-full -mb-4 flex justify-between items-center md:flex-row flex-col pt-8 border-t-[1px] border-t-[#3f3e45]" >
        
        <p className="font-poppins font-normal text-center text-[18px] mt-2 text-dimWhite ">
          2024 SuoBank. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-2 mt-1">
            {socialMedia.map((social, index) => (
              <img 
                key={social.id} 
                src={social.icon} 
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-4' : 'mr-0'}  `}
                />
            ))}
        </div>
      </div>
    </section>
  )


export default Footer