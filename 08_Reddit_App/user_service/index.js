const { startGrpcServer, getGrpcServer } = require("./grpc");
const protoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");
const PROTO_PATH = __dirname + "/protos/user.proto";
const { createUser, createToken, isAuthenticated, getUser } = require("./user");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  defaults: true,
  oneofs: true,
});

const user_proto = grpc.loadPackageDefinition(packageDefinition);

startGrpcServer();
const server = getGrpcServer();

//This addService will add all the 4 service in the server
server.addService(user_proto.UserService.service, {
  createUser,
  createToken,
  isAuthenticated,
  getUser,
});