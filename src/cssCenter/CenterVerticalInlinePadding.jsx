import React, {PropTypes} from 'react';

import Explanation from '../common/Explanation';

class CenterVerticalInlinePadding extends React.Component {

  render() {
    return (
      <div>
        <div className="example-section">
          <div className="center-vertical-inline-padding">
            <span className='block'>inline</span>
            <span className='block'>inline</span>
            <span className='block'>inline</span>
          </div>
        </div>
        <div className="explanation-section">
          <Explanation
            title={'note'}
            content={`there is equal padding above and below them`}
          />
        </div>
      </div>
    );
  }
}
;

export default CenterVerticalInlinePadding;

