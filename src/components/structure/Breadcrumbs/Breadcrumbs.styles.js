import styled from 'styled-components';

import ListComponent from '../../../components/structure/List';
import {baseline, color} from '../../../config';

const Breadcrumbs = styled(ListComponent).attrs({gutter: 0})`
  color: ${color('black-90')};
  flex-wrap: wrap;
`;

const Wrapper = styled(ListComponent.Item)`
  line-height: ${baseline(3)};
`;

const Item = styled.span``;

Breadcrumbs.Wrapper = Wrapper;
Breadcrumbs.Item = Item;

export default Breadcrumbs;
