import React, {PropTypes} from 'react';
import './CssDisplay.css';
import SubSection from '../common/SubSection';
import DisplayInline from './DisplayInline';
import DisplayBlock from './DisplayBlock';
import DisplayInlineBlock from './DisplayInlineBlock';

class CssDisplay extends React.Component {
  state = {
    isDisplayInlineVisible: false,
    isDisplayBlockVisible: false,
    isDisplayInlineBlockVisible: false
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
      <section className='display-section'>
        <div>
          <div className="title font-size-4">Display</div>
          <ol>
            <li> Display is responsible for controlling layout.</li>
            <li> Every element has a default display value, usually block or inline.</li>
          </ol>
        </div>
        <SubSection
          title='{display:block}'
          onClick={this.toggleVisibility('DisplayBlock')}
          isDemoShown={this.state.isDisplayBlockVisible}
        >
          <DisplayBlock/>
        </SubSection>
        <SubSection
          title='{display:inline}'
          onClick={this.toggleVisibility('DisplayInline')}
          isDemoShown={this.state.isDisplayInlineVisible}
        >
          <DisplayInline/>
        </SubSection>
        <SubSection
          title='{display:inline-block}'
          onClick={this.toggleVisibility('DisplayInlineBlock')}
          isDemoShown={this.state.isDisplayInlineBlockVisible}
        >
          <DisplayInlineBlock/>
        </SubSection>
      </section>
    );
  }
}

export default CssDisplay;

