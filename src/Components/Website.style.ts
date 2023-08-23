import { contentWrapperPropsType } from "Helpers/TypeConstants";
import { BREAKPOINTS, COLORS } from "Styles/Constants";
import styled from "styled-components";

export const WebsiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 100%;

  .content-layout {
    overflow: hidden;
    overflow-x: hidden;

    .content {
      /* padding: 70px 0 0; */
      flex-shrink: 0;
      background: #f1f3f6;
      position: relative;
    }
  }

  .footer-style {
    background: #fff;
    text-align: center;
    border-top: 1px solid ${COLORS.GREY};
  }
`;

export const ContentWrapper = styled.div<contentWrapperPropsType>`
  background-color: #fff;
  overflow: auto;
  height: ${(props) =>
    props?.$ShowSideBar ? `calc(100vh - ${props?.$mobileHeight}px)` : `100vh`};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    /* height: ${(props) =>
      props?.$ShowSideBar
        ? `calc(${props?.$mobileHeight}px - 70px)`
        : `${props?.$mobileHeight}px`}; */
  }
`;
