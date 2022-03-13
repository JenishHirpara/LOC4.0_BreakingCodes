import * as AWS from 'aws-sdk';

AWS.config.update({
  region: 'eu-central-1',
  secretAccessKey: 'wA8ST02+BWiAureXl4BocGZs/le9KkLdWkgYYeRL',
  accessKeyId: 'AKIAQ4ZNHUWDBLK5HY5Q'
});

export const docClient = new AWS.DynamoDB.DocumentClient();

// export const fetchData = (tableName) => {
//   const params = {
//     TableName: tableName
//   };

//   console.log(params);
//   docClient.scan(params, (err, data) => {
//     console.log('udi-pudi');
//     console.log(err);
//     if (!err) {
//       console.log(data);
//     }
//   });
// };
