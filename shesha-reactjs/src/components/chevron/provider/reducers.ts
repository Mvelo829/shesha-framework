import {
  IRefListItemGroupConfiguratorStateContext,
  IUpdateChildItemsPayload,
  IUpdateItemSettingsPayload,
  REF_LIST_ITEM_GROUP_CONTEXT_INITIAL_STATE,
} from './contexts';
import { RefListItemGroupActionEnums } from './actions';
import { IRefListItemGroup } from './models';
import { handleActions } from 'redux-actions';
import { getItemPositionById } from './utils';

const RefListItemGroupReducer = handleActions<IRefListItemGroupConfiguratorStateContext, any>(
  {
    [RefListItemGroupActionEnums.SetItems]: (state: IRefListItemGroupConfiguratorStateContext,
      action: ReduxActions.Action<any[]>,
    ) => {
      const { payload } = action;
      return {
        ...state,
        items: payload,
      };
    },

    [RefListItemGroupActionEnums.SelectItem]: (
      state: IRefListItemGroupConfiguratorStateContext,
      action: ReduxActions.Action<string>,
    ) => {
      const { payload } = action;

      return {
        ...state,
        selectedItemId: payload,
      };
    },

    [RefListItemGroupActionEnums.UpdateItem]: (
      state: IRefListItemGroupConfiguratorStateContext,
      action: ReduxActions.Action<IUpdateItemSettingsPayload>,
    ) => {
      const { payload } = action;
      const newItems = [...state.items];

      const position = getItemPositionById(newItems, payload.id);
      if (!position) return state;

      const newArray = position.ownerArray;
      newArray[position.index] = {
        ...newArray[position.index],
        ...payload.settings,
      };

      return {
        ...state,
        items: newItems,
      };
    },

    [RefListItemGroupActionEnums.UpdateChildItems]: (
      state: IRefListItemGroupConfiguratorStateContext,
      action: ReduxActions.Action<IUpdateChildItemsPayload>,
    ) => {
      const {
        payload: { index, childs: childIds },
      } = action;
      if (!Boolean(index) || index.length === 0) {
        return {
          ...state,
          items: childIds,
        };
      }
      // copy all items
      const newItems = [...state.items];
      // blockIndex - full index of the current container
      const blockIndex = [...index];
      // lastIndex - index of the current element in its' parent
      const lastIndex = blockIndex.pop();

      // search for a parent item
      const lastArr = blockIndex.reduce((arr, i) => (arr[i] as IRefListItemGroup).childItems, newItems);

      // and set a list of childs
      (lastArr[lastIndex] as IRefListItemGroup).childItems = childIds;

      return {
        ...state,
        items: newItems,
      };
    },
  },

  REF_LIST_ITEM_GROUP_CONTEXT_INITIAL_STATE,
);

export default RefListItemGroupReducer;
