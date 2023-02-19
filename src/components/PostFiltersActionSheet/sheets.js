import {registerSheet} from 'react-native-actions-sheet';
import PostSortPeriodActionSheet from './postSortPeriodActionSheet';
import PostSortTypeActionSheet from './postSortTypeActionSheet';

const ACTION_SHEET = {
  SORT_TYPE: 'postSortTypeActionSheet',
  SORT_PERIOD: 'postSortPeriodActionSheet',
};

registerSheet('postSortTypeActionSheet', PostSortTypeActionSheet);
registerSheet('postSortPeriodActionSheet', PostSortPeriodActionSheet);

export {ACTION_SHEET};
