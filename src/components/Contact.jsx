import {CONTACT} from "../constants/index.js";
import {IoIosMail} from "react-icons/io";
import {CiMapPin} from "react-icons/ci";
import {motion} from "framer-motion";

export default function Contact() {
    const email = `${CONTACT.emailPart1}${CONTACT.emailPart2}@${CONTACT.emailPart3}.${CONTACT.emailPart4}`;

    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 0.5}}
                className="my-10 text-center text-4xl">Contact
            </motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1}}
                    className="my-4 flex justify-center items-center gap-2">
                    <CiMapPin/>
                    {CONTACT.address}
                </motion.p>
                <motion.a
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1}}
                    href={`mailto:${email}`} className="flex justify-center items-center gap-2">
                    <IoIosMail className="text-xl"/>
                    MAIL
                </motion.a>
            </div>
        </div>
    );
}