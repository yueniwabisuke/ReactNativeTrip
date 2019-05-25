import {
  FETCH_ALL_REVIEWS,
  SELECT_DETAIL_REVIEW,
} from '../actions/types'; // ← './types'じゃないので注意

const INITIAL_STATE = {
  allReviews: [],
  detailReview: [], // ←追記部分
};



export default (state = INITIAL_STATE, action) => { // `state`と`action`を受け取り、
  switch (action.type) { // もし`action`の`type`が
    case FETCH_ALL_REVIEWS: // `FETCH_ALL_REVIEWS`だったら、
      return { ...state, allReviews: action.payload }; // `state`の`allReviews`項目を上書きして返す

    default: // それ以外だったら、
      return state; // `state`を何もいじらずそのまま返す
  }
};