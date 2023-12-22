// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Veja o que os pacientes falam sobre</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            nossa clínica
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Maria Emília da Conceição"
              date="04/10/2023"
              review="Nota 10, atendimento excelente, o médico da mesma forma e a equipe mais ainda. Obrigada pela atenção, vocês estão de parabéns!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Josefa Tertulina Filha"
              date="31/10/2023"
              review="Nota 10 no atendimento e no acolhimento da paciente. Minha tia saiu do atendimento totalmente se sentindo amada e acolhida. Estão de parabéns pela humildade."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Maria José dos Santos"
              date="14/09/2023"
              review="Nota 10, de todas as clínicas que já passei, nunca fui tão bem atendida e tão bem tratada."
              rating={5}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
