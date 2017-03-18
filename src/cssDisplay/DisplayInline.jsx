import React, {PropTypes} from 'react';

import Explanation from '../common/Explanation';

class DisplayInline extends React.Component {
  render() {
    return (
      <div>
        <div className="example-section">
          <div className="display-inline block"> inline</div>
          <div className="display-inline block"> inline</div>
          <div className="display-inline block"> inline</div>
        </div>
        <div className="explanation-section">
          <Explanation
            title={'inline'}
            content={`This value causes an element to generate one or more inline boxes.`}
          />
          <Explanation
            title={'note'}
            content={`margin, padding & width don’t work for inline.`}
          />
        </div>
      </div>
    );
  }
}
;

export default DisplayInline;

