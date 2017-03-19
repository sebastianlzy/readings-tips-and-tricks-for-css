import React, {PropTypes} from 'react';

import Explanation from '../common/Explanation';

class CenterVerticalFixedHeight extends React.Component {

  render() {
    return (
      <div>
        <div className="example-section">
          <div className="center-vertical-block-fixed-height">
            <div className='block position-relative'>
              <span>parent relative block</span>
              <div className='block position-absolute'>child absolute block</div>
            </div>
          </div>
        </div>
        <div className="explanation-section">
          <Explanation
            title={'note'}
            content={`works only if you know the height. Using negative margins equal to half of that width and height`}
          />
        </div>
      </div>
    );
  }
}
;

export default CenterVerticalFixedHeight;

