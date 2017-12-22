import { withRouter } from 'react-router';
// import PermissionWrapper from './utils/permissionWrapper';
import Index from './components/Index';
// import Confirmation from './containers/Confirmation';
// import ConfirmWait from './containers/ConfirmWait';
// import ConfirmPassed from './components/Confirmation/js/ConfirmPassed';
// import UserAccount from './containers/UserAccount';

export default [{
  path: '/',
  // component: withRouter(PermissionWrapper(Index)),
  // component: withRouter(PermissionWrapper(UserIsAuthenticated(Index))),
  component: withRouter(Index),
  breadcrumbName: '首页',
  // childRoutes: [
  //   {
  //     path: 'operation/commodity',
  //     breadcrumbName: '我的商品',
  //     getComponent: (nextState, cb) => {
  //       require.ensure([], (require) => {
  //         cb(null, withRouter(require('./components/Commodity/js/Commodity')));
  //       }, 'commodity');
  //     },
  //     indexRoute: {
  //       onEnter: (nextState, replace) => replace('/operation/commodity/list')
  //     },
  //     childRoutes: [
  //       {
  //         path: 'list',
  //         breadcrumbName: '商品列表',
  //         getComponent: (nextState, cb) => {
  //           require.ensure([], (require) => {
  //             cb(null, withRouter(require('./containers/CommodityList')));
  //           }, 'commodityList');
  //         }
  //       }, {
  //         path: 'add',
  //         breadcrumbName: '发布商品',
  //         getComponent: (nextState, cb) => {
  //           require.ensure([], (require) => {
  //             cb(null, withRouter(require('./containers/CommodityAdd')));
  //           }, 'commodityAdd');
  //         }
  //       }
  //     ]
  //   }, {
  //     path: 'operation/stock',
  //     breadcrumbName: '我的库存',
  //     getComponent: (nextState, cb) => {
  //       require.ensure([], (require) => {
  //         cb(null, withRouter(require('./components/Stock/js/Stock')));
  //       }, 'stock');
  //     },
  //     childRoutes: [
  //       {
  //         path: 'list',
  //         breadcrumbName: '库存管理',
  //         getComponent: (nextState, cb) => {
  //           require.ensure([], (require) => {
  //             cb(null, withRouter(require('./containers/StockList')));
  //           }, 'stockList');
  //         },
  //         childRoutes: [
  //           {
  //             path: 'stockListCardPwd',
  //             breadcrumbName: '卡密列表',
  //             getComponent: (nextState, cb) => {
  //               require.ensure([], (require) => {
  //                 cb(null, withRouter(require('./containers/StockListCardPwdLists')));
  //               }, 'StockListCardPwdLists');
  //             }
  //           },
  //           {
  //             path: 'stockListUser',
  //             breadcrumbName: '账号列表',
  //             getComponent: (nextState, cb) => {
  //               require.ensure([], (require) => {
  //                 cb(null, withRouter(require('./containers/StockListUserLists')));
  //               }, 'StockListUserLists');
  //             }
  //           },
  //           {
  //             path: 'stockListPack',
  //             breadcrumbName: '库存包列表',
  //             getComponent: (nextState, cb) => {
  //               require.ensure([], (require) => {
  //                 cb(null, withRouter(require('./containers/StockListPackLists')));
  //               }, 'StockListPackLists');
  //             }
  //           }
  //         ]
  //       },
  //       {
  //         path: 'wrongCard',
  //         breadcrumbName: '错卡池',
  //         getComponent: (nextState, cb) => {
  //           require.ensure([], (require) => {
  //             cb(null, withRouter(require('./containers/WrongCard')));
  //           }, 'wrongCardList');
  //         }
  //       },
  //       {
  //         path: 'add',
  //         breadcrumbName: '添加库存',
  //         getComponent: (nextState, cb) => {
  //           require.ensure([], (require) => {
  //             cb(null, withRouter(require('./containers/StockAdd')));
  //           }, 'StockAdd');
  //         }
  //       },
  //       {
  //         path: 'cardPwdLog',
  //         breadcrumbName: '卡密库存日志',
  //         getComponent: (nextState, cb) => {
  //           require.ensure([], (require) => {
  //             cb(null, withRouter(require('./containers/CardPwdLog')));
  //           }, 'cardPwdLogList');
  //         }
  //       },
  //       {
  //         path: 'account',
  //         breadcrumbName: '直储账号管理',
  //         getComponent: (nextState, cb) => {
  //           require.ensure([], (require) => {
  //             cb(null, withRouter(require('./containers/StockAccount')));
  //           }, 'stockAccount');
  //         }
  //       }, {
  //         path: 'card',
  //         breadcrumbName: '卡密管理',
  //         getComponent: (nextState, cb) => {
  //           require.ensure([], (require) => {
  //             cb(null, withRouter(require('./containers/StockCard')));
  //           }, 'stockCard');
  //         }
  //       }
  //     ]
  //   }, {
  //     path: 'supply/review',
  //     breadcrumbName: '供货审核',
  //     getComponent: (nextState, cb) => {
  //       require.ensure([], (require) => {
  //         cb(null, withRouter(require('./containers/SupplyReview')));
  //       }, 'supplyReview');
  //     }
  //   },
  //   {
  //     path: 'supply/price',
  //     breadcrumbName: '密价设置',
  //     getComponent: (nextState, cb) => {
  //       require.ensure([], (require) => {
  //         cb(null, withRouter(require('./containers/ApiPrice')));
  //       }, 'apiPrice');
  //     },
  //     childRoutes: [
  //       {
  //         path: 'groupSearch',
  //         breadcrumbName: '设置密价',
  //         getComponent: (nextState, cb) => {
  //           require.ensure([], (require) => {
  //             cb(null, withRouter(require('./containers/ApiSecretPriceGroupSearch')));
  //           }, 'apiGroupSearch');
  //         }
  //       },
  //       {
  //         path: 'productSearch',
  //         breadcrumbName: '设置密价',
  //         getComponent: (nextState, cb) => {
  //           require.ensure([], (require) => {
  //             cb(null, withRouter(require('./containers/ApiSecretPriceProductSearch')));
  //           }, 'apiProupSearch');
  //         }
  //       },
  //       {
  //         path: 'group',
  //         breadcrumbName: '管理密价组',
  //         getComponent: (nextState, cb) => {
  //           require.ensure([], (require) => {
  //             cb(null, withRouter(require('./containers/ApiPriceSecretPriceUser')));
  //           }, 'apigroup');
  //         }
  //       }
  //     ]
  //   }, {
  //     path: 'order/detail',
  //     breadcrumbName: '订单明细',
  //     getComponent: (nextState, cb) => {
  //       require.ensure([], (require) => {
  //         cb(null, withRouter(require('./containers/OrdersDetail')));
  //       }, 'ordersDetail');
  //     },
  //     childRoutes: [
  //       {
  //         path: 'showDetailInfo',
  //         breadcrumbName: '订单详情',
  //         getComponent: (nextState, cb) => {
  //           require.ensure([], (require) => {
  //             cb(null, withRouter(require('./containers/ShowDetailComponent')));
  //           }, 'ordersDetailInfo');
  //         }
  //       },
  //       {
  //         path: 'showManageDetailInfo',
  //         breadcrumbName: '订单详情',
  //         getComponent: (nextState, cb) => {
  //           require.ensure([], (require) => {
  //             cb(null, withRouter(require('./containers/ShowManageDetailComponent')));
  //           }, 'manageOrdersDetailInfo');
  //         }
  //       }
  //     ]
  //   }, {
  //     path: 'order/sales',
  //     breadcrumbName: '销售明细',
  //     getComponent: (nextState, cb) => {
  //       require.ensure([], (require) => {
  //         cb(null, withRouter(require('./containers/OrdersSales')));
  //       }, 'ordersSales');
  //     },
  //     childRoutes: [
  //       {
  //         path: 'showSalesDetailInfo',
  //         breadcrumbName: '订单详情',
  //         getComponent: (nextState, cb) => {
  //           require.ensure([], (require) => {
  //             cb(null, withRouter(require('./containers/ShowSalesDetailComponent')));
  //           }, 'salesDetailInfo');
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     path: 'service/receive',
  //     breadcrumbName: '收到的投诉',
  //     getComponent: (nextState, cb) => {
  //       require.ensure([], (require) => {
  //         cb(null, withRouter(require('./containers/ServiceReceive')));
  //       }, 'serviceReceive');
  //     },
  //     childRoutes: [
  //       {
  //         path: 'complaint',
  //         breadcrumbName: '投诉详情',
  //         getComponent: (nextState, cb) => {
  //           require.ensure([], (require) => {
  //             cb(null, withRouter(require('./containers/ServiceComplaint')));
  //           }, 'serviceComplaint');
  //         }
  //       },
  //       {
  //         path: 'showComplaintDetailInfo',
  //         breadcrumbName: '订单详情',
  //         getComponent: (nextState, cb) => {
  //           require.ensure([], (require) => {
  //             cb(null, withRouter(require('./containers/ShowComplaintDetailComponent')));
  //           }, 'complaintDetailInfo');
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     path: 'user/account',
  //     breadcrumbName: '员工帐号',
  //     getComponent: (nextState, cb) => {
  //       require.ensure([], () => {
  //         cb(null, withRouter(UserAccount));
  //       }, 'userAccount');
  //     },
  //     childRoutes: [
  //       {
  //         path: 'permission/:openid',
  //         breadcrumbName: '分配权限',
  //         getComponent: (nextState, cb) => {
  //           require.ensure([], (require) => {
  //             cb(null, withRouter(require('./containers/AccountPermission')));
  //           }, 'userAccountPermission');
  //         }
  //       }
  //     ]
  //   },
  //   //     {
  //   //       path: 'user/safety',
  //   //       getComponent: (nextState, cb) => {
  //   //         require.ensure([], (require) => {
  //   //           cb(null, withRouter(require('./containers/UserSafy')));
  //   //         }, 'userSafety');
  //   //       }
  //   //     },
  //   //     {
  //   //       path: 'user/info',
  //   //       getComponent: (nextState, cb) => {
  //   //         require.ensure([], (require) => {
  //   //           cb(null, withRouter(require('./components/UserInfo/js/UserInfo')));
  //   //         }, 'userInfo');
  //   //       }
  //   //     },
  //   {
  //     path: 'finance/fund',
  //     breadcrumbName: '我的资金',
  //     getComponent: (nextState, cb) => {
  //       require.ensure([], (require) => {
  //         cb(null, withRouter(require('./components/FinanceFund')));
  //       }, 'financeFund');
  //     }
  //   },
  //   {
  //     path: 'finance/detail',
  //     breadcrumbName: '财务明细',
  //     getComponent: (nextState, cb) => {
  //       require.ensure([], (require) => {
  //         cb(null, withRouter(require('./containers/FinanceDetail')));
  //       }, 'financeDetail');
  //     },
  //     childRoutes: [
  //       {
  //         path: 'showFinanceDetailInfo',
  //         breadcrumbName: '订单详情',
  //         getComponent: (nextState, cb) => {
  //           require.ensure([], (require) => {
  //             cb(null, withRouter(require('./containers/ShowFinanceDetailComponent')));
  //           }, 'financeDetailInfo');
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     path: 'finance/verify',
  //     breadcrumbName: '资金核算',
  //     getComponent: (nextState, cb) => {
  //       require.ensure([], (require) => {
  //         cb(null, withRouter(require('./components/FinanceVerify')));
  //       }, 'financeVerify');
  //     }
  //   },
  //   {
  //     path: 'finance/FinanceWithDrawPage',
  //     breadcrumbName: '提现记录',
  //     getComponent: (nextState, cb) => {
  //       require.ensure([], (require) => {
  //         cb(null, withRouter(require('./containers/FinanceWithDrawPage')));
  //       }, 'financeWithDrawPage');
  //     },
  //     childRoutes: []
  //   },
  //   // {
  //   //   path: 'finance/account',
  //   //   getComponent: (nextState, cb) => {
  //   //     require.ensure([], (require) => {
  //   //       cb(null, withRouter(require('./containers/AccountPermission')));
  //   //     }, 'accountPermission');
  //   //   }
  //   // }
  // ]
},
{
  path: 'login',
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      cb(null, withRouter(require('./components/login/Login.js')));
    }, 'login');
  }
},
  // {
  //   path: 'confirmation',
  //   getComponent: (nextState, cb) => {
  //     require.ensure([], () => {
  //       cb(null, withRouter(Confirmation));
  //     }, 'confirmation');
  //   }
  // },
  // {
  //   path: 'confirmWait',
  //   getComponent: (nextState, cb) => {
  //     require.ensure([], () => {
  //       cb(null, withRouter(ConfirmWait));
  //     }, 'confirmWait');
  //   }
  // },
  // {
  //   path: 'ConfirmPassed',
  //   getComponent: (nextState, cb) => {
  //     require.ensure([], () => {
  //       cb(null, withRouter(ConfirmPassed));
  //     }, 'confirmWait');
  //   }
  // },
  // {
  //   path: '/serverError',
  //   getComponent: (nextState, cb) => {
  //     require.ensure([], (require) => {
  //       cb(null, withRouter(require('./components/PageServerError/js/PageServerError')));
  //     }, 'serverError');
  //   }
  // },
  // {
  //   path: '*',
  //   getComponent: (nextState, cb) => {
  //     require.ensure([], (require) => {
  //       cb(null, withRouter(require('./components/PageNotFound/js/PageNotFound')));
  //     }, 'notFound');
  //   }
  // }
];
