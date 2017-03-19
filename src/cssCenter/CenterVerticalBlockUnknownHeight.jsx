import React, {PropTypes} from 'react';

import Explanation from '../common/Explanation';

class CenterVerticalUnknownHeight extends React.Component {

  render() {
    return (
      <div>
        <div className="example-section">
          <div className="center-vertical-block-unknown-height">
            <div className='block position-relative'>
              <span>parent relative block</span>
              <div className='block position-absolute'>child absolute block</div>
            </div>
          </div>
        </div>
        <div className="explanation-section">
          <Explanation
            title={'note'}
            content={`moved up half of it's height after shifting it down halfway of its parent block. use transform property and a negative translate of 50% in both directions`}
          />
        </div>
      </div>
    );
  }
}
;

export default CenterVerticalUnknownHeight;

