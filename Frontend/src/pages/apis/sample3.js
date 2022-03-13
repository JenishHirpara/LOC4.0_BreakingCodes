import { docClient } from './AWSTest';

export default function sample() {
  docClient
    .scan({ TableName: 'TheSMC-demo-table' })
    .promise()
    .then(
      (data) =>
        function (data) {
          return (
            <>
              ABC
              <br />
              DEF
            </>
          );
        }
    )
    .catch(console.error);

  // console.log('1');
  // return <>ABC</>;
}
