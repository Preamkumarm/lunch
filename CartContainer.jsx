import { motion } from 'framer-motion';
import { RiShoppingBasketFill } from 'react-icons/ri';
import straw from "../img/f1.png"
function CartContainer()
{
    return(<div>
        <div className="w-full flex items-center justify-between ">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={straw}
                alt="image"
                className="w-30 h-[140px] -mt-12"
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                
                className="w-8 h-8 group rounded-full bg-logoColor flex items-center justify-center cursor-pointer"
              >
                <RiShoppingBasketFill className={`text-2xl text-white `} />
              </motion.div>
            </div>
            <div className="w-full flex flex-col gap-2 items-end justify-end">
              <p className="text-white font-semibold text-base md:text-lg">
               
              </p>
              <p className="mt-1 text-black text-sm">
                 Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-white font-semibold">
                  <span className="text-sm text-white">$</span> 
                </p>
              </div>
            </div>
    </div>)
}
export default CartContainer