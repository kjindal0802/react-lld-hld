import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createRowData = createAsyncThunk(
  "grid/createRowData",
  async (data, thunkAPI) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const rowTempData = [];
        for (let i = 0; i < 20; i++) {
          rowTempData.push({
            a: Math.floor(((i + 323) * 25435) % 10000),
            b: Math.floor(((i + 323) * 23221) % 10000),
            c: Math.floor(((i + 323) * 468276) % 10000),
            d: 0,
            e: 0,
          });
        }
        resolve(rowTempData);
      }, 2000);
    });
  }
);

const gridSlice = createSlice({
  name: "grid",
  initialState: {
    rowData: [],
  },
  reducers: {},
  extraReducers: {
    [createRowData.fulfilled]: (state, action) => {
      state.rowData = action.payload;
    },
    [createRowData.pending]: (state, action) => {
      state.rowData = [];
    },
    [createRowData.rejected]: (state, action) => {},
  },
});

// export const {} = gridSlice.actions;

export default gridSlice.reducer;
