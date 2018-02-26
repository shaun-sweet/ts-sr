import styled from 'styled-components'

const CompStyles = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
  align-items: center;

  & > .container {
    display: flex;
    flex-flow: column;
    flex: 1;
    align-items: center;
    width: 100%;
  }

  main {
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;
    width: 100%;

    & > .login-success {
      display: flex;
      flex-flow: column;
      .ant-spin {
        margin-top: 10em;
      }
    }
  }

`

export default CompStyles
