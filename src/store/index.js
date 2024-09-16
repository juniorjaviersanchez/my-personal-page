import { createStore } from 'vuex'
import myWebStore from '@/modules/myWeb/store'
import financeStore from '@/modules/finance/store'

const store =  createStore({
  modules: {
    myWebStore,
    financeStore
  }
})


export default store
