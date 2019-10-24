import { pullData } from '@/pages/fly/wings/services';


const initApiBody = {
  dayList: [],
  area: '',
  areaid: '',
  ret_code: 0,
};
const Model = {
  namespace: 'fly',
  state: {
    message: 'WINGS OF MODEL',
    apiBody: initApiBody,
  },
  effects: {
    * pullData({ payload }, { call, put }) {
      const response = yield call(pullData, payload);
      yield console.log(response);
      yield put({
        type: 'saveData',
        payload: response.showapi_res_body,
      });
    },
  },
  reducers: {
    saveData(state, action) {
      return {
        ...state,
        apiBody: action.payload,
      };
    },
    clearData(state, action) {
      return {
        ...state,
        apiBody: initApiBody,
      };
    },
  },
};


export default Model;
