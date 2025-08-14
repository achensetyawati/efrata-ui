import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api";
import { data } from 'jquery';

const resource = 'master/garment-currencies';

module.exports = function (keyword, filter) {

    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("core");
    var order = {
        "Date": "desc"
    };
    return endpoint.find(resource, { keyword: keyword, filter: JSON.stringify(filter), order: JSON.stringify(order), size: 10 })
        .then(results => {
            var oneResult = [];
            if (results.data.length > 0)
                for (var data of results.data) {
                    oneResult.push(data);
                }
            return oneResult;
        });
}
