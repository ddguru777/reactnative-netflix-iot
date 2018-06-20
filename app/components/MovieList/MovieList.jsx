var React = require("react");

var MovieList = React.createClass({
  render: function() {
    return (
      <div className="container">
        <a href="/sleepers">
          <img
            src="./movies-imgs/sleepers.jpg"
            border="0"
            width="120px"
            height="178px"
          />
        </a>
        <a href="/jobs">
          <img
            src="./movies-imgs/jobs.jpg"
            border="0"
            width="120px"
            height="178px"
          />
        </a>
        <a href="/claireinmotion">
          <img
            src="./movies-imgs/claireinmotion.jpg"
            border="0"
            width="120px"
            height="178px"
          />
        </a>
        <a href="/looper">
          <img
            src="./movies-imgs/looper.jpg"
            border="0"
            width="120px"
            height="178px"
          />
        </a>
        <a href="/wofw2005">
          <img
            src="./movies-imgs/wofw2005.jpg"
            border="0"
            width="120px"
            height="178px"
          />
        </a>
        <a href="/silence">
          <img
            src="./movies-imgs/silence.jpg"
            border="0"
            width="120px"
            height="178px"
          />
        </a>
        <a href="/interestelar">
          <img
            src="./movies-imgs/interestelar.jpg"
            border="0"
            width="120px"
            height="178px"
          />
        </a>
        <a href="/americanhistoryx">
          <img
            src="./movies-imgs/americanhx.jpg"
            border="0"
            width="120px"
            height="178px"
          />
        </a>
      </div>
    );
  }
});

module.exports = MovieList;
