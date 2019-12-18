import createDataContext from './createDataContext';
import sentimentApi from '../api/sentiment';
import { parseISO, subDays, format } from 'date-fns';

const sentimentsReducer = (state, action) => {
  switch (action.type) {
    case 'get_sentiment':
      return {
        ...state,
        loaded: true,
        sentiments: { ...state.sentiments, ...action.payload }
      };
    case 'get_average_sentiment':
      return {
        ...state,
        averageLoaded: true,
        sentimentsAverage: { ...state.sentimentsAverage, ...action.payload }
      };
    case 'sentiment_api_fail':
      return { ...state, error: true };
    case 'clear_error':
      return { ...state, error: false };
    default:
      return state;
  }
};

const getSentimentsWeek = dispatch => async companyName => {
  const today = format(new Date(), 'yyyy-MM-dd');
  const pastWeek = format(subDays(new Date(), 7), 'yyyy-MM-dd');

  try {
    const response = await sentimentApi.post(companyName + '/sentiment/range', {
      from: pastWeek,
      to: today
    });
    const formatted = response.data.sentiments.map(item => {
      return {
        ...item,
        date_formated: parseISO(item.date)
      };
    });
    dispatch({
      type: 'get_sentiment',
      payload: { [companyName]: formatted }
    });
  } catch (err) {
    dispatch({ type: 'sentiment_api_fail' });
  }
};

const getSentimentsAverage = dispatch => async companyName => {
  try {
    const response = await sentimentApi.get(companyName + '/sentiment/average');
    dispatch({
      type: 'get_average_sentiment',
      payload: { [companyName]: response.data.average }
    });
  } catch (err) {
    dispatch({ type: 'sentiment_api_fail' });
  }
};

const clearError = dispatch => () => {
  dispatch({
    type: 'clear_error'
  });
};

export const { Provider, Context } = createDataContext(
  sentimentsReducer,
  { getSentimentsWeek, getSentimentsAverage, clearError },
  {
    sentiments: {},
    sentimentsAverage: {},
    loaded: false,
    averageLoaded: false,
    error: false
  }
);
