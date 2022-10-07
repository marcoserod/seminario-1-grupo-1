export const GradientIcon = ({ Icon, width, height }) => {
  return (
    <>
      <svg width={0} height={0} style={{ position: "absolute" }}>
        <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
          <stop offset={0} stopColor="#95ACFF" />
          <stop offset={1} stopColor="#C6A2FF" />
        </linearGradient>
      </svg>
      <Icon sx={{ fill: "url(#linearColors) #C6A2FF", width, height }} />
    </>
  );
};
