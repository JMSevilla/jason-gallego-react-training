/**
 * Children > React.ReactNode > Component > title > string
 */
import {
    Card, CardContent
} from '@mui/material'

const ControlledCard = ({children, sx }) => {
    return (
        <Card sx={sx}>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}

export default ControlledCard