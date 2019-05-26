import {
  FETCH_ALL_REVIEWS,
  SELECT_DETAIL_REVIEW,
} from './types';

export const fetchAllReviews = () => {
  return { type: FETCH_ALL_REVIEWS, payload: allReviewsTmp };
};

const GREAT = 'sentiment-very-satisfied'; // ←忘れずに
const GOOD = 'sentiment-satisfied'; // ←忘れずに
const POOR = 'sentiment-dissatisfied'; // ←忘れずに

export const selectDetailReview = (selectedReview) => { // ←追記ここから
  return { type: SELECT_DETAIL_REVIEW, payload: selectedReview };
}; // ←追記ここまで


const allReviewsTmp = [ // ←`screens/HomeScreen.js`からコピペ
  {
    country: 'USA',
    dateFrom: 'Jan/15/2018',
    dateTo: 'Jan/25/2018',
    imageURIs: [
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
    ],
    rank: GREAT,
  },
  {
    country: 'USA',
    dateFrom: 'Feb/15/2018',
    dateTo: 'Feb/25/2018',
    imageURIs: [
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
    ],
    rank: GOOD,
  },
  {
    country: 'USA',
    dateFrom: 'Mar/15/2018',
    dateTo: 'Mar/25/2018',
    imageURIs: [
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
    ],
    rank: POOR,
  },
];