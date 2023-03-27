import React from 'react';
import { Resizable } from 'react-resizable';

const ResizableTitle = (props: any) => {
  // eslint-disable-next-line react/prop-types
  const { onResize, width, minWidth, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      minConstraints={[minWidth, 0]}
      height={0}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

export default ResizableTitle;
