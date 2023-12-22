// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/Instagram";

// Pages
//import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
//import SignIn from "layouts/pages/authentication/sign-in";

// Sections
//import PageHeaders from "layouts/sections/page-sections/page-headers";
//import Features from "layouts/sections/page-sections/featuers";
//import Navbars from "layouts/sections/navigation/navbars";
//import NavTabs from "layouts/sections/navigation/nav-tabs";
//import Pagination from "layouts/sections/navigation/pagination";
//import Inputs from "layouts/sections/input-areas/inputs";
//import Forms from "layouts/sections/input-areas/forms";
//import Alerts from "layouts/sections/attention-catchers/alerts";
//import Modals from "layouts/sections/attention-catchers/modals";
//import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
//import Avatars from "layouts/sections/elements/avatars";
//import Badges from "layouts/sections/elements/badges";
//import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
//import Buttons from "layouts/sections/elements/buttons";
//import Dropdowns from "layouts/sections/elements/dropdowns";
//import ProgressBars from "layouts/sections/elements/progress-bars";
//import Toggles from "layouts/sections/elements/toggles";
//import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    name: "páginas",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Páginas principais",
        collapse: [
          {
            name: "fale conosco",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Sobre Guilherme Braz",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
    ],
  },
  {
    name: "docs",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "endoscopia",
        description: "Instruções e preparo para o exame",
        href: "https://www.instagram.com/dr.guilhermebraz",
      },
      {
        name: "Colonoscopia",
        description: "Instruções e preparo para o exame",
        href: "https://www.instagram.com/dr.guilhermebraz",
      },
      {
        name: "termo de consentimento de exames",
        description: "Explore our collection of fully designed components",
        href: "https://www.instagram.com/dr.guilhermebraz",
      },
      {
        name: "Teste de H2 expirado",
        description: "Instruções e preparo para o exame",
        href: "https://www.instagram.com/dr.guilhermebraz",
      },
    ],
  },
  {
    name: "instagram",
    icon: <GitHubIcon />,
    href: "https://www.instagram.com/dr.guilhermebraz",
  },
];

export default routes;
