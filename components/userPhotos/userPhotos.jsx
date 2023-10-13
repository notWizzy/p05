import React from 'react';
import {
  Typography, Card, CardMedia, CardContent, Link
} from '@mui/material';
import './userPhotos.css';

class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: window.models.photoOfUserModel(this.props.match.params.userId)
    };
  }

  render() {
    return (
        <div>
          <Typography variant="h5" gutterBottom>
            Photos of User {this.props.match.params.userId}
          </Typography>

          {this.state.photos.map((photo) => (
              <Card key={photo._id} className="photo-card">
                <CardMedia
                    component="img"
                    image={`/images/${photo.file_name}`}
                    title={`Photo by User ${this.props.match.params.userId}`}
                />

                <CardContent>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Uploaded on: {new Date(photo.date_time).toLocaleString()}
                  </Typography>

                  {photo.comments && photo.comments.map((comment) => (
                      <div key={comment._id} className="comment">
                        <Typography variant="body2">
                          <Link href={`/users/${comment.user._id}`}>
                            {`${comment.user.first_name} ${comment.user.last_name}`}
                          </Link> commented on {new Date(comment.date_time).toLocaleString()}:
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {comment.comment}
                        </Typography>
                      </div>
                  ))}
                </CardContent>
              </Card>
          ))}
        </div>
    );
  }
}

export default UserPhotos;
