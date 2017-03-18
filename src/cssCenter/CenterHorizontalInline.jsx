import React, {PropTypes} from 'react';

import Explanation from '../common/Explanation';

class CenterInline extends React.Component {
  render() {
    return (
      <div>
        <div className="example-section">
          <div className="center-horizontal-inline">
            <span className='block'>inline</span>
            <span className='block'>inline</span>
            <span className='block'>inline</span>
          </div>
        </div>
        <div className="explanation-section">
          <Explanation
            title={'note'}
            content={`inline, inline-block, inline-table, inline-flex will work`}
          />
        </div>
      </div>
    );
  }
}
;

export default CenterInline;

