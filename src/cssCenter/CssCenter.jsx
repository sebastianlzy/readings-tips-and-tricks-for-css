import React, {PropTypes} from 'react';
import './CssCenter.css';
import SubSection from '../common/SubSection';
import CenterHorizontalBlock from './CenterHorizontalBlock';
import CenterHorizontalInline from './CenterHorizontalInline';
import CenterVerticalInlinePadding from './CenterVerticalInlinePadding';
import CenterVerticalInlineNoWrap from './CenterVerticalInlineNoWrap';
import CenterVerticalBlockFixedHeight from './CenterVerticalBlockFixedHeight';
import CenterVerticalBlockUnknownHeight from './CenterVerticalBlockUnknownHeight';

class CssDisplay extends React.Component {
  state = {
    isCssHorizontalCenterInlineVisible: false,
    isCssHorizontalCenterBlockVisible: false,
    isCssVerticalCenterInlinePaddingVisible: false,
    isCssVerticalCenterInlineNoWrapVisible: false,
    isCssCenterVerticalBlockFixedHeightVisible: false,
    isCssCenterVerticalBlockUnknownHeightVisible: false,
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
        <div className="title font-size-5">horizontal</div>
        <SubSection title={`{display:inline; text-align:center}`}
          onClick={this.toggleVisibility('CssHorizontalCenterInline')}
          isDemoShown={this.state.isCssHorizontalCenterInlineVisible}
        >
          <CenterHorizontalInline/>
        </SubSection>
        <SubSection
          title='{display: block; margin: 0 auto}'
          onClick={this.toggleVisibility('CssHorizontalCenterBlock')}
          isDemoShown={this.state.isCssHorizontalCenterBlockVisible}
        >
          <CenterHorizontalBlock/>
        </SubSection>
        <div className="title font-size-5">vertical</div>
        <SubSection
          title='{display: inline; padding-top: 50px; padding-bottom: 50px}'
          onClick={this.toggleVisibility('CssVerticalCenterInlinePadding')}
          isDemoShown={this.state.isCssVerticalCenterInlinePaddingVisible}
        >
          <CenterVerticalInlinePadding/>
        </SubSection>
        <SubSection
          title='{display: inline; height: 100px; line-height: 100px;}'
          onClick={this.toggleVisibility('CssVerticalCenterInlineNoWrap')}
          isDemoShown={this.state.isCssVerticalCenterInlineNoWrapVisible}
        >
          <CenterVerticalInlineNoWrap/>
        </SubSection>
        <SubSection
          title='{display: block; position: absolute; top: 50%; left: 50%; height: 100px; width: 148px; margin-top: -50px; margin-left: -80px;}'
          onClick={this.toggleVisibility('CssCenterVerticalBlockFixedHeight')}
          isDemoShown={this.state.isCssCenterVerticalBlockFixedHeightVisible}
        >
          <CenterVerticalBlockFixedHeight/>
        </SubSection>
        <SubSection
          title='{display: block; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);}'
          onClick={this.toggleVisibility('CssCenterVerticalBlockUnknownHeight')}
          isDemoShown={this.state.isCssCenterVerticalBlockUnknownHeightVisible}
        >
          <CenterVerticalBlockUnknownHeight/>
        </SubSection>
      </section>
    );
  }
}

export default CssDisplay;

