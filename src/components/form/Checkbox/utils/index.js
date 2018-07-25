import {iconName} from '../../../../tokens';

export const mapStateToIcons = ({
  active,
  hover,
  clicked,
  checked,
  disabled,
  indeterminate,
}) => {
  if (indeterminate && disabled) {
    return iconName('checkbox.indeterminate.default');
  }
  if (indeterminate && active) {
    return iconName('checkbox.indeterminate.active');
  }
  if (indeterminate && hover && !clicked) {
    return iconName('checkbox.indeterminate.hover');
  }
  if (indeterminate) {
    return iconName('checkbox.indeterminate.default');
  }

  if (checked && disabled) {
    return iconName('checkbox.checked.default');
  }
  if (checked && active) {
    return iconName('checkbox.checked.active');
  }
  if (checked && hover && !clicked) {
    return iconName('checkbox.checked.hover');
  }
  if (checked) {
    return iconName('checkbox.checked.default');
  }

  if (disabled) {
    return iconName('checkbox.default');
  }
  if (active && !clicked) {
    return iconName('checkbox.active');
  }
  if (hover && !clicked) {
    return iconName('checkbox.hover');
  }
  return iconName('checkbox.default');
};
