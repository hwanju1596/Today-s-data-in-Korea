import { styled, alpha } from "@mui/material/styles";
import React from 'react'

const HeaderStyle = styled("div")(({theme}) => ({
   // position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "50px",
    backgroundColor: alpha(theme.palette.common.black, 0.15),
}));


const Header = () => {
    return (
        <HeaderStyle>
            <h2>This is Header</h2>
        </HeaderStyle>
    );
}

export default Header;