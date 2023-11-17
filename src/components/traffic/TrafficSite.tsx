import { Card, CardContent, Container, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

export const TrafficSite = () => {
  return (
    <Container fixed maxWidth="xl">
      <Card>
        <CardContent>
          <h1 className="text-[16px] font-bold">Traffic by Site</h1>
        </CardContent>
        <Grid container spacing={2} padding={2}>
          <Grid item md={6}>
            <div className="p-5 flex flex-col items-center border border-dashed">
              <FacebookIcon sx={{ fontSize: 40, color: "blue" }} />
              <h4 className="font-bold">323.23k</h4>
              <span>FaceBook</span>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="p-5 flex flex-col items-center border border-dashed">
              <FacebookIcon sx={{ fontSize: 40, color: "blue" }} />
              <h4 className="font-bold">323.23k</h4>
              <span>FaceBook</span>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="p-5 flex flex-col items-center border border-dashed">
              <FacebookIcon sx={{ fontSize: 40, color: "blue" }} />
              <h4 className="font-bold">323.23k</h4>
              <span>FaceBook</span>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="p-5 flex flex-col items-center border border-dashed">
              <FacebookIcon sx={{ fontSize: 40, color: "blue" }} />
              <h4 className="font-bold">323.23k</h4>
              <span>FaceBook</span>
            </div>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
