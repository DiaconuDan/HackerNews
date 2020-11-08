import React from 'react';
import { Input } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledInput = styled(Input)`
    padding-right: 30px;
`

const SearchInput = ({ value, onChange }) => (
    <StyledInput icon='search' size='big' iconPosition='left' placeholder='Search for hackernews' value={value} onChange={onChange} />
)

export default SearchInput;