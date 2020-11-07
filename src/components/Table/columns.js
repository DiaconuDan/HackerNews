export const columns = [
    { id: 'author', label: 'Author', minWidth: 170 },
    { id: 'title', label: 'Title', minWidth: 200 },
    {
      id: 'num_comments',
      label: 'Number of comments',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'actions',
      label: 'Actions',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    }
  ];