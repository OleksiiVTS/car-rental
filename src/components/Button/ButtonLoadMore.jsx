import React, { useState } from 'react';
import { useCars } from 'redux/useCars';

const ButtonLoadMore = () => {
  const { updateCarsList } = useCars();
  const [page, setPage] = useState(2);
  const handleAddList = () => {
    setPage(page + 1);
    updateCarsList(page);
  };
  return (
    <div>
      <button type="button" onClick={handleAddList}>
        Load more
      </button>
    </div>
  );
};

export default ButtonLoadMore;
