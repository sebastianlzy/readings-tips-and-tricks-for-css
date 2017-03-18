import React, {PropTypes} from 'react';

import Explanation from '../common/Explanation';

class DisplayBlock extends React.Component {
  static propTypes = {};
  static defaultProps = {};
  state = {};

  render() {
    return (
      <div>
        <div className="example-section">
          <div className="display-block block">block</div>
          <div className="display-block block">block</div>
          <div className="display-block block">block</div>
        </div>
        <div className="explanation-section">
          <Explanation
            title={'block'}
            content={'Takes up an entire line; margin, padding & width work.'}
          />
        </div>
      </div>
    );
  }
}
;

export default DisplayBlock;

