import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCampsite } from '../actions/index';
// import GoogleMap from '../components/google_map';

const CampsitePage = React.createClass({
  displayName: 'CampsitePage',

  componentWillMount() {
    this.props.dispatch(fetchCampsite(this.props.params.id));
  },

  render() {
    console.log(this.props);
    if (!this.props.campsite) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{this.props.campsite.sitename}</h1>
        <h3>State: {this.props.campsite.state}</h3>
        <h3>Phone: {this.props.campsite.phone}</h3>
        <h3>Lat: {this.props.campsite.latitude}</h3>
        <h3>Long: {this.props.campsite.longitude}</h3>
      </div>
    );
  },

  propTypes: {
    campsite: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }
});

function mapStateToProps(state) {
  return { campsite: state.campsites.campsite };
}

export default connect(mapStateToProps)(CampsitePage);
