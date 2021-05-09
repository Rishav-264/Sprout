import './App.css';
import {useState} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Form from './components/Form';
import Sprout from './components/sprout';
import data from './components/data.json';
import { Animator,ScrollContainer,ScrollPage,batch,FadeIn,ZoomIn,StickyIn } from 'react-scroll-motion';

function App() {
  const [tasks,setTasks] = useState(data);
  const ZoomInScrollOut = batch(StickyIn(),FadeIn(),ZoomIn());
  return (
    <ScrollContainer style={{width:"1024px"}}>
      <ScrollPage page={0} style={{width:"1024px"}}>
        <Animator animation={ZoomInScrollOut}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <Card style={{width:"1000px",height:"700px"}}>
                        <CardContent>
                           <Grid container className="box">
                             <Grid item xs={6} align="center">
                             <Card style={{width:"500px",height:"700px"}} className="box">
                        <CardContent>
                            <h4 className="TagLine">
                                Hi! I am Bozo, the biggest dumbass on this planet.
                            </h4>
                        </CardContent>
                    </Card>
                             </Grid>
                             <Grid item xs={6} align="right">
                             <Card style={{width:"430px",height:"350px"}}>
                                <CardMedia image="Rohini1.jpeg" style={{width:"500px",height:"100%"}}>
                                </CardMedia>
                            </Card>
                             </Grid>
                           </Grid>
                        </CardContent>
                    </Card>
            </Grid>
          </Grid>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1} style={{width:"100%"}}>
      <Animator animation={ZoomInScrollOut}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <Card style={{width:"1000px",height:"700px"}}>
                        <CardContent>
                           <Grid container className="box">
                             <Grid item xs={6} align="center">
                             <Card style={{width:"500px",height:"700px"}} className="box">
                        <CardContent>
                            <h4 className="TagLine">
                                This picture is here just to annoy you.
                            </h4>
                        </CardContent>
                    </Card>
                             </Grid>
                             <Grid item xs={6} align="right">
                             <Card style={{width:"430px",height:"350px"}}>
                                <CardMedia image="Rohini2.jpeg" style={{width:"500px",height:"100%"}}>
                                </CardMedia>
                            </Card>
                             </Grid>
                           </Grid>
                        </CardContent>
                    </Card>
            </Grid>
          </Grid>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
      <Animator animation={ZoomInScrollOut}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <Card style={{width:"1000px",height:"700px"}}>
                        <CardContent>
                           <Grid container className="box">
                             <Grid item xs={6} align="center">
                             <Card style={{width:"500px",height:"700px"}} className="box">
                        <CardContent>
                            <h4 className="TagLine">
                                I like Blue Orchids and chasing Lizards. KIKI LOVES ME OKAY.Cockroaches HAHAHAHAHA.
                                Istg you are a weirdo boz.
                            </h4>
                        </CardContent>
                    </Card>
                             </Grid>
                             <Grid item xs={6} align="center">
                             <Card style={{width:"430px",height:"350px"}}>
                                <CardMedia image="Rohini3.jpeg" style={{width:"300px",height:"100%"}}>
                                </CardMedia>
                            </Card>
                             </Grid>
                           </Grid>
                        </CardContent>
                    </Card>
            </Grid>
          </Grid>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
      <Animator animation={ZoomInScrollOut}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <Card style={{width:"1000px",height:"700px"}}>
                        <CardContent>
                           <Grid container className="box">
                             <Grid item xs={6} align="center">
                             <Card style={{width:"500px",height:"700px"}} className="box">
                        <CardContent>
                            <h4 className="TagLine">
                                I am Rohini and this is Rishav and I hereby claim he is the most amazing
                                ,most funny and most handsome man on this planet. Hrithik Roshan who? All 
                                Hail King Rishav.
                            </h4>
                        </CardContent>
                    </Card>
                             </Grid>
                             <Grid item xs={6} align="center">
                             <Card style={{width:"430px",height:"350px"}}>
                                <CardMedia image="RishavIsTheBest.jpeg" style={{width:"300px",height:"100%"}}>
                                </CardMedia>
                            </Card>
                             </Grid>
                           </Grid>
                        </CardContent>
                    </Card>
            </Grid>
          </Grid>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
