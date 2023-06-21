export interface Years {
  recordsets: Recordset[][]
  recordset: Recordset2[]
  output: Output
  rowsAffected: number[]
}

export interface Recordset {
  dataid: number
  yearTh: string
  yearCr: string
  yearDesc: string
}

export interface Recordset2 {
  dataid: number
  yearTh: string
  yearCr: string
  yearDesc: string
}

export interface Output {}
