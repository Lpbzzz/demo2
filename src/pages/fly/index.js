import React from 'react';
import { formatMessage } from 'umi-plugin-react/locale';

export default () => {
  return (
    <div>
      {
        formatMessage({
          id: 'exceptionand403.description.403',
          defaultMessage: 'Sorry, you don\'t have access to this page.',
        })
      }
    </div>
  );
}
