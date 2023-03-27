// eslint-disable-next-line consistent-return
const activeStatusFilterFunc = (data: any, operation: React.FormEvent<HTMLInputElement>) => {
  const requestedOperation = operation as unknown as string;
  let internalData;
  switch (requestedOperation) {
    case 'active':
      // eslint-disable-next-line no-case-declarations
      internalData = data.filter((element: any) => element.active === true);
      return internalData;
    case 'inactive':
      // eslint-disable-next-line no-case-declarations
      internalData = data.filter((element: any) => element.active === false);
      return internalData;
    case 'all':
      internalData = data;
      return internalData;
    case '':
      internalData = data;
      return internalData;
    default:
      return 'Unrecognized operation!';
  }
};

export default activeStatusFilterFunc;
