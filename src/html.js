import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

// let stylesStr
// if (process.env.NODE_ENV === `production`) {
//   try {
//     stylesStr = require(`!raw-loader!../public/styles.css`)
//   } catch (e) {
//     console.log(e)
//   }
// }

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
};

class Html extends Component {
  render() {
    let css;
    // if (process.env.NODE_ENV === `production`) {
    //   css = (
    //     <style
    //       id="gatsby-inlined-css"
    //       dangerouslySetInnerHTML={{ __html: stylesStr }}
    //     />
    //   )
    // }

    return (
      <html lang="en">
        <head>
          {this.props.headComponents}

          <meta name="referrer" content="origin" />
          <meta charSet="utf-8" />
          <title>Ashley Worsham's Portfolio</title>
          <meta
            name="description"
            content="Gatsby example site demoing sass plugin"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />

          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

Html.propTypes = propTypes;

module.exports = Html;
