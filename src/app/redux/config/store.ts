import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    // [dataApi.reducerPath]: dataApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware()
  //     .concat(determinationApi.middleware)
  //     .concat(dataApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// https://redux-toolkit.js.org/rtk-query/api/setupListeners
// setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
