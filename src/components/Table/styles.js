import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components' ;

export const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 480,
      paddingLeft: 40,
      paddingRight: 40,
      paddingBOttom: 0,
    },
  });
  
  export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
  `;