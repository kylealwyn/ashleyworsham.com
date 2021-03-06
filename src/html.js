import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
};

// eslint-disable-next-line react/prefer-stateless-function
class Html extends Component {
  render() {
    return (
      <html lang="en">
        <head>
          {this.props.headComponents}

          <meta name="referrer" content="origin" />
          <meta charSet="utf-8" />
          <title>Ashley Worsham's Portfolio</title>
          <meta
            name="description"
            content="Ashley Worsham is a UX designer based in San Francisco, California"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="google-site-verification" content="gPEVsD8nV9QMefXArbnEwUAIxbuYmSvi28mclE8-cUo" />
          <link rel="shortcut icon" href="/images/logo.png" />
          <link href="https://fonts.googleapis.com/css?family=Istok+Web:400,700|Lora:400,700" rel="stylesheet" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
          <script src="https://unpkg.com/medium-zoom@1.0.2/dist/medium-zoom.min.js" />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />

          {this.props.postBodyComponents}
          <script dangerouslySetInnerHTML={{
            __html: `
            (function(w, d){
             var id='embedly-platform', n = 'script';
             if (!d.getElementById(id)){
               w.embedly = w.embedly || function() {(w.embedly.q = w.embedly.q || []).push(arguments);};
               var e = d.createElement(n); e.id = id; e.async=1;
               e.src = ('https:' === document.location.protocol ? 'https' : 'http') + '://cdn.embedly.com/widgets/platform.js';
               var s = d.getElementsByTagName(n)[0];
               s.parentNode.insertBefore(e, s);
             }
            })(window, document);
          `,
          }}
          />
        </body>
      </html>
    );
  }
}

Html.propTypes = propTypes;

module.exports = Html;
