import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPictures } from "../actions";

class Home extends React.PureComponent {
  fetchPictures = () => {
    const { fetchPictures } = this.props;
    if (fetchPictures) {
      fetchPictures();
    }
  };
  render() {
    const { isLoading } = this.props;
    return (
      <div>
        <h1>
          Click the fetch pics button to see the top 5 latests posts from r/pics
        </h1>
        <div> currentLoadingState: {isLoading ? "true" : "false"}</div>
        <button onClick={this.fetchPictures}>Fetch now!</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { pics } = state;
  return { ...pics };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPictures: fetchPictures
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
