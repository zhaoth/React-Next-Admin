import Mock from 'mockjs';

const Random = Mock.Random;
const userInfo = Mock.mock('/user/login', 'post', () => {
  const ret = Mock.mock({ username: '@cname', age: Random.integer(60, 100), ID: Random.id() });
  return {
    status: 200,
    data: ret,
  };
});

export { userInfo };
