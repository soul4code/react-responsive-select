import React, { Component, PropTypes } from 'react';
import scrollIntoViewIIHOC from './lib/scrollIntoViewIIHOC';
import SingleSelectOption from './SingleSelectOption';
const SingleSelectOptionHOC = scrollIntoViewIIHOC(SingleSelectOption);

export default class SingleSelect extends Component {

  static propTypes = {
    altered: PropTypes.bool,
    caretIcon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    customLabelText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.element
    ]),
    singleSelectInitialIndex: PropTypes.number,
    singleSelectSelectedIndex: PropTypes.number,
    singleSelectSelectedOption: PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string
    }),
    isTouchDevice: PropTypes.bool,
    isOptionsPanelOpen: PropTypes.bool,
    name: PropTypes.string,
    nextPotentialSelectionIndex: PropTypes.number,
    onSubmit: PropTypes.func,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      })
    ).isRequired,
    prefix: PropTypes.string,
    selectedValue: PropTypes.string
  }

  render(){
    const {
      altered,
      caretIcon,
      customLabelText,
      // singleSelectInitialIndex,
      isOptionsPanelOpen,
      isTouchDevice,
      name,
      nextPotentialSelectionIndex,
      options,
      prefix,
      singleSelectSelectedIndex,
      singleSelectSelectedOption
    } = this.props;

    return (
      <div
        className={`
          rrs__select-container
          ${(isTouchDevice === true) ? 'rrs__is-touch' : 'rrs__is-desktop'}
          ${(isOptionsPanelOpen === true) ? 'rrs__options-container--visible' : ''}
          ${(altered) ? 'rrs__has-changed': ''}
        `}
        role="listbox"
        tabIndex="0"
      >

        {customLabelText &&
        <div className="rrs__label-container">
          <span className="rrs__label">{customLabelText}</span>
          {caretIcon && caretIcon}
        </div>
        }

        {!customLabelText &&
        <div className="rrs__label-container">
          {prefix &&
          <span>{prefix}</span>
          }
          <span className="rrs__label"> {singleSelectSelectedOption.text}</span>
          {caretIcon && caretIcon}
        </div>
        }

        <div
          className="rrs__options-container"
          ref={(r) => { if (r) { return this.optionsContainer = r; }}}
        >
          {options.length > 0 &&
            options.map((option, index) => (
              <SingleSelectOptionHOC
                scrollIntoViewScrollPaneRef={() => this.optionsContainer}
                scrollIntoViewElementSelector={'rrs__option--next-selection'}
                key={index}
                index={index}
                isTouchDevice={isTouchDevice}
                option={option}
                singleSelectSelectedIndex={singleSelectSelectedIndex}
                nextPotentialSelectionIndex={nextPotentialSelectionIndex}
              />
            ))
          }
        </div>

        {name &&
        <input type="hidden" name={name} value={singleSelectSelectedOption.value} />
        }

      </div>
    );
  }
}
