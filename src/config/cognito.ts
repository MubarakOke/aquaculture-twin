// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. 2023
// SPDX-License-Identifier: Apache-2.0

/**
 * AWS Cognito authenticated flow configuration.
 * RENAME THIS TEMPLATE TO `cognito.ts`
 */

import type { CognitoAuthenticatedFlowConfig } from '@/lib/core/auth/cognito';

const cognito: CognitoAuthenticatedFlowConfig = {
  clientId: '2vmkf8dg732825se5dpllrci8c',
  identityPoolId: 'eu-west-1:be66efe8-0fb6-4fa2-a8cd-90cb16f88b92',
  region: 'eu-west-1',
  userPoolId: 'eu-west-1_PMmMF6VJ1'
};

export default cognito;
