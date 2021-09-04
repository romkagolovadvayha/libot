import React from 'react';
import Header from '../../components/Cabinet/Header';
import LeftMenu from '../../components/Cabinet/LeftMenu';
import Sidebar from '../../components/Cabinet/Sidebar';
import Footer from '../../components/Cabinet/Footer';
import Authorization from '../../components/User/Authorization';
import styled from "@emotion/styled";
import {css} from '@emotion/react';
import "typeface-roboto";

interface Props {
    children: any;
    authorization: boolean;
    notAuthorize: boolean;
    title: string;
    sidebar?: boolean;
    h1?: string;
}

interface ContainerProps {
    sidebar?: boolean;
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 50px auto auto;
  gap: 0 0;
  grid-template-areas: 
    "leftnav header"
    "leftnav content"
    "leftnav footer";
  grid-template-columns: 100px auto;
  ${(props: ContainerProps) => props.sidebar === true && css`
    grid-template-areas: 
    "leftnav header header"
    "leftnav content sidebar"
    "leftnav footer footer";
    grid-template-columns: 100px auto 200px;
  `}

`;
const Content = styled.main`
  grid-area: content;
  min-height: 500px;
  height: calc(100vh - 50px - 120px);
  overflow-y: auto;
  padding: 2rem;
`;
const ContentH1 = styled.h1`
  font-size: 32px;
  font-weight: 700;

  + * {
    margin-top: 2rem;
  }
`;

export function CabinetLayout(props: Props) {
    const {children, authorization, notAuthorize, title, sidebar, h1} = props;
    document.title = title;
    return (
        <Authorization requared={authorization} notAuthorize={notAuthorize}>
            <Container sidebar={sidebar}>
                <Header/>
                <Content>
                    {h1 && <ContentH1>{h1}</ContentH1>}
                    <div>
                        {children}
                    </div>
                </Content>
                {sidebar === true && <Sidebar/>}
                <LeftMenu/>
                <Footer/>
            </Container>
        </Authorization>
    );
}
