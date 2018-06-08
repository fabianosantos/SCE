import React from 'react'

import { CSSTransitionGroup } from 'react-transition-group'

const PopUp = ({ title, isOpened, onClose, children }) => (
  <CSSTransitionGroup
    transitionName='popup'
    transitionEnterTimeout={200}
    transitionLeaveTimeout={200}
  >
    {isOpened &&
      <div
        className='popup'
        onClick={e => e.target.classList.contains('popup') && onClose()}
      >
        <div className='popup-content'>
          <button onClick={onClose} className='popup-closeBtn' />
          {title &&
            <h2 className='popup-title'>
              {title}
            </h2>}
          {children(onClose)}
        </div>
      </div>}
    <style>
      {`
        .popup {
          position: fixed;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.75);
          height: 100vh;
          width: 100%;
          z-index: 9;
          overflow-y: auto;
        }

        .popup-content {
          padding: 1px 15px 0;
          background-color: white;
          min-height: 100vh;
          position: relative;
        }

        .popup-enter {
          opacity: 0.01;
          transform: scale(0.8) translateY(10vh);
        }

        .popup-enter.popup-enter-active {
          opacity: 1;
          transform: scale(1) translateY(0);
          transition: all 200ms;
        }

        .popup-leave {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        .popup-leave.popup-leave-active {
          opacity: 0.01;
          transform: scale(0.8) translateY(10vh);
          transition: all 200ms;
        }

        .popup-title {
          font-size: 1.25em;
          margin-top: 20px;
        }

        .popup-closeBtn {
          width: 20px;
          height: 20px;
          position: absolute;
          top: 0;
          right: 15px;
          top: 20px;
          cursor: pointer;
          border: none;
          outline: none;
          background-color: transparent;
          padding: 0;
        }

        .popup-closeBtn::before,
        .popup-closeBtn::after {
          content: '';
          display: block;
          position: absolute;
          width: 100%;
          height: 3px;
          background-color: black;
          top: 50%;
          margin-top: -1px;
        }
        .popup-closeBtn::after {
          transform: rotate(45deg);
        }
        .popup-closeBtn::before {
          transform: rotate(-45deg);
        }

        @media (min-width: 800px) {
          .popup {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .popup-content {
            max-width: 400px;
            min-height: unset;
            padding-bottom: 20px;
          }

          .popup-enter {
            transform: none;
          }

          .popup-enter.popup-enter-active {
            transform: none;
          }

          .popup-leave {
            transform: none;
          }

          .popup-leave.popup-leave-active {
            transform: none;
          }
        }
      `}
    </style>
  </CSSTransitionGroup>
)

export default PopUp
