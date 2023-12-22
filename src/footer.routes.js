// @mui icons
//import FacebookIcon from "@mui/icons-material/Facebook";
//import TwitterIcon from "@mui/icons-material/Twitter";
//import GitHubIcon from "@mui/icons-material/GitHub";
//import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
//import logoCT from "assets/images/logogui.png";

const date = new Date().getFullYear();

export default {
  brand: {},
  socials: [],
  menus: [],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Feito com amor por{" "}
      <MKTypography
        component="a"
        href="https://www.instagram.com/liviasouzale"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Lívia Souza
      </MKTypography>
      .
    </MKTypography>
  ),
};
