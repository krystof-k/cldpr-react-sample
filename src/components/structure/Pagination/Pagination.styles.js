import styled from 'styled-components';

import {textStyle} from '../../../tokens';

import ListComponent from '../../../components/structure/List';
import MediaComponent from '../../../components/structure/Media';

const Pagination = styled(MediaComponent).attrs({align: 'center'})`
  min-height: 40px;

  ${textStyle({style: 'pagination'})};
`;

const Left = styled(MediaComponent.Left)`
  flex: 1 1 33.33333%;
`;

const Content = styled(MediaComponent.Content)`
  flex: 1 1 33.33333%;
  text-align: center;
`;

const Right = styled(MediaComponent.Right)`
  flex: 1 1 33.33333%;
`;

const List = styled(ListComponent)`
  justify-content: flex-end;
`;

Pagination.Left = Left;
Pagination.Content = Content;
Pagination.Right = Right;
Pagination.List = List;
Pagination.List.Item = ListComponent.Item;

export default Pagination;
