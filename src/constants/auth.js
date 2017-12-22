////////////////////////////////////
// 权限唯一标识（前端使用）与路由映射表
//
// 唯一标识规则：
// 模块名称、功能名称组合（驼峰式写法）
////////////////////////////////////

export default {
  // api: '/product/api',
  // apiUserList: '/product/api/user',
  priceList: '/supply/price',
  // apiOrdersList: '/product/api/orders',
  // apiSalesList: '/product/api/sales',
  // apiRemittanceList: '/product/api/remittanceList',
  // apiRemittanceAccountList: '/product/api/remittanceBank',
  commodity: '/operation/commodity/list',
  commodityAddOrEdit: '/operation/commodity/add',
  stock: '/operation/stock',
  stockList: '/operation/stock/list',
  stockAccountList: '/operation/stock/list/stockListUser',
  stockCardList: '/operation/stock/list/stockListCardPwd',
  stockImportPackage: '/operation/stock/list/stockListPack',
  stockAddOrEdit: '/operation/stock/add',
  stockDirectAccountList: '/operation/stock/account',
  stockCardMgrList: '/operation/stock/card',
  wrongCardList: '/operation/stock/wrongCard',
  cardPwdLogList: '/operation/stock/cardPwdLog',
  // sup: '/operation/sup',
  // supSearchList: '/operation/sup/search',
  // supStateList: '/operation/sup/state',
  // supTransactionList: '/operation/sup/transaction',
  subReview: '/supply/review',
  supplyPrice: '/supply/price',
  priceGroup: '/supply/price/group',
  ordersList: '/order/detail',
  salesList: '/order/sales',
  serviceReceiveView: '/service/receive/complaint',
  serviceReceiveProcess: 'service/:oid/:mode/:cid',
  // report: '/operation/report',
  salseService: '/service',
  serviceReceiveList: '/service/receive',
  // serviceLaunchedList: '/operation/service/launched',
  userList: '/user/account',
  userSafety: '/user/safety',
  userInfo: '/user/info',
  financeFund: '/finance/fund',
  financeList: '/finance/detail',
  financeVerify: '/finance/verify',
  FinanceWithDrawList: '/finance/FinanceWithDrawPage',
  orderDetail: '/order/detail/showDetailInfo',
  salesDetail: '/order/sales/showSalesDetailInfo',
  serviceReceiveViewDetail: '/service/receive/showComplaintDetailInfo',
  financeViewDetail: '/finance/detail/showFinanceDetailInfo',
  manageImmediately: '/order/detail/showManageDetailInfo',
  // financeRemittanceList: '/finance/remittance',
  // financePayList: '/finance/pay',
};

////////////////////////////////////
// 示例
////////////////////////////////////

// {
//     'productAdd': '/product/add'
// }
