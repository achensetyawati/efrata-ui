import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import CostCalculationLoader from "../../../../loader/cost-calculation-garment-loader";
import { Base64Helper } from '../../../../utils/base-64-coded-helper';

@inject(Router)
export class List {
    controlOptions = {
        label: {
            length: 1
        },
        control: {
            length: 3
        }
    };

    costCalculationFilter = {};

    get costCalculationLoader() {
        return CostCalculationLoader;
    }

    constructor(router) {
        this.router = router;
    }

    copy() {
        if (this.costCalculation) {
            const encoded = Base64Helper.encode(this.costCalculation.Id);
            this.router.navigateToRoute('copy', { id: encoded });
        }
    }
}
