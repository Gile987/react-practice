import { styled, keyframes } from "@mui/system";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const Container = styled("div")({
  textAlign: "center",
  backgroundColor: "#121212",
  color: "#0ff",
  padding: "1.25rem",
  borderRadius: "0.625rem",
  height: "28.125rem",
});

export const Header = styled("h2")({
  marginBottom: "0.625rem",
  color: "#0ff",
});

export const Select = styled("select")({
  marginBottom: "10px",
  backgroundColor: "#222",
  color: "#0ff",
  border: "none",
  padding: "0.3125rem",
  borderRadius: "0.3125rem",
});

export const GridContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: "0.3125rem",
  height: "18.75rem",
});

export const DayContainer = styled("div")(({ month, currentMonth }) => ({
  border: "1px solid #0ff",
  padding: "0.3125rem",
  textAlign: "center",
  cursor: "pointer",
  height: "1.5rem",
  backgroundColor: month === currentMonth ? "#222" : "#111",
  color: month === currentMonth ? "#0ff" : "#999",
  "&:hover": {
    backgroundColor: month === currentMonth ? "#0ff" : "#bbb",
    color: "#121212",
  },
  "&.calendar-day.clicked": {
    backgroundColor: "#FF69B4",
    color: "#121212",
  },
}));

export const DayNameContainer = styled("div")({
  border: "1px solid #0ff",
  padding: "0.3125rem",
  textAlign: "center",
  height: "1.5rem",
});

export const ArrowButton = styled("button")({
  backgroundColor: "#222",
  color: "#0ff",
  border: "1px solid #0ff",
  borderRadius: "5px",
  padding: "0.3125rem",
  marginLeft: "0.3125rem",
  marginRight: "0.3125rem",
  cursor: "pointer",
  transition: 'transform 0.5s',
  '&:hover': {
    animation: `${pulse} 0.5s ease-in-out infinite`,
  },
});

export const SelectedDateContainer = styled("div")({
  backgroundColor: "#222",
  color: "#0ff",
  padding: "0.3125rem",
  borderRadius: "0.3125rem",
  margin: "0.625rem 1rem",
});

export const SelectedDateText = styled("p")({
  margin: 0,
});