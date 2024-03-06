import { styled } from "@mui/system";

export const Container = styled("div")({
  textAlign: "center",
  backgroundColor: "#121212",
  color: "#0ff",
  padding: "20px",
  borderRadius: "10px",
});

export const Header = styled("h2")({
  marginBottom: "10px",
  color: "#0ff",
});

export const Select = styled("select")({
  marginBottom: "10px",
  backgroundColor: "#222",
  color: "#0ff",
  border: "none",
  padding: "5px",
  borderRadius: "5px",
});

export const GridContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: "5px",
});

export const DayContainer = styled("div")(({ month, currentMonth }) => ({
  border: "1px solid #0ff",
  padding: "5px",
  textAlign: "center",
  cursor: "pointer",
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
  padding: "5px",
  textAlign: "center",
});