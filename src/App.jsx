import Card from "./components/Card.jsx";

import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.div
        className="mt-22 p-12 h-auto flex flex-col justify-evenly items-start md:items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className=" mb-16">
          <h1 className="font-bold text-4xl underline decoration-green-400  text-center mb-4 ">
            GameHub
          </h1>
          <p className="font-bold text-3xl underline decoration-green-300 text-center ">
            Your Ultimate Game Directory
          </p>
        </div>

        <main className=" w-full grid grid-cols-1 gap-10 items-start md:grid-cols-2 lg:grid-cols-4">
          <Card />
        </main>
        <div className="flex gap-4  font-medium">
          <p className=" mt-12 md:mt-16  underline decoration-green-400 hover:decoration-purple-600 hover:decoration-4">
            <a href="https://github.com/Satendra-singh-oos" target="_blank.">
              Github
            </a>
          </p>

          <p className="mt-12  md:mt-16  underline decoration-green-400 hover:decoration-purple-600 hover:decoration-4">
            <a
              href="https://www.linkedin.com/in/satendra-singh1325/"
              target="_blank."
            >
              LinkedIn
            </a>
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default App;
