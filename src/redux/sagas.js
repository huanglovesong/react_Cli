import { watchReceiveComplaintSaga, watchComplaintDetailSaga, watchOperatorComplaintSaga, watchOperatorWaitcomplaintSaga } from './Receive';
import { watchCheckLoginSaga, watchSendCodeSaga, watchCreatePersonalIdentificationSaga, watchImgUploadSaga, watchSendCodeCompanySaga, watchCreateCompanyIdentificationSaga, watchGetCurrentSaga, watchGetAccountSaga, watchGetSubAccountPermissionListExtendSaga, watchLogOutSaga, watchUpdateIdentificationSaga, watchUpdateIdentificationCompanySaga } from './account';
import { watchGetProductdetailSaga, watchGetSubcategoryListThreeSaga, watchGetSubcategoryListTwoSaga, watchGetSubcategoryListSaga, watchGetSubcategoryListFourSaga, watchGetParentCategoriesSaga, watchCreateProductSaga, watchUpdateProductSaga, watchGetTemplateListSaga, watchGetSingTemplateSaga, watchGetCategorySaga, watchGetRelationCategoryListSaga } from './commodityAdd';
import { watchGetProductlistSaga, watchShelvedProductSaga, watchUnshelvedProductSaga, watchDeleteProductSaga, watchUpdateProductPriceSaga, watchUpdateProductNameSaga, watchBatchDeleteProductSaga, watchUpdateProductNameAndPriceSaga } from './commodityList';
import { watchGetOrderListSaga, watchGetOrderDetailSaga, watchHandleOrderSaga } from './order';
import { watchSaleSaga } from './orderSales';
import { watchGetErrorPasswordCardListSaga, watchHandleErrorCardSaga } from './passwordCard';
import { watchGetProductTplSaga } from './productTpl';
import { watchGetSecretPriceGroupsSaga, watchCleanGroupsSaga, watchSetGroupsSaga, watchGetAllSecretPriceGroupsSaga, watchGetGroupsSaga, watchCreateSecretPriceGroupSaga, watchGetSingleSecretPriceGroupsSaga, watchGetProductListPriceGroupsSaga, watchGetSecretPriceFromProductidPriceGroupsSaga, watchGetSecretPriceFromProductidPriceProductSaga, watchSetSecretPriceSaga, watchCleanSecretPriceSaga, watchGetProductListPriceProductsSaga, watchGetSingleSecretPriceGroupsProductSaga, watchGetAllSecretPriceGroupsProductSaga, watchGetDetailsFromGroupIdSaga, watchSetSecretPriceGroupSaga, watchCleanSecretPriceGroupSaga, watchGetSecretPriceGroupsDealersSaga, watchStasticSecretPriceGroupSaga, watchDeleteSecretGroupSaga, watchSetSecretGroupSaga, watchSetSecretpriceAndPriceSaga, watchSetSecretPriceAndPriceGroupSaga, watchGetProductSecretPriceListSaga, watchGetSecretPriceGroupsByProductIdSaga } from './secretPriceSetting';
import { watchGetStockLogListSaga } from './stock';
import { watchGetStockAccountSaga, watchDeleteStockAccountSaga, watchBatchDeleteStockAccountSaga, watchBatchUpdateStockAccountSaga, watchAddStockAccountSaga, watchUpdateStockAccountSaga } from './stockAccount';
import { watchGetStockCardSaga } from './stockCard';
import { watchCreateStockSaga, watchGetStockListSaga, watchDeleteStockSaga, watchGetZoneStocklistSaga, watchUpdateStockSaga, watchCreatePasswordCardSaga, watchGetRelationStocklistSaga, watchGetUnrelationStocklistSaga, watchDeleteRelationstockSaga, watchGetPreviewPwdCardSaga, watchImportPwdCardSaga, watchUpdatePrepaidCardSaga, watchUpdateRelationStockPrioritySaga, watchRelationStockSaga, watchGetPwdcardListSaga, watchGetStocklistImportzoneSaga, watchRelationStockImportzoneSaga, watchDeleteRelationStockImportZoneSaga, watchGetStockDetailSaga, watchGetDockStockListSaga, watchDeletePasswordCardSaga, watchCheckStockSaga } from './stockList';
import { watchGetListSaga, watchDenySupplySaga, watchAllowSupplySaga, watchStasticPurchaseApplyAuditSaga } from './supplyReview';
import { watchSubAccountListSaga, watchSubAccountDetailSaga, watchUpdateSubAccountSaga, watchLockSubAccountSaga, watchUnLockSubAccountSaga, watchAddSubAccountSaga } from './userAccount';
import { watchGetSubAccountPermissionListSaga, watchSetSubAccountPermissionSaga } from './userPermission';
import { watchFinancedetailSaga, watchGetStatisticsSaga, watchGetWithDrawDetailSaga, watchGetWithDrawPageSaga, watchApplyWithDrawSaga, watchGetWithDrawAmountSaga } from './finance';

