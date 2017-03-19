import React, {PropTypes} from 'react';

import Explanation from '../common/Explanation';

class SelectorSymbols extends React.Component {
  render() {
    return (
      <div>
        <div className="example-section">
          <div className="specificity-understanding-symbols">
            <div className='block parent'>
              parent (> - immediate descendant of parent)
              <div className="block child">child (space - descendant of parent)</div>
              <div className="block sibling">sibling (+ - only the first sibling is chosen)</div>
              <div className="block sibling">sibling (+ - does not affect the second sibling)</div>
              <div className="block child">
                child (space - descendant of parent)
                <div className="class grand-child">
                  grandchild (inherit color from child)
                </div>
                <div className="class sibling">
                  sibling (~ - affects all sibling)
                </div>
                <div className="class sibling">
                  sibling (~ - affects all sibling)
                </div>
              </div>
            </div>
            <div className='block parent'>
              parent (> - immediate descendant of parent)
            </div>

          </div>
        </div>
        <div className="explanation-section">
          <Explanation
            title={'space'}
            content={`target all children selector`}
          />
          <Explanation
            title={'>'}
            content={`target elements which are DIRECT children of a particular element`}
          />
          <Explanation
            title={'+'}
            content={`combines two sequences of simple selectors having the same parent and the second one must come IMMEDIATELY after the first`}
          />
          <Explanation
            title={'~'}
            content={`similar to +, the difference is that the second selector does NOT have to immediately follow the first one means It will select all elements that is preceded by the former selector.`}
          />
        </div>
      </div>
    );
  }
}
;

export default SelectorSymbols;

