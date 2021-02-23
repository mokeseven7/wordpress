#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LambdaWordpressStack } from '../lib/lambda-wordpress-stack';

const app = new cdk.App();


new LambdaWordpressStack(app, 'LambdaWordpressStack', {
    env: {
        region: 'us-east-1',
        account: '218924408251'
    }
});

