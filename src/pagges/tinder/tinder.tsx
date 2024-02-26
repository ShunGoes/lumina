import { useState } from "react";
import Img1 from "../../assets/img1.jpg";
import Img2 from "../../assets/img2.jpg";
import Img3 from "../../assets/img3.jpg";
import Img4 from "../../assets/img4.jpg";

import { motion, Variants, AnimatePresence } from "framer-motion";

const images = [
  {
    img: Img1,
    id: 0,
  },
  {
    img: Img2,
    id: 1,
  },
  {
    img: Img3,
    id: 2,
  },
  {
    img: Img4,
    id: 3,
  },
];

const Tinder = () => {
  const [[imageId, direction], setImageId] = useState<number[]>([0,0]);

  const add = () => {
    imageId < images.length - 1
      ? setImageId((prev) => [prev[0] + 1,  1, ] )
      : setImageId([0, 1]);
      
  };
  console.log(direction)
  const remove = () => {
    if (imageId === 0) setImageId( [images.length - 1, -1]);
    setImageId((prev) => [prev[0] - 1, -1]);
  };

  const overlay_variants: Variants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -500 : 500
    }),
    visible: () => ({
      x: 0,
      opacity: 1,
    }),
    leave: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    })
  };

  return (
    <div className="flex flex-col items-center">
      <AnimatePresence mode="wait" custom={direction}>
      {images.map(
        (obj) =>
          imageId === obj.id && (
              <motion.div
                variants={overlay_variants}
                initial="hidden"
                animate="visible"
                exit={{  opacity: 0, }}
                className="h-[10rem] w-[8rem]"
                key={obj.id}
                custom={direction}
              >
                <img
                  src={obj.img}
                  alt="pics"
                  className="h-full w-full object-fit"
                />
              </motion.div>
          )
      )}
            </AnimatePresence>

      <div className="flex gap-4">
        <button onClick={remove}> cancel</button>
        <button onClick={add}> add</button>
      </div>
    </div>
  );
};

export default Tinder;
