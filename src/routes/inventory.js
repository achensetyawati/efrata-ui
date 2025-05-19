module.exports = [
    {
        route: "inventory/balance-stock-date-master",
        name: "inventory/balance-stock-date-master",
        moduleId: "modules/inventory/balance-stock-date-master/index",
        nav: true,
        title: "Master Tanggal Stock Opname",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K1' : 1},
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard"
        }
    },
    {
        route: "inventory/balance-stock-date-master",
        name: "inventory/balance-stock-date-master",
        moduleId: "modules/inventory/balance-stock-date-master/index",
        nav: true,
        title: "Master Tanggal Stock Opname",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K2' : 1},
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard"
        }
    },
    {
        route: "inventory/garment/leftover-warehouse/receipt/fabric",
        name: "inventory/garment/leftover-warehouse/receipt/fabric",
        moduleId: "modules/inventory/garment-leftover-warehouse/receipt/fabric/index",
        nav: true,
        title: "Penerimaan Gudang Sisa - FABRIC",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K3' : 1},
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard"
        }
    },
    {
        route: "inventory/garment/leftover-warehouse/receipt/accessories",
        name: "inventory/garment/leftover-warehouse/receipt/accessories",
        moduleId: "modules/inventory/garment-leftover-warehouse/receipt/accessories/index",
        nav: true,
        title: "Penerimaan Gudang Sisa - ACCESSORIES",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K4' : 1},
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard"
        }
    },
    {
        route: "inventory/garment/leftover-warehouse/receipt/finished-good",
        name: "inventory/garment/leftover-warehouse/receipt/finished-good",
        moduleId: "modules/inventory/garment-leftover-warehouse/receipt/finished-good/index",
        nav: true,
        title: "Penerimaan Gudang Sisa - BARANG JADI",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K5' : 1},
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard"
        }
    },
    {
        route: "inventory/garment/leftover-warehouse/receipt/aval",
        name: "inventory/garment/leftover-warehouse/receipt/aval",
        moduleId: "modules/inventory/garment-leftover-warehouse/receipt/aval/index",
        nav: true,
        title: "Penerimaan Gudang Sisa - AVAL",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K6' : 1},
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard"
        }
    },
    {
        route: "inventory/garment/leftover-warehouse/expenditure/fabric",
        name: "inventory/garment/leftover-warehouse/expenditure/fabric",
        moduleId: "modules/inventory/garment-leftover-warehouse/expenditure/fabric/index",
        nav: true,
        title: "Pengeluaran Gudang Sisa - FABRIC",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K7' : 1},
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard"
        }
    },
    {
        route: "inventory/garment/leftover-warehouse/expenditure/accessories",
        name: "inventory/garment/leftover-warehouse/expenditure/accessories",
        moduleId: "modules/inventory/garment-leftover-warehouse/expenditure/accessories/index",
        nav: true,
        title: "Pengeluaran Gudang Sisa - ACCESSORIES",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K8' : 1},
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard"
        }
    },
    {
        route: "inventory/garment/leftover-warehouse/expenditure/finished-good",
        name: "inventory/garment/leftover-warehouse/expenditure/finished-good",
        moduleId: "modules/inventory/garment-leftover-warehouse/expenditure/finished-good/index",
        nav: true,
        title: "Pengeluaran Gudang Sisa - BARANG JADI",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K9' : 1},
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard"
        }
    },
    {
        route: "inventory/garment/leftover-warehouse/expenditure/aval",
        name: "inventory/garment/leftover-warehouse/expenditure/aval",
        moduleId: "modules/inventory/garment-leftover-warehouse/expenditure/aval/index",
        nav: true,
        title: "Pengeluaran Gudang Sisa - AVAL",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K10' : 1},
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard"
        }
    },
    {
        route: "inventory/garment/leftover-warehouse/master/comodity",
        name: "inventory/garment/leftover-warehouse/master/comodity",
        moduleId: "modules/inventory/garment-leftover-warehouse/master/comodity/index",
        nav: true,
        title: "Master Komoditi Gudang Sisa",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K11' : 1},

            //permission: { "C9": 1, "B1": 1, "PG": 1, "PDU":1 },
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard"
        }
    },
    {
        route: "inventory/garment/leftover-warehouse/master/buyer",
        name: "inventory/garment/leftover-warehouse/master/buyer",
        moduleId: "modules/inventory/garment-leftover-warehouse/master/garment-leftover-warehouse-buyer/index",
        nav: true,
        title: "Buyer Gudang Sisa Garment",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K12' : 1},

            //permission: { "C9": 1, "B1": 1, "PG": 1, "PDU":1 },
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard",
        },
    },
    {
        route: "inventory/garment/leftover-warehouse/report/receipt-monitoring",
        name: "inventory/garment/leftover-warehouse/report/receipt-monitoring",
        moduleId: "modules/inventory/garment-leftover-warehouse/receipt/report/fabric-accessories/index",
        nav: true,
        title: "Report Penerimaan Gudang Sisa Fabric dan Accessories",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K13' : 1},

            //permission: { C9: 1, "PG": 1, "PDU":1 },
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard",
        },
    },
    {
        route: "inventory/garment/leftover-warehouse/report/expenditure-finished-goods",
        name: "inventory/garment/leftover-warehouse/report/expenditure-finished-goods",
        moduleId: "modules/inventory/garment-leftover-warehouse/receipt/report/finished-good/index",
        nav: true,
        title: "Report Penerimaan Gudang Sisa - Barang Jadi",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K14' : 1},

            //permission: { C9: 1, "PG": 1, "PDU":1 },
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard",
        },
    },
    {
        route: "inventory/garment/leftover-warehouse/report/aval-receipt-monitoring",
        name: "inventory/garment/leftover-warehouse/report/aval-receipt-monitoring",
        moduleId: "modules/inventory/garment-leftover-warehouse/receipt/report/aval/index",
        nav: true,
        title: "Report Penerimaan Gudang Sisa Aval",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K15' : 1},

            //permission: { C9: 1, "PG": 1 , "PDU":1},
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard",
        },
    },
    {
        route: "inventory/garment/leftover-warehouse/reports/expenditure-leftover-report",
        name: "inventory/garment/leftover-warehouse/reports/expenditure-leftover-report",
        moduleId: "modules/inventory/garment-leftover-warehouse/reports/expenditure-leftover-report/index",
        nav: true,
        title: "Report Pengeluaran Gudang Sisa - Fabric dan Accessories",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K16' : 1},

            //permission: { "C9": 1, "PG": 1, "PDU":1 },
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard"
        }
    },
    {
        route: "inventory/garment/leftover-warehouse/expenditure/report/finished-good",
        name: "inventory/garment/leftover-warehouse/expenditure/report/finished-good",
        moduleId: "modules/inventory/garment-leftover-warehouse/expenditure/report/finished-good/index",
        nav: true,
        title: "Report Pengeluaran Gudang Sisa - Barang Jadi",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K17' : 1},

            //permission: { C9: 1, "PG": 1, "PDU":1 },
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard",
        },
    },
    {
        route: "inventory/garment/leftover-warehouse/expenditure/report/aval",
        name: "inventory/garment/leftover-warehouse/expenditure/report/aval",
        moduleId: "modules/inventory/garment-leftover-warehouse/expenditure/report/aval/index",
        nav: true,
        title: "Report Pengeluaran Gudang Sisa - Aval",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K18' : 1},

            //permission: { C9: 1, "PG": 1, "PDU":1 },
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard",
        },
    },
    {
        route: "inventory/garment/leftover-warehouse/balance-stock/report/fabric",
        name: "inventory/garment/leftover-warehouse/balance-stock/report/fabric",
        moduleId: "modules/inventory/garment-leftover-warehouse/balance-stock/report/fabric/index",
        nav: true,
        title: "Report Stock Gudang Sisa - FABRIC",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K19' : 1},

            //permission: { C9: 1, "PG": 1, "PDU":1 },
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard",
        },
    },
    {
        route: "inventory/garment/leftover-warehouse/balance-stock/report/acc",
        name: "inventory/garment/leftover-warehouse/balance-stock/report/acc",
        moduleId: "modules/inventory/garment-leftover-warehouse/balance-stock/report/acc/index",
        nav: true,
        title: "Report Stock Gudang Sisa - ACCESSORIES",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K20' : 1},

            //permission: { C9: 1, "PG": 1, "PDU":1 },
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard",
        },
    },
    {
        route: "inventory/garment/leftover-warehouse/balance-stock/report/finished-good",
        name: "inventory/garment/leftover-warehouse/balance-stock/report/finished-good",
        moduleId: "modules/inventory/garment-leftover-warehouse/balance-stock/report/finished-good/index",
        nav: true,
        title: "Report Stock Gudang Sisa - Barang Jadi",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K21' : 1},

            //permission: { C9: 1, "PG": 1, "PDU":1 },
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard",
        },
    },
    {
        route: "inventory/garment/leftover-warehouse/balance-stock/report/aval",
        name: "inventory/garment/leftover-warehouse/balance-stock/report/aval",
        moduleId: "modules/inventory/garment-leftover-warehouse/balance-stock/report/aval/index",
        nav: true,
        title: "Report Stock Gudang Sisa - Aval",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K22' : 1},

            //permission: { C9: 1, "PG": 1, "PDU":1 },
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard",
        },
    },
    {
        route: "inventory/garment/leftover-warehouse/balance-stock",
        name: "inventory/garment/leftover-warehouse/balance-stock",
        moduleId: "modules/inventory/garment-leftover-warehouse/balance-stock/index",
        nav: true,
        title: "Balance Stok Gudang Sisa",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K23' : 1},

            //permission: { C9: 1, "PG": 1, "PDU":1 },
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard",
        },
    },


    {
        route: "inventory/garment/leftover-warehouse/balance-stock/reports/bookkeeping/recap-stock",
        name: "inventory/garment/leftover-warehouse/balance-stock/reports/bookkeeping/recap-stock",
        moduleId: "modules/inventory/garment-leftover-warehouse/reports/bookkeeping/recap-stock/index",
        nav: true,
        title: "Report Rekap Persediaan Gudang Sisa",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K24' : 1},

            //permission: { C9: 1, "PG": 1, "PDU":1 },
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard",
        },
    },
    {
        route: "inventory/garment/leftover-warehouse/reports/bookkeeping/flow-stock",
        name: "inventory/garment/leftover-warehouse/reports/bookkeeping/flow-stock",
        moduleId: "modules/inventory/garment-leftover-warehouse/reports/bookkeeping/flow-stock/index",
        nav: true,
        title: "Report Flow Persediaan Gudang Sisa",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K25' : 1},

            //permission: { C9: 1, "PG": 1, "PDU":1 },
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard",
        },
    },
    {
        route: "inventory/garment/leftover-warehouse/balance-stock/reports/bookkeeping/detail",
        name: "inventory/garment/leftover-warehouse/balance-stock/reports/bookkeeping/detail",
        moduleId: "modules/inventory/garment-leftover-warehouse/reports/bookkeeping/detail/index",
        nav: true,
        title: "Report Detail Persediaan Gudang Sisa",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K26' : 1},

            //permission: { C9: 1, "PG": 1, "PDU":1 },
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard",
        },
    },
    {
        route: "inventory/garment/leftover-warehouse/reports/bookkeeping/bookkeeping-stock",
        name: "inventory/garment/leftover-warehouse/reports/bookkeeping/bookkeeping-stock",
        moduleId: "modules/inventory/garment-leftover-warehouse/reports/bookkeeping/bookkeeping-stock/index",
        nav: true,
        title: "Report Stock Gudang Sisa",
        auth: true,
        settings: {
            group: "Inventory",
            permission : {'K27' : 1},

            //permission: { C9: 1, "PG": 1, "PDU":1 },
            subGroup: "gudang sisa garment",
            iconClass: "fa fa-dashboard",
        },

    },
]