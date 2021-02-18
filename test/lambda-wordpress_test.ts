import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as LambdaWordpress from '../lib/lambda-wordpress-stack';

test('Empty Stack', () => {
  const app = new cdk.App();
  //How this  actually works is the coolest thing i have ever seen
  const stack = new LambdaWordpress.LambdaWordpressStack(app, 'MyTestStack');
  //Still leaning the cdk related jest asssertions
  expectCDK(stack).to(matchTemplate({
    "Resources": {}
  }, MatchStyle.EXACT))
});
