import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { Popover, TextField, Typography } from "@mui/material";
import SearchPopover from "../../SearchPopover";
import SearchDiaLog from "../../SearchDialog";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ space: 3 }}>
        <Button size="large" sx={{ flex: 0.3 }}>
          {title}
        </Button>
        {/* <SearchPopover title="농작물을 입력해주세요."/> */}
        <SearchDiaLog title="농작물을 입력해주세요."/>
        <Button sx={{ borderBottom: 0.1 }} size="small">
          로그인
        </Button>
        <Button sx={{ borderBottom: 0.3 }} size="small">
          회원가입
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
