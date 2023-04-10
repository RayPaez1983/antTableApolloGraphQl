import styled from 'styled-components';

const TitleTableColumn = styled.h1`
  &&& {
    font-weight: 400;
    font-size: 14px;
    color: #000000;
  }
`;
const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  padding-right: 20px;
  input {
    width: 100%;
    text-align: center;
    border: '#000A68';
    height: 26px;
    font-size: 20px;
    adding: 0;
  }
  button {
    padding: 0 10px !important;
    height: 28px !important;
    background: #000a68 !important;
  }
  p {
    margin-top: 18px;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  }
  svg {
    font-size: 18px;
  }
`;

export { TitleTableColumn, PaginationWrapper };
