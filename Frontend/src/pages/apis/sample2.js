import { docClient } from './AWSTest';

export default function sample() {
  const fetchData = (tableName) => {
    const params = {
      TableName: tableName
    };

    console.log(params);
    docClient.scan(params, (err, data) => {
      // console.log('udi-pudi');
      // console.log(err);
      if (!err) {
        // console.log(data);
        const prog = data.Items;
        // console.log(prog);
        document.getElementById('abc').innerHTML = JSON.stringify(prog, undefined, 2);
      }
    });
    // console.log(data);
    // return data;
  };

  const fetchDataFormDynamoDb = () => {
    const z = fetchData('TheSMC-demo-table');
    // console.log(z);
    // console.log('ayee');
  };

  // return <>{fetchDataFormDynamoDb()}</>;
  return (
    <>
      <span id="abc">{fetchDataFormDynamoDb()}</span>
      {/* <button onClick={() => fetchDataFormDynamoDb()}> Fetch </button> */}
    </>
  );
}
