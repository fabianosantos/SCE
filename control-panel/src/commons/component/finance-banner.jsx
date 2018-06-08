import React, {Component} from 'react';
import config from '../../generated/config.js'

class FinanceBanner extends Component {

    render() {
  
      return (
        <div className='finance-component'>
          <div className='finance-container'>
            <div className="finance-card-container">
                <img className='finance-card' alt="cartão" src={config.finance.imageBrandCard}/> 
              </div>
              <div className="finance-title-container">
                <h1 className="finance-title">{config.finance.finance_title}</h1>
                <h3 className="finance-subtitle">{config.finance.finance_subtitle}</h3>
              </div>
              <div className="finance-list-container">
                <div className="finance-list">
                  <ul className="finance-list-cl1">
                    <li><span>{config.finance.first_message}</span></li>
                    <li><span>{config.finance.second_message}</span></li>
                  </ul>
                  <ul>
                    <li><span>{config.finance.third_message}</span></li>
                    <li><span>{config.finance.fourth_message}</span></li>
                  </ul>
                </div>
              </div> 
          </div>          
        </div>
      );
    }
  }
  
  export default FinanceBanner;
  