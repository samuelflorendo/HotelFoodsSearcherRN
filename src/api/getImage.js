import axios from 'axios';
import ResultShowScreen from '../screens/ResultShowScreen';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/{id}',
    headers: {
        Authorization: 'Bearer JGzCytW8X4-R73QHFUYJY0XoN1FkxK1zgUT4Q3MMyrS54CgPqcZ10sAaoaytW8CXCsHIvWzd56UhtoStGtrcaS25gpH1yfSmGK1tUJxB1MjekCgSr4-_bNkx5Ok1YHYx'
    }
});

