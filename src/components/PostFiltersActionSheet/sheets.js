import {registerSheet} from 'react-native-actions-sheet';
import PostsSortActionSheet from './postsSortActionSheet';

const ACTION_SHEET = {
  SORT_TYPE: 'postSortTypeActionSheet',
  SORT_PERIOD: 'postSortPeriodActionSheet',
};

registerSheet(ACTION_SHEET.SORT_TYPE, PostsSortActionSheet);
registerSheet(ACTION_SHEET.SORT_PERIOD, PostsSortActionSheet);

export {ACTION_SHEET};
