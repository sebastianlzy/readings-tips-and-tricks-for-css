import React, {PropTypes} from 'react';
import Explanation from '../common/Explanation';

class CenterBlock extends React.Component {

  render() {
    return (
      <div>
        <div className="example-section">
          <div className="center-horizontal-block">
            <div className='display-block-inline block'>block-inline</div>
            <div className='display-block-inline block'>block-inline</div>
            <div className='display-block block'>block</div>
            <div className='display-block block'>block</div>
          </div>
        </div>
        <div className="explanation-section">
          <Explanation
            title={'note'}
            content={`block will work. If you want block to be on the same row, use inline-block`}
          />
        </div>
      </div>
    );
  }
}
;

export default CenterBlock;

