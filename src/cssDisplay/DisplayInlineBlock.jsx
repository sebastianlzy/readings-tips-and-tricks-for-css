import React, {PropTypes} from 'react';

import Explanation from '../common/Explanation';

class DisplayInlineBlock extends React.Component {

  render() {
    return (
      <div>
        <div className="example-section">
          <div className="display-block-inline block">block-inline</div>
          <div className="display-block-inline block">block-inline</div>
          <div className="display-block-inline block">block-inline</div>
          <div className="display-block-inline block">block-inline</div>
        </div>
        <div className="explanation-section">
          <Explanation
            title={'inline-block'}
            content={
              `This value causes an element to generate an inline-level block container. The inside of an inline-block is
              formatted as a block box, and the element itself is formatted as an atomic inline-level box.`
            }
          />
          <Explanation
            title={'note'}
            content={
              `margin, padding & width work.`
            }
          />
        </div>
      </div>
    );
  }
}

export default DisplayInlineBlock;

