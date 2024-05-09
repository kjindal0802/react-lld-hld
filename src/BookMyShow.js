const data = [
  {
    rowClass: "gold",
    rows: [
      {
        rowNumber: "A",
        seats: [
          {
            seatNumber: 1,
            status: "booked",
          },
        ],
      },
    ],
  },
  {
    rowClass: "silver",
    rows: [
      {
        rowNumber: "A",
        seats: [
          {
            seatNumber: 1,
            status: "booked",
          },
        ],
      },
    ],
  },
];

export default function App() {
  return (
    <div>
      {data.map(({ rows, rowClass }) => (
        <div className="row-class">
          <p>Class : {rowClass.toUpperCase()}</p>
          <div>
            {rows.map(({ seats }) => (
              <p>{}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function RowClass() {
    
}
