import '../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Sprout = ({ tasks,setTasks }) =>{
    return(
        <div>
            <Grid container className="homepage">
            <Grid item xs={6} className="boxBackground">
                <div className="box">
                    <Card style={{width:"500px",height:"300px"}}>
                        <CardContent>
                            <h1 className="TagLine">
                                One Stop Thrift Shop
                            </h1>
                        </CardContent>
                        <CardContent>
                            <Grid container className="animatedButtonContainer">
                                <Grid item xs={6} align="center">
                                    <a href="/RegisterSeller" className="animatedButton">Sell</a>
                                </Grid>
                            </Grid>
                            <Grid container className="animatedButtonContainer1">
                                <Grid item xs={6} align="center">
                                    <a href="#" className="animatedButton1">Buy</a>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </div>
            </Grid>
            <Grid item xs={6} className="mainBackground"> 
            </Grid>
        </Grid>
        </div>
    )
}

export default Sprout;