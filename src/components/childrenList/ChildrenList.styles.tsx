import styled from "styled-components"


export const StyledChildrenContainer = styled.div`
  margin: 0 30%;
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  
  ${({ theme }) => theme.mediaQueries.phone} {
    margin: 0 5%;
  }
  ${({ theme }) => theme.mediaQueries.miniTablet} {
    margin: 0 7%;
  }
  ${({ theme }) => theme.mediaQueries.tablet} {
  margin: 0 15%;
  }


  ul{
    width: 100%;
  }

  h2{
    width: 100%;
    margin: 0 20%;
  }
`
export const StyledChildrenList = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  span{
    margin-right: 0.5rem;
    word-break: break-word;
  }
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 1.3vw;

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borders};
  }

  th {
    background-color: ${({ theme }) => theme.colors.formBackground};
    font-weight: bold;

    span{
      margin-left: 0.5rem;
    }
  }
  tr {
    background-color: ${({ theme }) => theme.colors.white};
  }

  ${({ theme }) => theme.mediaQueries.phone} {
      font-size: 3.7vw;
    }
    ${({ theme }) => theme.mediaQueries.miniTablet} {
    font-size: 2.2vw;
  }
  ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: 1.7vw;
  }
`

export const StyledLoader = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
  text-align: center;
`

export const StyledError = styled.div`
  margin-top: 2rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.error};
  text-align: center;
`