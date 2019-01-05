var React = require('react');
var ReactDOM = require('react-dom');

var WebDisplay = function() {
  return (
    <div class="container">
      <h1>Mass Mutual</h1>
      <table className="table table-condensed">
        <tr >
          <th className="row"><img  src={'MassMutual_Card.jpg'}  alt="Mass Mutual Card" /></th>
          <th className="row"><img  src="MassMutual_Card.JPG" /></th>
          <th className="row"><img  src="MassMutual_Card.JPG" /></th>
        </tr>
        <tr >
          <th className="row"><h2>Card Title  </h2></th>
          <th className="row"><h2>Card Title  </h2></th>
          <th className="row"><h2>Card Title  </h2></th>
        </tr>
        <tr>
          <th className="row">  </th>
          <th className="row">  </th>
          <th className="row">This card has extra content in it and so it's <br/>content is taller than other cards</th>
        </tr>
        <tr>
          <th className="row">  </th>
          <th className="row">  </th>
          <th className="row">Just text</th>
        </tr>
        <tr>
          <th className="row"><input className="button" type="button" value="Button" /></th>
          <th className="row"><a href="" >link</a></th>
          <th className="row">Legal text</th>
        </tr>
      </table>
    </div>
  );
};

ReactDOM.render(<WebDisplay />, document.getElementById('root'));
