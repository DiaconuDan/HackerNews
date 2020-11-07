import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchInput = ({ value, onChange }) => (
    <Input icon='search' size='large' iconPosition='left' placeholder='Search for hackernews' value={value} onChange={onChange} />
)

export default SearchInput;