// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
//import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
//import profilePicture from "assets/images/bruce-mars.jpg";
import profile from "assets/images/guilherme.jpg";

function Profile() {
  const longText = `
    Nasci no interior de Pernambuco, numa cidade chamada Pedra. Lá, tive meu primeiro contato com a Medicina,
    através do meu pai Ezequiel Braz. Desde então soube que queria ser médico. Não um simples médico, um conforto
    para aqueles que precisam.

    Me formei na UFPE, me tornei Cirurgião geral e após vários anos dando plantão, migrei para a área da Endoscopia/Colonoscopia.
    Enfim pude conciliar qualidade de vida com a minha profissão que tanto amo.
    Ser Médico é servir ao próximo. E assim mantenho meu juramento até hoje, tratando meus pacientes com amor, atenção,
    e cuidado.
  `;
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profile} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">@dr.guilhermebraz</MKTypography>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    452&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Posts
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    8,807&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Followers
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    1061&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Following
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
                {longText} <br />
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
