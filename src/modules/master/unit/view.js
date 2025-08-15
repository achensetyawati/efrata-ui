import { inject, Lazy } from "aurelia-framework";
import { Router } from "aurelia-router";
import { Service } from "./service";
import { Base64Helper } from '../../../utils/base-64-coded-helper';

@inject(Router, Service)
export class View {
  constructor(router, service) {
    this.router = router;
    this.service = service;
  }

  async activate(params) {
    //var Id = params.Id;
     const decoded = Base64Helper.decode(params.id);
        var id = decoded;
    this.data = await this.service.getById(Id);
    if (this.data.AccountingUnitId !== 0) {
      this.accountingUnit = await this.service.getAccountingUnit(
        this.data.AccountingUnitId
      );
    }
  }

  list() {
    this.router.navigateToRoute("list");
  }

  cancelCallback(event) {
    this.list();
  }
}
