import { environmentBase } from './environment.base';
import { IEnvironment } from '@bizappzone/xplat/core';
import { environmentProd } from '@bizappzone/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentProd, {
  // app level customizations here...
});