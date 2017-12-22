import React from 'react';
import { dateFormat } from '../utils';
import { A } from '../components/Auth/js/Auth';

import Icon, * as icon from '../components/Icon/js/Icon';

const tableColumns = {
  // 供货审核tableColumns
  supplyReviewColumns(that) {
    return [
      {
        title: '申请商品名称/编号',
        dataIndex: 'ProductName',
        width: 180,
        render: (text, record) => (
          <div>
            <div>{text}</div>
            <div>({record.ProductId})</div>
          </div>
        )
      },
      {
        title: '商品价格',
        dataIndex: 'Price',
        render: (value, item) =>
          (<div>
            <p>面值：{item.FaceValue}</p>
            {item.PurchaseStatus === 2 ?
              (item.SecretPrice !== '0' ?
                <div><s style={{ color: '#C8C8C8' }}>售价：{value}</s>
                  <p>密价：{item.SecretPrice}</p></div> : <p>售价：{value}</p>)
              : <p>售价：{value}</p>}
          </div>)
      },
      {
        title: '进货商名称/编号',
        dataIndex: 'DealerName',
        width: 180,
        render: (text, record) => (
          <div>
            <div>{text}</div>
            <div>({record.DealerId})</div>
          </div>
        )
      },
      {
        title: '申请时间',
        dataIndex: 'CreateTime',
        render: (value) => dateFormat(value)
      },
      {
        title: '供货状态',
        dataIndex: 'PurchaseStatus',
        render: (value) => that.getStatus(value)
      },
      {
        title: '操作',
        width: 140,
        render: (item) => (that.getOper(item))
      }
    ];
  },
  // 销售明细tableColumns
  saleDetailsColumns(that) {
    return [
      {
        title: '订单编号',
        dataIndex: 'OrderId',
        width: '150px',
        render: (text, record) => (
          <A
            auth="salesDetail"
            authOpts={{
              hint: ''
            }}
            onClick={() => { that.handleDetailClick(record); }}
          >
            {record.OrderId}
          </A>
        )
      }, {
        title: '商品名称/编号',
        width: 180,
        dataIndex: 'SupplierProductName',
        render: (text, record) => (
          <div>
            <div>
              {text}
            </div>
            <div>
              ({record.SupplierProductId})
            </div>
          </div>
        )
      }, {
        title: '进货商户/编号',
        width: 180,
        dataIndex: 'DealerSiteName',
        render: (text, record) => (
          <div>
            <div>
              {text}
            </div>
            <div>
              ({record.DealerSiteId})
            </div>
          </div>
        )
      }, {
        title: '充值账号',
        width: 120,
        dataIndex: 'TopupAccount',
        render: (text) => <span>{text === '' ? '--' : text}</span>
      }, {
        title: '交易时间',
        width: 90,
        dataIndex: 'ReceiveTime',
        render: (text) => (dateFormat(text))
      }, {
        title: '交易金额',
        dataIndex: 'TotalCost',
        width: 120,
        render: text => (<div>
          {text[0]}元*{text[1]}个={text[2]}
        </div>)
      }, {
        title: '成本',
        width: 100,
        dataIndex: 'SupplierSaleCost'
      }, {
        title: '利润',
        width: 80,
        dataIndex: 'SupplierSaleProfit'
      }, {
        title: '订单状态',
        width: 80,
        dataIndex: 'TopupStatus',
        render: (text) => {
          switch (text) {
            case '未处理':
              return <span className="yellowfont">{text}</span>;
            case '处理中':
              return <span className="bluefont">{text}</span>;
            case '交易成功':
              return <span className="greenfont">{text}</span>;
            case '交易失败':
              return <span className="redfont">{text}</span>;
            case '可疑订单':
              return <span className="orangefont">{text}</span>;
            default:
              return '未知';
          }
        }
      }, {
        title: '操作',
        width: 50,
        dataIndex: 'Options',
        render: (text, record) => (
          <A
            auth="salesDetail"
            authOpts={{
              hint: '查看详情'
            }}
            onClick={() => { that.handleDetailClick(record); }}
          >
            <Icon glyph={icon.chakan}></Icon>
          </A>
        )
      }
    ];
  }
};
export default tableColumns;
