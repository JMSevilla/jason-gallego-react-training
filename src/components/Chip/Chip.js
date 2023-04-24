import { Chip } from "@mui/material";

const ControlledChip = ({ variant, label, color }) => {
  return (
    <>
      <Chip variant={variant} label={label} color={color} />
    </>
  );
};

export default ControlledChip;
