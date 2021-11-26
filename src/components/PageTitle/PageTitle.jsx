import React from 'react';
import { PageTitleContainer } from './styles';
import logo from '../../assets/opaboxlogo.svg';

const PageTitle = () => {
  return (
    <PageTitleContainer>
      <h1>Desafio</h1>
      <img src={logo} alt="Opaxbox Logo" />
    </PageTitleContainer>
  );
};

export default PageTitle;
