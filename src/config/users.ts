// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. 2023
// SPDX-License-Identifier: Apache-2.0

/**
 * Authenticated user configuration.
 * RENAME THIS TEMPLATE TO `users.ts`
 */

import type { UserConfig } from '@/lib/types';

/**
 * @proprety `email` AWS Cognito user account credential
 * @proprety `password` AWS Cognito user account credential
 */
const users: UserConfig[] = [
  {
    email: 'user@cookiefactory',
    firstName: 'bola',
    lastName: 'blinks',
    password: 'Password@123',
    title: 'engr'
  }
];

export default users;
