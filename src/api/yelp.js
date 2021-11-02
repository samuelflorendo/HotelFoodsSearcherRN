import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer JGzCytW8X4-R73QHFUYJY0XoN1FkxK1zgUT4Q3MMyrS54CgPqcZ10sAaoaytW8CXCsHIvWzd56UhtoStGtrcaS25gpH1yfSmGK1tUJxB1MjekCgSr4-_bNkx5Ok1YHYx'
    }
});

