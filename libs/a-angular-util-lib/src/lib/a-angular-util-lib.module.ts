import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// You should see the following error on line 5:
// `A project tagged with "type:util" can only depend on libs tagged with "type:util" eslint(@nrwl/nx/enforce-module-boundaries)`
import { AAngularFeatureLibModule } from '@spine-z/a-angular-feature-lib';

@NgModule({
  imports: [CommonModule, AAngularFeatureLibModule],
})
export class AAngularUtilLibModule {}
