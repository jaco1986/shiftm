import React from 'react';

import Alert from '@site/src/components/Alert';

function Assumptions({children, name}) {
  return (
    <Alert type="info" fill={true} icon={false} rounded={true} className="list--icons list--icons--arrow list--tight list--indent margin-bottom--lg">
      <p class="text--lg margin-bottom--sm" style={{marginTop: '-0.25em'}}>If you think your account has been compromised, contact us immediately</p>
      {children}
    </Alert>
  )
}

export default Assumptions;
