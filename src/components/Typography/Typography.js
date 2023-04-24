import { Typography } from "@mui/material";

const ControlledTypography = (props) => {
  const { variant, gutterBottom = false, sx, label } = props;
  return (
    <>
      <Typography variant={variant} gutterBottom={gutterBottom} sx={sx}>
        {label}
      </Typography>
    </>
  );
};

export default ControlledTypography;
