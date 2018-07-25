import {get} from 'lodash';

const mapIconToToken = {
  breadcrumbs: {
    arrow: 'arrow-right',
  },
  checkbox: {
    default: 'circle',
    hover: 'check-circle',
    active: 'check-circle-filled',
    checked: {
      default: 'check-circle-filled',
      hover: 'circle-filled',
      active: 'circle',
    },
    indeterminate: {
      default: 'circle',
      hover: 'check-circle',
      active: 'check-circle-filled',
    },
  },
  pagination: {
    next: 'arrow-right',
    prev: 'arrow-left',
  },
  sort: {
    asc: 'arrow-up',
    desc: 'arrow-down',
  },
  tree: {
    open: 'arrow-down',
    closed: 'arrow-right',
  },
};

export const iconName = path => get(mapIconToToken, path);
