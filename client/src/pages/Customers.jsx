import React, { useEffect } from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Toolbar,
  Page,
} from "@syncfusion/ej2-react-grids";
import { useAppContext } from "../contexts/ContextProvider";

import { employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  const { fetchCustomers, customers } = useAppContext();

  useEffect(() => {
    fetchCustomers();
  }, []);
  const toolbarOptions = ["Search"];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Dashboard" title="All Customers" />
      <GridComponent
        dataSource={customers}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar]} />
      </GridComponent>
    </div>
  );
};
export default Customers;
