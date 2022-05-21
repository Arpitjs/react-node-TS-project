import React from 'react';
import { StyledWelcomePage, StyledWelcomeModal, StyledNavLink } from '../../styles/WelcomePage.styled';
import { Button } from '../../components/Button';
import { ContactPage } from '../ContactPage/ContactPage';

interface NavLinkProps {
  type: 'button';
  href: string;
  text: string;
}

export const WelcomePage = () => {
  const navLinks: NavLinkProps[] = [
    { type: 'button', href: '/signup', text: 'Sign Up' },
    { type: 'button', href: '/login', text: 'Login' },
  ];

  const token = localStorage.getItem('token');
  return (
    <>
      {!token ? (
        <StyledWelcomePage>
          <StyledWelcomeModal>
            <h1>Welcome!</h1>
            <div>
              {navLinks.map(link => (
                <StyledNavLink to={link.href} key={link.href}>
                  <Button type={link.type} primary>
                    {link.text}
                  </Button>
                </StyledNavLink>
              ))}
            </div>
          </StyledWelcomeModal>
        </StyledWelcomePage>
      ) : (
        <ContactPage />
      )}
    </>
  );
};
