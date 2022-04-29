export const userColumns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img className='cellImg' src={params.row.img} alt='avatar' />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },
  {
    field: 'address',
    headerName: 'Address ',
    width: 130,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 130,
  },
  // {
  //   field: 'status',
  //   headerName: 'Status',
  //   width: 180,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];
