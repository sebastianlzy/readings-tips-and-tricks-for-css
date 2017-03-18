import React, {PropTypes} from 'react';
import './CssCenter.css';
import SubSection from '../common/SubSection';
import CenterHorizontalBlock from './CenterHorizontalBlock';
import CenterHorizontalInline from './CenterHorizontalInline';
import CenterVerticalInline from './CenterVerticalInline';

class CssDisplay extends React.Component {
  state = {
    isCssHorizontalCenterInlineVisible: true,
    isCssHorizontalCenterBlockVisible: true,
    isCssVerticalCenterBlockVisible: true,
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
      <section className='css-center-section'>
        <div>
          <div className="title font-size-4">Center</div>
          <ol>
            <li>Centering of element has always been a pain in the ass</li>
            <li>Explore several techniques to center an element horizontally and vertically</li>
          </ol>
        </div>
        <SubSection
          title='horizontal | text-align:center'
          onClick={this.toggleVisibility('CssHorizontalCenterInline')}
          isDemoShown={this.state.isCssHorizontalCenterInlineVisible}
        >
          <CenterHorizontalInline/>
        </SubSection>
        <SubSection
          title='horizontal | margin: 0 auto'
          onClick={this.toggleVisibility('CssHorizontalCenterBlock')}
          isDemoShown={this.state.isCssHorizontalCenterBlockVisible}
        >
          <CenterHorizontalBlock/>
        </SubSection>
        <SubSection
          title='vertical | padding'
          onClick={this.toggleVisibility('CssVerticalCenterBlock')}
          isDemoShown={this.state.isCssVerticalCenterBlockVisible}
        >
          <CenterVerticalInline/>
        </SubSection>
      </section>
    );
  }
}

export default CssDisplay;

