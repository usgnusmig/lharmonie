import React from "react";
import styled from "styled-components";

const SummaryStyle = styled.section`
  position: relative;
  text-align: center;
  max-width: 25rem;
  width: 90%;
  background-color: #fafafa;
  color: #333333;
  margin: auto;
  margin-top: -10rem;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 1px 10px 10px rgba(0, 0, 0, 0.25);

  h2 {
    color: #005000;
    font-size: 1.75rem;
  }

  p {
    padding-top: 1rem;
  }
`;

const ArticleSummary = () => {
  return (
    <SummaryStyle>
      <h2>
        Cafe Name
        <br />
        카페 이름
      </h2>
      <p>
        방문해주셔서 감사합니다.
        <br />
        우리 빵과 커피는 아주 맛있습니다.
      </p>
    </SummaryStyle>
  );
};

export default ArticleSummary;
