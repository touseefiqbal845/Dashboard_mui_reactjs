import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { JobsView } from 'src/sections/job/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Jobs - ${CONFIG.appName}`}</title>
      </Helmet>

      <JobsView />
    </>
  );
}
