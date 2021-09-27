
export default {

  namespace: 'example', // 命名空间 全局state  key

  state: {
    name: '嗯哼',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: { // 更新状态 接收action 同步更新state
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
