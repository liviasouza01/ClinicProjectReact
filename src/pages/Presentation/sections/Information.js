// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    O que você espera de um atendimento
                    <br />
                    médico?
                  </>
                }
              />
              <RotatingCardBack
                image={bgBack}
                title="Atendimento humanizado e Médico atualizado!"
                description="E é assim que trabalhamos na Clínica Dr. Guilherme Braz"
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/author",
                  label: "Conheça dr. Guilherme Braz",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon=""
                  title="Consulta com Gastro"
                  description="Consulta humanizada, com 1h de atendimento e tratamento assertivo"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon=""
                  title="Endoscopia"
                  description="Realizada sob sedação com equipamento de ultima geração"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="medical"
                  title="Colonoscopia"
                  description="Realizada sob sedação, sem dor, com equipamento de última geração"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="air"
                  title="Testes respiratórios"
                  description="Testes respiratórios para SIBO, intolerância a lactose e frutose"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
