import PodiumStep from "./PodiumStep";

export default function Podium({ winners, off }) {
  const podium = [7, 5, 3, 1, 0, 2, 4, 6, 8, 9]
    .reduce((podiumOrder, position) => [...podiumOrder, winners[position]], [])
    .filter(Boolean);

  return (
    <div
      style={{
        display: "grid",
        gridAutoFlow: "column dense",
        gap: ".5rem",
        marginTop: "2rem",
        justifyContent: "center",
        justifyItems: "center",
        alignContent: "flex-end",
        alignItems: "flex-end",
        borderBottom: "1px solid #e5e7eb",
        height: 250,
      }}
    >
      {podium.map((winner) => (
        <PodiumStep
          key={winner.mentor.id}
          podium={podium}
          winner={winner}
          off={off}
        />
      ))}
    </div>
  );
}
