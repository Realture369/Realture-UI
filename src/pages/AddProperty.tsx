import { motion } from "framer-motion";
import { FC } from "react";

const AddProperty: FC = () => {
  return (
    <motion.div
      className="container-fluid bg-transparent mb-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      style={{ padding: "35px" }}
    >
      <div className="modal-dialog modal-xl"></div>
    </motion.div>
  );
};

export default AddProperty;
