import { useState } from 'react';
import { Outlet } from 'react-router-dom';

// import * as AWS from 'aws-sdk';
// import { ConfigurationOptions } from 'aws-sdk';

import Sample from './sample2';
// let configuration: ConfigurationOptions = {
//   region: '',
//   secretAccessKey: '',
//   accessKeyId: ''
// }

export default function DashboardLayout() {
  return <Sample />;
}
