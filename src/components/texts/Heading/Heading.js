import React from 'react';
import PropTypes from 'prop-types';

import {Media} from '../../../components';

import StyledHeading from './Heading.styles';

const propTypes = {
  /** Sets content to heading */
  children: PropTypes.node.isRequired,
  /** Sets content before title */
  beforeButton: PropTypes.string,
  /** Callback triggered when the before button is clicked */
  onBeforeButtonClick: PropTypes.func,
  /** Sets content after title */
  afterButton: PropTypes.string,
  /** Callback triggered when the after button is clicked */
  onAfterButtonClick: PropTypes.func,
};

const Heading = ({
  children,
  beforeButton,
  afterButton,
  onBeforeButtonClick,
  onAfterButtonClick,
}) => {
  const beforeIconMarkup = beforeButton &&
    onBeforeButtonClick && (
      <StyledHeading.Button
        iconName={beforeButton}
        onClick={onBeforeButtonClick}
      />
    );
  const afterIconMarkup = afterButton &&
    onAfterButtonClick && (
      <StyledHeading.Button
        iconName={afterButton}
        onClick={onAfterButtonClick}
      />
    );

  return (
    <StyledHeading>
      <Media gutter={0}>
        <Media.Left>
          <StyledHeading.ElementBefore>
            {beforeIconMarkup}
          </StyledHeading.ElementBefore>
        </Media.Left>
        <Media.Content>
          <StyledHeading.Text>
            <span>{children}</span>
            <StyledHeading.ElementAfter>
              {afterIconMarkup}
            </StyledHeading.ElementAfter>
          </StyledHeading.Text>
        </Media.Content>
      </Media>
    </StyledHeading>
  );
};

Heading.propTypes = propTypes;

export default Heading;
