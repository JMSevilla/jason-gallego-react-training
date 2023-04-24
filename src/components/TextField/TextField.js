import {
    TextField,
    Typography
} from '@mui/material'
/**
 * Typography Reusable Component Activity Props Required : 
 * variant, label, gutterBottom, style
 * Chip Reusable Component Activity Props Required :
 * variant, label
 * Replicate The current output 
 * 100
 */
const ControlledTextField = (props) => {
    const {
        variant,
        onChange,
        label,
        placeholder,
        style,
        value
    } = props;
    return (
        <>
            <Typography variant='subtitle1'>{label}</Typography>
            <TextField
            variant={variant}
            onChange={onChange}
            placeholder={placeholder}
            style={style}
            value={value}
            {...props}
            ></TextField>
        </>
    )
}

export default ControlledTextField