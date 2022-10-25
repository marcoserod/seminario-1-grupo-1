import { Avatar } from "@mui/material";
import { motion } from "framer-motion";

export default function PodiumStep({ podium, winner, off }) {
  const offset = podium.length - winner.position;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        placeContent: "center",
      }}
    >
      <motion.div
        style={{
          alignSelf: "center",
          marginBottom: ".25rem",
        }}
        initial={off ? "visible" : "hidden"}
        animate="visible"
        variants={{
          visible: {
            opacity: 1,
            transition: {
              delay: 1 + (offset + 2),
              duration: 0.75,
            },
          },
          hidden: { opacity: 0 },
        }}
      >
        <Avatar src={winner.img} />
      </motion.div>

      <motion.div
        style={{
          width: "4rem",
          placeContent: "center",
          display: "flex",
          borderTopLeftRadius: ".5rem",
          borderTopRightRadius: ".5rem",
          borderColor: "#794de8",
          backgroundColor: "#af7bff",
          marginBottom: -1,
          filter: `opacity(${0.1 + offset / podium.length})`,
        }}
        initial={off ? "visible" : "hidden"}
        animate="visible"
        variants={{
          visible: {
            height: 150 * (offset / podium.length),
            opacity: 1,
            transition: {
              delay: 1 + offset,
              duration: 2,
              ease: "backInOut",
            },
          },
          hidden: { opacity: 0, height: 0 },
        }}
      >
        <span style={{ color: "white", alignSelf: "flex-end" }}>
          {winner.position + 1}
        </span>
      </motion.div>
    </div>
  );
}
