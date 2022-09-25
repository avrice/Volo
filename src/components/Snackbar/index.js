import { useDispatch, useSelector } from "react-redux";
import {clearSnackbar} from "../../features/snackbar/snackSlice";
import {Snackbar} from "@mui/material";

export default function AppSnackbar() {
    const dispatch = useDispatch();

    const message = useSelector(
        state => state.message
    );

    const open = useSelector(
        state => state.isOpen
    );

    return (
        <Snackbar
            autoHideDuration={400}
            open={open}
            onClose={
                () => {
                    dispatch(clearSnackbar())
                }
            }
            message={message}
        />
    );
}