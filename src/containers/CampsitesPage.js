import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCampsites } from '../actions/index';
import { Link } from 'react-router';

const CampsitesPage = React.createClass({
  displayName: 'CampsitesPage',

  componentWillMount() {
    this.props.dispatch(fetchCampsites());
  },

  renderCampsites() {
    return this.props.campsites.map((campsite) => {
      return (
        <li key={campsite._id}>
          <Link to={'campsites/' + campsite._id}>
            <span>{campsite.sitename}</span>
          </Link>
        </li>
      );
    });
  },

  render() {
    console.log(this.props);
    if (!this.props.campsites) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Campsites</h1>
        <ul>
          {this.renderCampsites()}
        </ul>
      </div>
    );
  },

  propTypes: {
    campsites: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }
});

function mapStateToProps(state) {
  return { campsites: state.campsites.campsites };
}

export default connect(mapStateToProps)(CampsitesPage);
