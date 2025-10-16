import { IconButton } from "@mui/material";

const CustomIconButton = ({
  Icon,
  bgColor = "#FF4444",
  color = "inherit",
  onClick,
}) => (
  <IconButton
    onClick={onClick}
    color={color}
    sx={{
      borderRadius: "50%",
      p: 1,
      bgcolor: bgColor,
      transition: "0.3s",
      "&:hover": {
        bgcolor: "white",
        color: "primary.main",
      },
    }}
  >
    <Icon />
  </IconButton>
);

export default CustomIconButton;
