import React from 'react';
import { CustomModal, CustomLoadingModal } from 'src/components/commons/customModal';
import CustomButton from 'src/components/commons/customButton';
import { render, screen, fireEvent } from '@testing-library/react';

test('test Confirm Modal', () => {
  const okActionFunction = jest.fn();
  const cancelActionFunction = jest.fn();

  render(
    <div>
      <CustomModal
        modalStatus
        onCancelAction={cancelActionFunction}
        onOkAction={okActionFunction}
        centered
        closable
        modalTitle={<div>This is a test modal title.</div>}
        modalBody={
          <div>
            <p>This is a test modal body.</p>
          </div>
        }
        footer={
          <div>
            <CustomButton onClick={okActionFunction} type='primary' title='OK' />
          </div>
        }
      />
    </div>,
  );
  const modalTitle = screen.queryByText(/this is a test modal title./i);
  expect(modalTitle).toBeInTheDocument();
  const modalBody = screen.queryByText(/this is a test modal body./i);
  expect(modalBody).toBeInTheDocument();
  const modalFooter = screen.queryByText(/ok/i);
  expect(modalFooter).toBeInTheDocument();
  fireEvent.click(modalFooter as unknown as Element | Node | Document | Window);
  expect(okActionFunction).toHaveBeenCalledTimes(1);
  const closableButton = screen.getByTestId('custom-modal').querySelector('.ant-modal-close');
  expect(closableButton).toBeInTheDocument();
  fireEvent.click(closableButton as unknown as Element | Node | Document | Window);
  expect(cancelActionFunction).toHaveBeenCalledTimes(1);
});

test('test Loading Modal', () => {
  render(<CustomLoadingModal modalStatus modalTitle='Deleting records...' />);
  const modalTitle = screen.queryByText(/deleting records.../i);
  expect(modalTitle).toBeInTheDocument();
  const closableButton = screen
    .getByTestId('custom-loading-modal')
    .querySelector('.ant-modal-close');
  expect(closableButton).not.toBeInTheDocument();
  const modalSpin = screen.getByTestId(/modal-spin/i);
  expect(modalSpin).toBeInTheDocument();
});
