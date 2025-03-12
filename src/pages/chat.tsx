import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import Chat from 'src/sections/chat/view/chat-view';


// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Users - ${CONFIG.appName}`}</title>
      </Helmet>

      <Chat />
    </>
  );
}
