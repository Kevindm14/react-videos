import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const Videos = ({newVideo, goTo}) => {

	TimeAgo.locale(en);
	const timeAgo = new TimeAgo('en-US');
	const publicationDate = new Date(newVideo.snippet.publishedAt);
	const timeago = timeAgo.format(publicationDate)
  const useStyles = makeStyles({
    card: {
      maxWidth: 200,
    },
    media: {
      height: 100,
    },
  });

  const classes = useStyles();


  return (
		<React.Fragment>
      <Grid item xs={2}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={newVideo.snippet.thumbnails.medium.url}
              onClick={() => goTo(`/watch?v=${newVideo.id.videoId}`) }
            />
            <CardContent>
              <Typography variant="subtitle2" component="h2">
                {newVideo.snippet.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {timeago}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
		</React.Fragment>
  )
}

export default Videos;
