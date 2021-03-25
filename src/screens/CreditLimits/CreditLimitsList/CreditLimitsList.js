import React, {useEffect, useMemo} from 'react';
import './CreditLimitsList.scss';
import {useDispatch, useSelector} from "react-redux";
import IconButton from "../../../common/IconButton/IconButton";
import Table from "../../../common/Table/Table";
import Pagination from "../../../common/Pagination/Pagination";
import Loader from "../../../common/Loader/Loader";
import {getCreditLimitsList} from "../redux/CreditLimitsAction";

const CreditLimitsList = () => {
  const dispatch = useDispatch();
  const creditLimitListWithPageData = useSelector(({ creditLimits }) => creditLimits.creditLimitList);
  const { total, pages, page, limit, docs, headers } = useMemo(() => creditLimitListWithPageData, [
    creditLimitListWithPageData,
  ]);
  useEffect(() => {
    dispatch(getCreditLimitsList());
  },[])
  return <>
    <div className="page-header">
      <div className="page-header-name">Credit Limit List</div>
      <div className="page-header-button-container">
        <IconButton
                buttonType="secondary"
                title="filter_list"
                className="mr-10"
                buttonTitle="Click to apply filters on credit limit list"
        />
        <IconButton
                buttonType="primary"
                title="format_line_spacing"
                className="mr-10"
                buttonTitle="Click to select custom fields"
        />
      </div>
    </div>
    {docs ? (
            <>
              <div className="common-list-container">
                <Table
                        align="left"
                        valign="center"
                        tableClass="main-list-table"
                        data={docs}
                        headers={headers}
                        recordSelected={() => console.log('Record selected')}
                        recordActionClick={() => console.log('Record action clicked')}
                        rowClass="cursor-pointer"
                        haveActions
                />
              </div>
              <Pagination
                      className="common-list-pagination"
                      total={total}
                      pages={pages}
                      page={page}
                      limit={limit}
              />
            </>
    ) : (
                    <Loader />
            )}
  </>
}

export default CreditLimitsList;
