import React from 'react';

class SumComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      no1: '',
      no2: '',
      msg: '',
      errmsg: {}
    };
  }

  doValidation = () => {
    const { no1, no2 } = this.state;
    let temperr = {};
    let isValid = true;

    if (!no1) {
      temperr.txt1 = "Enter No1";
      isValid = false;
    } else if (isNaN(no1)) {
      temperr.txt1 = "Enter Only Digits in No1";
      isValid = false;
    }

    if (!no2) {
      temperr.txt2 = "Enter No2";
      isValid = false;
    }

    this.setState({ errmsg: temperr });
    return isValid;
  }

  doSum = () => {
    const isValid = this.doValidation();
    if (isValid) {
      const sum = parseInt(this.state.no1) + parseInt(this.state.no2);
      this.setState({ msg: `Sum is: ${sum}` });
    } else {
      this.setState({ msg: '' });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
        <h1>Do Sum</h1>

        <div>
          <input
            type="text"
            name="no1"
            placeholder="Enter No1"
            value={this.state.no1}
            onChange={this.handleChange}
          />
          <div style={{ color: 'red' }}>{this.state.errmsg.txt1}</div>
        </div>

        <div>
          <input
            type="text"
            name="no2"
            placeholder="Enter No2"
            value={this.state.no2}
            onChange={this.handleChange}
          />
          <div style={{ color: 'red' }}>{this.state.errmsg.txt2}</div>
        </div>

        <button onClick={this.doSum} style={{ marginTop: '10px' }}>
            Sum
        </button>

        <h3 style={{ color: 'green' }}>{this.state.msg}</h3>
      </div>
    );
  }
}

export default SumComponent;
