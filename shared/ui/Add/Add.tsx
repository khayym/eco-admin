import React from 'react';
import { Plus } from 'tabler-icons-react';
import { AddComponent } from './Add.Styled';
import { useRouter } from 'next/router';

export const Add = () => {
  const { push } = useRouter();

  return (
    <AddComponent onClick={() => push('/houses/add-house')}>
      <Plus size={22} strokeWidth={1.5} className="plus-icon" />
    </AddComponent>
  );
};
