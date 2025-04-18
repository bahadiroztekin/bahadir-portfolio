import aboutImg from "../assets/about.jpeg"
import {ABOUT_TEXT} from "../constants/index.js";
import {motion} from "framer-motion";

export default function About() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center items-center w-full lg:w-1/2 lg:p-8">
                    <div className="w-96 aspect-square rounded-full overflow-hidden">
                        <img src={aboutImg} alt="about"/>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 font-light">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}