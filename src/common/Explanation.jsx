import React, {PropTypes} from 'react';

class Explanation extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
  };

  render() {
    return (
      <div>
        <div className='sub-title'>{this.props.title}</div>
        <div className="sub-content">
          {this.props.content}
        </div>
      </div>
    );
  }
}
;

export default Explanation;

