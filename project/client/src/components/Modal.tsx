import React, { Dispatch, SetStateAction, useState, ChangeEvent } from 'react';
import { createPortal } from 'react-dom';
import { StyledModal } from '../styles/Modal.styled';
import { Button } from './Button';

interface IModal {
  text: string;
  isOpen: boolean;
  handleOpen: Dispatch<SetStateAction<boolean>>;
  handleUpdate: (id: number, email: string) => Promise<void>;
  userToUpdate: number;
}

export const Modal = ({ text, isOpen, handleOpen, handleUpdate, userToUpdate }: IModal) => {
  const [emailInput, setEmailInput] = useState('');

  return isOpen
    ? createPortal(
        <StyledModal>
          <div className='Modal-overlay'></div>
          <div className='Modal-wrapper'>
            <form
              className='Modal-content'
              onSubmit={e => {
                e.preventDefault(), handleUpdate(userToUpdate, emailInput);
              }}
            >
              <label htmlFor='email'>{text && text}</label>
              <input
                type='email'
                id='email'
                placeholder='Type email...'
                name='email'
                value={emailInput}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmailInput(e.target.value)}
              />
              <div>
                <Button type='submit' primary>
                  Submit
                </Button>
                <Button type='button' handleClick={() => handleOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </StyledModal>,
        document.getElementById('root') as HTMLElement,
      )
    : null;
};
