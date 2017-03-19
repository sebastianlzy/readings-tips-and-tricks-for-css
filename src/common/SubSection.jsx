import React, {PropTypes} from 'react';
import './SubSection.css'

class SubSection extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    title: PropTypes.string,
    onClick: PropTypes.func,
    isDemoShown: PropTypes.bool
  };

  render() {
    const className = this.props.isDemoShown ? 'is-visible' : 'is-hidden';
    return (
      <div className='sub-section'>
        <pre>
          <code onClick={this.props.onClick} className="language-css">
            {this.props.title}
          </code>
        </pre>
        <div className={className}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default SubSection;
