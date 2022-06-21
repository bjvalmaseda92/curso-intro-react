import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState(initialValue)
  );

  const { loading, sincronized, error, item } = state;

  const onError = (error) =>
    dispatch({ type: actionType.error, payload: error });

  const onSuccess = (item) =>
    dispatch({ type: actionType.success, payload: item });

  const onSincronize = () => dispatch({ type: actionType.sincronize });

  const onSave = (item) => dispatch({ type: actionType.save, payload: item });

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let item;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          item = initialValue;
        } else {
          item = JSON.parse(localStorageItem);
          onSuccess(item);
        }
      } catch (error) {
        onError(error);
      }
    }, 1000);
  }, [sincronized]);

  const sicronizeItem = () => {
    onSincronize();
  };

  const saveItem = (item) => {
    try {
      const stringifiedItem = JSON.stringify(item);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(item);
    } catch (error) {
      onError(error);
    }
  };

  return { item, saveItem, loading, error, sicronizeItem };
}

const initialState = (initialValue) => ({
  item: initialValue,
  sincronized: true,
  error: false,
  loading: true,
});

const actionType = {
  error: "ERROR",
  success: "SUCCESS",
  sincronize: "SINCRONIZED",
  save: "SAVE",
};

const reducerObject = (state, payload) => ({
  [actionType.error]: {
    ...state,
    error: true,
  },
  [actionType.success]: {
    ...state,
    error: false,
    loading: false,
    item: payload,
    sincronized: true,
  },
  [actionType.save]: {
    ...state,
    item: payload,
  },
  [actionType.sincronize]: {
    ...state,
    loading: true,
    sincronized: false,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
