import { IEnvironment } from '@bizappzone/xplat/core';
import { deepMerge } from '@bizappzone/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
