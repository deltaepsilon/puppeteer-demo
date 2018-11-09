const httpMocks = require('node-mocks-http');
const uuidv4 = require('uuid/v4');
const helloWorldController = require('./hello-world.controller');

describe('helloWorldController', () => {
  const world = uuidv4();
  let req;
  let res;
  let data;

  beforeEach(() => {
    req = httpMocks.createRequest({
      url: '/user/42',
      params: {
        world,
      },
    });

    res = httpMocks.createResponse();

    helloWorldController(req, res);

    data = JSON.parse(res._getData());
  });

  it('should return JSON with the correct value for world', () => {
    expect(data.hello).toEqual(world);
  });
});
