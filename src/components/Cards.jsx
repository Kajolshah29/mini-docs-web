import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

function Cards({ data , reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={.1}  dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className=" flex-wrap relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm mt-5 leading-tight font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full   left-0 ">
        <div className="flex items-center justify-between py-3 px-8 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center text-zinc-800">
            {data.close ? (
              <IoIosClose color="#fff" />
            ) : (
              <LuDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>
        {
          data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue"?"bg-blue-400":"bg-green-400"} flex items-center justify-center`}>
              <h3 className="text-sm text-zinc-800 font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}

      </div>
    </motion.div>
  );
}

export default Cards;
