import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import ApiIcon from "@mui/icons-material/Api";

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState<string>("dashboard");
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setSelected(event.currentTarget.id);
  };
  const handleLogout = (event: React.MouseEvent<HTMLElement>) => {
    setSelected(event.currentTarget.id);
    localStorage.removeItem("user77");
    location.reload();
  };

  return (
    // <Box
    //   display={"flex"}
    //   justifyContent={"space-between"}
    //   alignItems={"center"}
    // ></Box>

    <FlexBetween mb={"0.25rem"} p={"0.5rem 0rem"} color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap={"0.75rem"}>
        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <ApiIcon sx={{ fontSize: "35px" }} />

          <Typography variant="h4" fontSize={"16px"}>
            Deep API
          </Typography>
        </Link>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap={"2rem"}>
        <Box sx={{ "&: hover": { color: palette.primary[100] } }}>
          <Link
            id={"dashboard"}
            to={"/"}
            onClick={handleClick}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&: hover": { color: palette.primary[100] } }}>
          <Link
            id={"predictions"}
            to={"/predictions"}
            onClick={handleClick}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>

        <Box sx={{ "&: hover": { color: palette.primary[100] } }}>
          <Link
            id={"logout"}
            to={"/"}
            onClick={handleLogout}
            style={{
              color: selected === "logout" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Logout
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
