import React from 'react';
import {Card, CardTitle} from 'material-ui';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class Home extends React.Component {

  /**
   * Render the component.
   */
   getChildContext() {
     return { muiTheme: getMuiTheme(baseTheme) };
 }

  render() {
    return (
      <Card className="container">
        <CardTitle title="React Application" subtitle="This is the home page." />
      </Card>
    );
  }

}
Home.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default Home;
