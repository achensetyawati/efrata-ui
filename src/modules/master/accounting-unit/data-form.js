import { inject, bindable, computedFrom } from "aurelia-framework";
var DivisionLoader = require("../../../loader/division-loader-new");

export class DataForm {
  @bindable title;
  @bindable readOnly = false;
  @bindable data = { import: true };
  @bindable error = {};
  @bindable division;
  formOptions = {
    cancelText: "Kembali",
    saveText: "Simpan",
    deleteText: "Hapus",
    editText: "Ubah",
  };

  constructor() {}
  @computedFrom("data.Id")
  get isEdit() {
    return (this.data.Id || "").toString() != "";
  }

  bind(context) {
    this.context = context;
    this.data = this.context.data;
    this.error = this.context.error;

    if(this.data && this.data.Id){
      this.division = {
        Id: this.data.DivisionId,
        Code: this.data.DivisionCode,
        Name: this.data.DivisionName
      };
    }

    this.cancelCallback = this.context.cancelCallback;
    this.deleteCallback = this.context.deleteCallback;
    this.editCallback = this.context.editCallback;
    this.saveCallback = this.context.saveCallback;
  }

  get divisionLoader() {
    return DivisionLoader;
  }

 nameView = (unit) => {
        return `${unit.Code} - ${unit.Name} `;
    }

  divisionChanged(newValue, oldValue) {
    if (newValue) {
        this.data.DivisionId = newValue.Id;
        this.data.DivisionCode = newValue.Code;
        this.data.DivisionName = newValue.Name;
    }
  }

  activate() {}

  attached() {}
}
