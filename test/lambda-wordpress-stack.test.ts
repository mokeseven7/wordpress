import { expect as expectCDK, matchTemplate, MatchStyle, haveResourceLike, haveResource, SynthUtils } from '@aws-cdk/assert';
import { Stack } from '@aws-cdk/core';

import * as lws from '../lib/lambda-wordpress-stack';




test('Should Match Snapshot', async () => {
  const stack = new Stack();
  //WHEN
  new lws.LambdaWordpressStack(stack, 'LambdaStack')
  //THEN
  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});