export default function* rootSaga() {
  yield [
    watchReceiveComplaintSaga(),
    watchComplaintDetailSaga(),
    watchOperatorComplaintSaga(),
    watchOperatorWaitcomplaintSaga(),
    watchCheckLoginSaga(),
    watchSendCodeSaga(),
    watchCreatePersonalIdentificationSaga(),
    watchImgUploadSaga(),
    watchSendCodeCompanySaga(),
    watchCreateCompanyIdentificationSaga(),
    watchGetCurrentSaga(),
    watchGetAccountSaga(),
    watchGetSubAccountPermissionListExtendSaga(),
    watchLogOutSaga(),
    watchUpdateIdentificationSaga(),
    watchUpdateIdentificationCompanySaga(),
    watchGetProductdetailSaga(),
    watchGetSubcategoryListThreeSaga(),
    watchGetSubcategoryListTwoSaga(),
    watchGetSubcategoryListSaga(),
    watchGetSubcategoryListFourSaga(),
    watchGetParentCategoriesSaga(),
    watchCreateProductSaga(),
    watchUpdateProductSaga(),
    watchGetTemplateListSaga(),
    watchGetSingTemplateSaga(),
    watchGetCategorySaga(),
    watchGetRelationCategoryListSaga(),
    watchGetProductlistSaga(),
    watchShelvedProductSaga(),
    watchUnshelvedProductSaga(),
    watchDeleteProductSaga(),
    watchUpdateProductPriceSaga(),
    watchUpdateProductNameSaga(),
    watchBatchDeleteProductSaga(),
    watchUpdateProductNameAndPriceSaga(),
    watchGetOrderListSaga(),
    watchGetOrderDetailSaga(),
    watchHandleOrderSaga(),
    watchSaleSaga(),
    watchGetErrorPasswordCardListSaga(),
    watchHandleErrorCardSaga(),
    watchGetProductTplSaga(),
    watchGetSecretPriceGroupsSaga(),
    watchCleanGroupsSaga(),
    watchSetGroupsSaga(),
    watchGetAllSecretPriceGroupsSaga(),
    watchGetGroupsSaga(),
    watchCreateSecretPriceGroupSaga(),
    watchGetSingleSecretPriceGroupsSaga(),
    watchGetProductListPriceGroupsSaga(),
    watchGetSecretPriceFromProductidPriceGroupsSaga(),
    watchGetSecretPriceFromProductidPriceProductSaga(),
    watchSetSecretPriceSaga(),
    watchCleanSecretPriceSaga(),
    watchGetProductListPriceProductsSaga(),
    watchGetSingleSecretPriceGroupsProductSaga(),
    watchGetAllSecretPriceGroupsProductSaga(),
    watchGetDetailsFromGroupIdSaga(),
    watchSetSecretPriceGroupSaga(),
    watchCleanSecretPriceGroupSaga(),
    watchGetSecretPriceGroupsDealersSaga(),
    watchStasticSecretPriceGroupSaga(),
    watchDeleteSecretGroupSaga(),
    watchSetSecretGroupSaga(),
    watchSetSecretpriceAndPriceSaga(),
    watchSetSecretPriceAndPriceGroupSaga(),
    watchGetProductSecretPriceListSaga(),
    watchGetSecretPriceGroupsByProductIdSaga(),
    watchGetStockLogListSaga(),
    watchGetStockAccountSaga(),
    watchDeleteStockAccountSaga(),
    watchBatchDeleteStockAccountSaga(),
    watchBatchUpdateStockAccountSaga(),
    watchAddStockAccountSaga(),
    watchUpdateStockAccountSaga(),
    watchGetStockCardSaga(),
    watchCreateStockSaga(),
    watchGetStockListSaga(),
    watchDeleteStockSaga(),
    watchGetZoneStocklistSaga(),
    watchUpdateStockSaga(),
    watchCreatePasswordCardSaga(),
    watchGetRelationStocklistSaga(),
    watchGetUnrelationStocklistSaga(),
    watchDeleteRelationstockSaga(),
    watchGetPreviewPwdCardSaga(),
    watchImportPwdCardSaga(),
    watchUpdatePrepaidCardSaga(),
    watchUpdateRelationStockPrioritySaga(),
    watchRelationStockSaga(),
    watchGetPwdcardListSaga(),
    watchGetStocklistImportzoneSaga(),
    watchRelationStockImportzoneSaga(),
    watchDeleteRelationStockImportZoneSaga(),
    watchGetStockDetailSaga(),
    watchGetDockStockListSaga(),
    watchDeletePasswordCardSaga(),
    watchCheckStockSaga(),
    watchGetListSaga(),
    watchDenySupplySaga(),
    watchAllowSupplySaga(),
    watchStasticPurchaseApplyAuditSaga(),
    watchSubAccountListSaga(),
    watchSubAccountDetailSaga(),
    watchUpdateSubAccountSaga(),
    watchLockSubAccountSaga(),
    watchUnLockSubAccountSaga(),
    watchAddSubAccountSaga(),
    watchGetSubAccountPermissionListSaga(),
    watchSetSubAccountPermissionSaga(),
    watchFinancedetailSaga(),
    watchGetStatisticsSaga(),
    watchGetWithDrawDetailSaga(),
    watchGetWithDrawPageSaga(),
    watchApplyWithDrawSaga(),
    watchGetWithDrawAmountSaga()
  ];
}
