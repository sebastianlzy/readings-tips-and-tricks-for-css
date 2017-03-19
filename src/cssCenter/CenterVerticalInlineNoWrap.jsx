import React, {PropTypes} from 'react';

import Explanation from '../common/Explanation';

class CenterVerticalInlineNoWrap extends React.Component {

  render() {
    return (
      <div>
        <div className="example-section">
          <div className="center-vertical-inline-nowrap">
            <span className='block'>inline</span>
            <span className='block'>inline</span>
            <span className='block'>inline</span>
          </div>
        </div>
        <div className="explanation-section">
          <Explanation
            title={'note'}
            content={`
              height is fixed at 100px.
              line-height is fixed to make sure the space above and below is 100px.
              cannot wrap
            `}
          />
        </div>
      </div>
    );
  }
}
;

export default CenterVerticalInlineNoWrap;

