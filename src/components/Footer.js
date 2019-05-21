import React from 'react';
import { Container, Image, List, Segment } from 'semantic-ui-react';

const Footer = props => {
  return (
    <div>
      <Segment inverted style={{ margin: '5em 0em 0em', padding: '2em 0em' }} vertical>
        <Container textAlign="center">
          <Image src="https://portal.nesbilgi.com.tr/Content/Login/logo.png" centered size="tiny" />
          <br />
          <List horizontal inverted divided link>
            <List.Item as="a" href="#">
              Nes Bilgi Veri Teknolojileri A.Ş.
            </List.Item>
            <List.Item as="a" href="#">
              E-Fatura
            </List.Item>
            <List.Item as="a" href="#">
              E-Arşiv
            </List.Item>
            <List.Item as="a" href="#">
              E-SMM
            </List.Item>
            <List.Item as="a" href="#">
              E-Defter
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
