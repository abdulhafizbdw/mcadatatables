import React from "react";

import DataTable, {
  Alignment,
  Direction,
} from "react-data-table-component-with-filter";

let jsonData = require("./Data/ASMEB16-Table2.json");
const title = "ASME B16.5 Pressure Temperature Ratings (F)";

const columns = [
  {
    name: "Temp Deg F",
    selector: (row) => row.Temp_deg_F,
    sortable: true,
    filterable: true,
    reorder: true,
  },
  {
    name: "150",
    selector: (row) => row.onefifty,
    sortable: true,
    filterable: true,
    reorder: true,
  },
  {
    name: "300",
    selector: (row) => row.threehun,
    filterable: true,
    sortable: true,
    reorder: true,
  },
  {
    name: "400",
    selector: (row) => row.fourhun,
    filterable: true,
    sortable: true,
    reorder: true,
  },
  {
    name: "600",
    selector: (row) => row.sixhun,
    filterable: true,
    sortable: true,
    reorder: true,
  },
  {
    name: "900",
    selector: (row) => row.ninehun,
    filterable: true,
    sortable: true,
    reorder: true,
  },
  {
    name: "1500",
    selector: (row) => row.onefive,
    filterable: true,
    sortable: true,
    reorder: true,
  },
  {
    name: "2500",
    selector: (row) => row.twofive,
    filterable: true,
    sortable: true,
    reorder: true,
  },
  {
    name: "Material Group",
    selector: (row) => row.Material_Group,
    filterable: true,
    sortable: true,
    reorder: true,
  },
];

export default function ASMEB16F() {
  return (
    <>
      <DataTable
        title={title}
        columns={columns}
        data={jsonData}
        defaultSortFieldId={1}
        pagination={true}
        striped={true}
        noTableHead={false}
        persistTableHead={false}
        noHeader={false}
        subHeader={false}
        subHeaderAlign={Alignment.RIGHT}
        subHeaderWrap={false}
        noContextMenu={false}
        fixedHeader={false}
        fixedHeaderScrollHeight="300px"
        direction={Direction.AUTO}
        responsive={true}
        disabled={false}
      />
    </>
  );
}
