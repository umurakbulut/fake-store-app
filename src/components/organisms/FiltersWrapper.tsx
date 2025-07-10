"use client";

import styled from "styled-components";

const FiltersWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  select {
    min-width: 200px;
  }
`;

export default FiltersWrapper;
