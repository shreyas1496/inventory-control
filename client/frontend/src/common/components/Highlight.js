import React from 'react';
import PropTypes from 'prop-types';

class Highlight extends React.Component {
  state = {
    effect: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.updater !== this.props.updater) {
      this.setState({ effect: true }, () => {
        setTimeout(
          () =>
            this.setState({
              effect: false,
            }),
          this.props.duration,
        );
      });
    }
  }
  render() {
    const { WrappedComponent, className } = this.props;
    return <div className={this.state.effect ? className : ''}>{WrappedComponent}</div>;
  }
}

Highlight.propTypes = {
  duration: PropTypes.number,
  className: PropTypes.string,
  updater: PropTypes.any.isRequired,
  WrappedComponent: PropTypes.object.isRequired,
};

Highlight.defaultProps = {
  className: 'emphasize',
  duration: 500,
};

export default Highlight;
