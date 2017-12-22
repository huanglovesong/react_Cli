import moment from 'moment';

// type 0 input 1 select 2 RangePicker
const beginTime = moment().format('YYYY-MM-DD 00:00:00');
const endTime = moment().format('YYYY-MM-DD 23:59:59');
export default {
  StockAccountList: [
    {
      name: '库存编号',
      index: '',
      type: 0,
      id: 'Stockid'
    },
    {
      name: '库存名称',
      index: 2,
      type: 0,
      id: 'StockName'
    },
    {
      name: '直储账号',
      index: 1,
      type: 0,
      id: 'RechargeUserName'
    },
    {
      name: '状态',
      index: '4',
      type: 1,
      id: 'IsUsed',
      defaultValue: '',
      items: [
        {
          name: '全部',
          value: ''
        },
        {
          name: '未用完',
          value: 'false'
        },
        {
          name: '已用完',
          value: 'true'
        }
      ]
    }
  ],
  StockCardList: [
    {
      name: '有效期',
      index: '1',
      type: 2,
      id: 'ExpireTime',
    },
    {
      name: '导卡时间',
      index: '2',
      type: 2,
      id: 'TradeTime',
    },
    { name: '库存编号', index: '3', type: 0, id: 'StockId' },
    {
      name: '库存名称',
      index: '4',
      type: 0,
      id: 'StockName'
    },
    {
      name: '卡号',
      index: '5',
      type: 0,
      id: 'CardNumber'
    },
    {
      name: '供应商',
      index: '6',
      type: 0,
      id: 'Supplier'
    },
    { name: '批次号', index: '7', type: 0, id: 'BatchCode' },
  ],
  OrderList: [
    {
      name: '订单编号',
      index: '',
      type: 0,
      id: 'OrderId'
    },
    {
      name: '进货商',
      index: 1,
      type: 0,
      id: 'DealerSiteId'
    },
    {
      name: '商品编号',
      index: '3',
      type: 0,
      id: 'ProductId'
    },
    {
      name: '商品名称',
      index: '4',
      type: 0,
      id: 'ProductName'
    },
    {
      name: '交易时间',
      index: '6',
      type: 2,
      id: 'TradeTime',
      defaultValue: {
        beginTime,
        endTime
      }
      // defaultValue: [moment().format('YYYY-MM-DD 00:00:00'), moment('2017-05-31')]
    },
    {
      name: '商品类型',
      index: '5',
      type: 1,
      id: 'ProductType',
      defaultValue: '0',
      items: [
        {
          name: '全部',
          value: '0'
        },
        {
          name: '卡密',
          value: '1'
        },
        {
          name: '卡密直储',
          value: '2'
        },
        {
          name: '在线直储',
          value: '4'
        }
      ]
    },
    {
      name: '充值账号 ',
      index: '10',
      type: 0,
      id: 'TopupAccount'
    },
    {
      name: '代充账号',
      index: '9',
      type: 0,
      id: 'ChargeUseAccount'
    },
    {
      name: '处理人',
      index: '10',
      type: 0,
      id: 'Charger'
    }
  ],
  // 订单销售搜索
  OrderSaleList: [
    {
      name: '订单编号',
      index: '',
      type: 0,
      id: 'OrderId'
    },
    {
      name: '进货商户',
      index: 1,
      type: 0,
      id: 'DealerSiteId'
    },
    {
      name: '商品编号',
      index: '3',
      type: 0,
      id: 'ProductId'
    },
    {
      name: '商品名称',
      index: '4',
      type: 0,
      id: 'ProductName'
    },
    {
      name: '交易时间',
      index: '6',
      type: 2,
      id: 'TradeTime',
      defaultValue: {
        beginTime,
        endTime
      }
    },
    {
      name: '订单状态',
      index: '5',
      type: 1,
      id: 'Status',
      defaultValue: '0',
      items: [
        {
          name: '全部',
          value: '0'
        },
        {
          name: '交易成功',
          value: '5'
        },
        {
          name: '交易失败',
          value: '6'
        }
      ]
    },
    {
      name: '商品类型',
      index: '5',
      type: 1,
      id: 'ProductType',
      defaultValue: '0',
      items: [
        {
          name: '全部',
          value: '0'
        },
        {
          name: '卡密',
          value: '1'
        },
        {
          name: '卡密直储',
          value: '2'
        },
        {
          name: '在线直储',
          value: '4'
        }
      ]
    },
    {
      name: '代充账号',
      index: '9',
      type: 0,
      id: 'ChargeUseAccount'
    },
    {
      name: '充值账号 ',
      index: '10',
      type: 0,
      id: 'TopupAccount'
    }
  ],
  SupplyReviewList: [
    { name: '商品名称', index: '', type: 0, id: 'ProductName' },
    { name: '商品编号', index: '3', type: 0, id: 'ProductId' },
    { name: '进货商名称', index: '1', type: 0, id: 'DealerName' },
    { name: '进货商编号', index: '2', type: 0, id: 'DealerId' },
  ],
  // 已密价商品
  HasPriceSecretList: [
    {
      name: '商品名称',
      index: '',
      type: 0,
      id: 'ProductName'
    },
    {
      name: '商品编号',
      index: 1,
      type: 0,
      id: 'ProductId'
    }
  ],
  // 错卡池
  WrongCardList: [
    { name: '卡号', index: '', type: 0, id: 'CardNumber' },
    { name: '供货商', index: '2', type: 0, id: 'Supplier' },
    { name: '库存名称', index: '3', type: 0, id: 'StockName' },
    {
      name: '处理状态',
      index: '5',
      type: 1,
      id: 'CardStatus',
      defaultValue: '',
      items: [
        {
          name: '全部',
          value: ''
        },
        {
          name: '未处理',
          value: '1'
        },
        {
          name: '已处理',
          value: '2'
        }
      ]
    },
    {
      name: '标记时间',
      index: '4',
      type: 2,
      id: 'TradeTime',
      defaultValue: {
        beginTime,
        endTime
      }
    },
    { name: '订单编号', index: '1', type: 0, id: 'OrderNo' },
  ],
  CardPwdLogList: [
    { name: '库存名称', index: '0', type: 0, id: 'StockName' },
    { name: '库存编号', index: '1', type: 0, id: 'StockId' },
    { name: '批次号', index: '2', type: 0, id: 'BatchCode' },
    { name: '供货商', index: '4', type: 0, id: 'Supplier' },
    {
      name: '发生时间',
      index: '6',
      type: 2,
      id: 'TradeTime',
      defaultValue: {
        beginTime,
        endTime
      }
    },
    {
      name: '操作类型',
      index: '7',
      type: 1,
      id: 'OperateType',
      defaultValue: '',
      items: [
        {
          name: '全部',
          value: ''
        },
        {
          name: '出库',
          value: '1'
        },
        {
          name: '返库',
          value: '2'
        },
        {
          name: '人工返库',
          value: '3'
        },
        {
          name: '添加',
          value: '4'
        },
        {
          name: '删除',
          value: '5'
        }
      ]
    },
    { name: '订单编号', index: '5', type: 0, id: 'OrderNo' },
  ],
  // 卡密列表查询
  StockListCardPwdList: [
    {
      name: '有效期',
      index: '1',
      type: 2,
      id: 'ExpireTime',
    },
    {
      name: '导卡时间',
      index: '2',
      type: 2,
      id: 'TradeTime',
    },
    { name: '卡号', index: '3', type: 0, id: 'CardNumber' },
    { name: '供货商', index: '4', type: 0, id: 'Supplier' },
    { name: '批次号', index: '5', type: 0, id: 'BatchCode' },
  ]
};
