import React, { useState } from 'react';
import { useCars } from 'redux/useCars';
import { ButtonLoadMor } from './ButtonLoadMore.styled';

const ButtonLoadMore = () => {
  const { updateCarsList } = useCars();
  const [page, setPage] = useState(2);
  const handleAddList = () => {
    setPage(page + 1);
    updateCarsList(page);
  };
  return (
    <div>
      <ButtonLoadMor type="button" onClick={handleAddList}>
        Load more
      </ButtonLoadMor>
    </div>
  );
};

export default ButtonLoadMore;
