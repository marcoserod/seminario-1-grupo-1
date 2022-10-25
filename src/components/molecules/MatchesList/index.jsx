import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import MentorCard from "../MentorCard";
import { sort } from "../../../utils";

export default function MatchesList({ winners, off }) {
  const location = useLocation();
  const parsedQuery = queryString.parse(location.search);
  const { view = "list", qtyView = 1 } = parsedQuery;

  const filterData = (data) => {
    let filteredData = data;

    if (parsedQuery.skills) {
      // eslint-disable-next-line no-unused-expressions
      [undefined, "string"].includes(typeof parsedQuery.skills)
        ? (filteredData = data.filter((mentor) =>
            mentor.skills.includes(parsedQuery.skills)
          ))
        : (filteredData = data.filter((mentor) =>
            parsedQuery.skills.every((skill) => mentor.skills.includes(skill))
          ));
    }

    if (parsedQuery.minExp) {
      filteredData = filteredData.filter(
        (mentor) => mentor.exp >= parsedQuery.minExp
      );
    }
    if (parsedQuery.maxExp) {
      filteredData = filteredData.filter(
        (mentor) => mentor.exp <= parsedQuery.maxExp
      );
    }

    if (parsedQuery.services) {
      // eslint-disable-next-line no-unused-expressions
      [undefined, "string"].includes(typeof parsedQuery.services)
        ? (filteredData = filteredData.filter((mentor) =>
            mentor.services.includes(parsedQuery.services)
          ))
        : (filteredData = filteredData.filter((mentor) =>
            parsedQuery.services.every((service) =>
              mentor.services.includes(service)
            )
          ));
    }

    if (parsedQuery.rating) {
      filteredData = filteredData.filter(
        (mentor) => mentor.rating >= parsedQuery.rating
      );
    }
    const sortedData = sort(
      filteredData,
      parsedQuery.sort === "recommended" ? "percentage" : parsedQuery.sort
    );

    if (parsedQuery.sort === "recommended") {
      const recommended = sortedData.filter((mentor) => mentor.recommended);
      const notRecommended = sortedData.filter((mentor) => !mentor.recommended);
      return [...recommended, ...notRecommended];
    }
    return sortedData;
  };

  const data = filterData(winners);

  return (
    <Grid container rowSpacing={2} columnSpacing={2} mt={2}>
      {data.map((winner, index) => (
        <Grid
          item
          key={winner.id}
          lg={view === "list" ? 12 / qtyView : "auto"}
          md={view === "list" ? 12 : "auto"}
          xs={12}
          sx={{ display: "flex" }}
        >
          <motion.div
            style={{ display: "flex" }}
            custom={index}
            initial={off ? "visible" : "hidden"}
            animate="visible"
            variants={{
              visible: () => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1 + (3 - winner.position + 1),
                  duration: 0.75,
                  ease: "backInOut",
                },
              }),
              hidden: { opacity: 0, y: -100 },
            }}
            key={winner.id}
            className=""
          >
            <MentorCard
              data={winner}
              percentage={winner.percentage}
              matchedSkills={winner.matchedSkills}
              unmatchedSkills={winner.unmatchedSkills}
              view={view}
            />
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}
