import { configureStore } from '@reduxjs/toolkit'
// import productsReducer from '../Features/Products/productsSlice'
// import { productsApi } from '../Features/Products/productsApi'
import cartReducer from '../Features/Cart/cartSlice'

export default configureStore({
  reducer: {
    // products: productsReducer,
    cart: cartReducer
    // [productsApi.reducerPath]: productsApi.reducer
  }
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(productsApi.middleware)
})
