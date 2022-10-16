import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import MentorCard from "../MentorCard";

export default function MatchesList({ winners, off }) {
  return (
    <Grid container rowSpacing={2} columnSpacing={2} mt={2}>
      {winners.map((winner, index) => (
        <Grid item key={winner.mentor.id}>
          <motion.div
            custom={index}
            initial={off ? "visible" : "hidden"}
            animate="visible"
            variants={{
              visible: () => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1 + (winners.length - winner.position + 1),
                  duration: 0.75,
                  ease: "backInOut",
                },
              }),
              hidden: { opacity: 0, y: -100 },
            }}
            key={winner.mentor.id}
            className=""
          >
            <MentorCard data={winner.mentor} percentage={winner.percentage} />
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}
