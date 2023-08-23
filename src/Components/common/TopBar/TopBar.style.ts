import { transition } from "Styles/StyleUtils";
import styled from "styled-components";

export const TopBarWrapper = styled.div`
  .isomorphicTopbar {
    height: 70px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0 265px 0 31px;
    z-index: 1000;
    ${transition()};

    &.collapsed {
      padding: 0 109px 0 31px;

      @media only screen and (max-width: 767px) {
        padding: 0px 15px;
      }
    }

    .isoLeft {
      display: flex;
      align-items: center;

      @media only screen and (max-width: 767px) {
        margin: 0 20px 0 0;
      }

      .triggerBtn {
        width: 24px;
        height: 100%;
        display: -webkit-inline-flex;
        display: -ms-inline-flex;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: 0;
        outline: 0;
        position: relative;
        cursor: pointer;

        .menu-icon {
          font-size: 22px;
        }

        &:before {
          /* content: "\f20e"; */
          font-family: "Ionicons";
          font-size: 26px;
          color: inherit;
          line-height: 0;
          position: absolute;
        }
      }
    }
  }
`;
