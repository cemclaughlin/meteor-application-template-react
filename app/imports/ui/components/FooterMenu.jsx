import React from 'react';
import { Grid, List } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <Grid centered columns = {3} className="footer-background">
          <Grid.Column>
            Navigation
            <hr/>
            <List>
              <List.Item>About Us</List.Item>
              <List.Item>Videos</List.Item>
              <List.Item>Store Locations</List.Item>
              <List.Item>Shipping & Returns</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            MAIN MENU
            <hr/>
            <List>
              <List.Item>Men</List.Item>
              <List.Item>Women</List.Item>
              <List.Item>Kids</List.Item>
              <List.Item>Brands</List.Item>
              <List.Item>Search</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            CONNECT
            <hr/>
            Sign up for the latest updates

          </Grid.Column>
        </Grid>
    );
  }
}
