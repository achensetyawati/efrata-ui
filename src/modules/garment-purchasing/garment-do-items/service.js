import { RestService } from "../../../utils/rest-service";
import { Base64Helper } from '../../../utils/base-64-coded-helper';
const serviceUri = "garment-do-items";

class Service extends RestService {
  constructor(http, aggregator, config, endpoint) {
    super(http, aggregator, config, "purchasing-azure");
  }

  search(info) {
    var endpoint = `${serviceUri}/by-po`;
    return super.list(endpoint, info);
  }

  getById(id) {
    const decoded = Base64Helper.decode(id);
    var endpoint = `${serviceUri}/${decoded}`;
    return super.get(endpoint);
  }

  update(data) {
    var endpoint = `${serviceUri}/${data.Id}`;
    return super.put(endpoint, data);
  }
  getStelling(id) {
    const decoded = Base64Helper.decode(id);
    var endpoint = `${serviceUri}/stelling/${decoded}`;
    return super.get(endpoint);
  }
  generateExcel(args) {
    var endpoint = `${serviceUri}/by-po/download?productcode=${args.productcode}&po=${args.po}&rack=${args.rack}`;
    return super.getXls(endpoint);
  }
  getPdfById(id) {
    const decoded = Base64Helper.decode(id);
    var endpoint = `${serviceUri}/stelling/${decoded}`;
    return super.getPdf(endpoint);
  }
  getBarcodeById(id) {
    const decoded = Base64Helper.decode(id);
    var endpoint = `${serviceUri}/barcode/${decoded}`;
    return super.getPdf(endpoint);
  }
}

export { Service };
