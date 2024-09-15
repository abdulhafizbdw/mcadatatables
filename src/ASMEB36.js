import React from "react";

import DataTable, {
  Alignment,
  Direction,
} from "react-data-table-component-with-filter";

let data = require("./Data/ASMEB36-Table1.json");
const title = "ASME B36.10 Dimensions and Sizes of Steel Pipes";

const columns = [
  {
    name: "NPS",
    selector: (row) => row.NPS,
    sortable: true,
    filterable: true,
    reorder: true,
  },
  {
    name: "DN",
    selector: (row) => row.DN,
    sortable: true,
    filterable: true,
    reorder: true,
  },
  {
    name: "Identification",
    selector: (row) => row.Identification,
    filterable: true,
    sortable: true,
    reorder: true,
  },
  {
    name: "Schedule NO.",
    selector: (row) => row.Schedule,
    filterable: true,
    sortable: true,
    reorder: true,
  },
  {
    name: "Outside Diameter (in)",
    selector: (row) => row.OD_in,
    filterable: true,
    sortable: true,
    reorder: true,
  },
  {
    name: "Outside Diameter (mm)",
    selector: (row) => row.OD_mm,
    filterable: true,
    sortable: true,
    reorder: true,
  },
  {
    name: "Wall Thickness (in)",
    selector: (row) => row.WT_in,
    filterable: true,
    sortable: true,
    reorder: true,
  },
  {
    name: "Wall Thickness (mm)",
    selector: (row) => row.WT_mm,
    filterable: true,
    sortable: true,
    reorder: true,
  },
];

export default function ASMEB36() {
  return (
    <>
      <DataTable
        title={title}
        columns={columns}
        data={data}
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
