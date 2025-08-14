import { inject, Lazy } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Service } from '../service';
import { Base64Helper } from '../../../../utils/base-64-coded-helper';

@inject(Router, Service)
export class Edit {
    
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.data = {};
        this.error = {};
    }

    identityProperties = [
        "Id",
        "Active",
        "CreatedUtc",
        "CreatedBy",
        "CreatedAgent",
        "LastModifiedUtc",
        "LastModifiedBy",
        "LastModifiedAgent",
        "IsDeleted",
    ];

    async activate(params) {
        const decoded = Base64Helper.decode(params.id);
        var id = decoded;
        this.data = await this.service.getById(id);
        this.clearDataProperties();
    }

    clearDataProperties() {
        this.identityProperties.concat([
            "Code",
            "ImagesPath",
            "IsPosted"
        ]).forEach(prop => delete this.data[prop]);
        (this.data.CostCalculationGarment || {}).RO_Number = null;

        this.data.RO_Garment_SizeBreakdowns.forEach(item => {
            this.identityProperties.concat([
                "Code",
            ]).forEach(prop => delete item[prop]);
            item.RO_Garment_SizeBreakdown_Details.forEach(detail => {
                this.identityProperties.concat([
                    "Code",
                ]).forEach(prop => delete detail[prop]);
            });
        });
    }

    cancelCallback() {
        this.router.navigateToRoute("list");
    }

    saveCallback() {
        this.service.create(this.data)
            .then(result => {
                this.cancelCallback();
            })
            .catch(e => {
                this.error = e;
            })
    }
}