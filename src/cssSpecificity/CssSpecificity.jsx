import React, {PropTypes} from 'react';
import SubSection from '../common/SubSection';
import './CssSpecificity.css';
import SelectorSymbols from './SelectorSymbols';

class CssSpecificity extends React.Component {
  state = {
    isCssNthChildVisible: false,
  };

  toggleVisibility = (sectionName) => () => {
    const toggleName = `is${sectionName}Visible`;
    console.log('toggleName - ', toggleName);
    this.setState({
      [toggleName]: !this.state[toggleName]
    });
  };

  render() {
    return (
      <section className='css-specificity'>
        <div>
          <div className="title font-size-4">Specificity</div>
          <ol>
            <li>Getting the children of an element? 4th element? or maybe the odd one out?</li>
            <li>Understand ‘+’, ‘>’ and ‘~’ symbols</li>
          </ol>
        </div>
        <div className="title font-size-5">understanding symbols</div>
        <SubSection title={`‘+’, ‘>’, ' ' and ‘~’`}
                    onClick={this.toggleVisibility('CssNthChild')}
                    isDemoShown={this.state.isCssNthChildVisible}
        >
          <SelectorSymbols/>
        </SubSection>
      </section>
    );
  }
}
;

export default CssSpecificity;

