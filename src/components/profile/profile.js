import React, {Component} from 'react';
import {Thumbnail, Col, Row, Grid} from 'react-bootstrap';
import C3Chart from 'react-c3js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import 'c3/c3.css';
import mathew from '../../assets/img/matthew.png';
import {
  loadPastExercisesData,
  postSignUp,
  postLogIn,
  renderNavBar,
  googleOauth,
  startload
} from '../../actions';
import Table from '../table/table';
import musicNoteMusic from '../../assets/img/music-note.jpg';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {Link} from 'react-router-dom';
import rd3 from 'react-d3';
import {BarChart} from 'react-d3/barchart';

let profilePicture;

const mapStateToProps = (state, ownProps) => ({user: state.loginReducer, graphData: state.graphDataReducer, googleOauthState: state.googleOauthReducer});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadPastExercisesData,
    startload,
    postSignUp,
    postLogIn,
    renderNavBar,
    googleOauth,
    startload
  }, dispatch);
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: ''
    };
  }

  componentDidMount = () => {
    let token = localStorage.getItem('token');
    let userId = localStorage.getItem('userId');
    let firstName = localStorage.getItem('firstName');
    let lastName = localStorage.getItem('lastName');
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('password');
    let profile_picture = localStorage.getItem('profile_picture');

    profilePicture = profile_picture.substring(0, profile_picture.length - 2) + '200';
    let Obj = {
      token: token,
      id: userId,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      profile_picture: profile_picture
    }
    this.props.googleOauth(Obj);

    this.props.loadPastExercisesData(Obj.id);
  }

  graph = () => {
    if (this.props.graphData === null) {
      return <div></div>;
    } else if (this.props.graphData.length !== 0) {
      return <div className="center-warning">
        <C3Chart data={{
          unload: true,
          columns: this.props.graphData.columns
        }} axis={this.props.graphData.axis}/>
      </div>
    } else {
      return <div className="center-warning">
        <Link to="/interface">
          <a className="thumbnail" style={{
            'background': '#e6ecff'
          }}>
            <h3>No scores logged. Please go back to the interface page and Sing! 😉
            </h3>
          </a>
        </Link>
      </div>
    }
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 col-xs-6">
              <div className="thumbnailSection">
                <div className="thumbnail">
                  <img src={profilePicture} alt=".."/>
                  <div className="caption">
                    <h3>{localStorage.getItem('firstName')} {localStorage.getItem('lastName')}</h3>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="col-md-8 col-xs-12">
              <div className="pastExercise"></div>
              <div>
                <Table/>
              </div>
              <br/>
            </div>
            <div className="col-md-2 col-xs-6"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-xs-3"></div>
          <div className="col-md-8 col-xs-12">
            {this.graph()}
          </div>
          <div className="col-md-2 col-xs-3"></div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
