import API from '../dist/index'
import { keepStreamAlive } from './websocket'


async function main() {
  const client = API({
    apiKey: 'ohGTYpO8FsM63C7wyORFD4RZAXMduMIQbXzsGYqvxyg9rgtluXNbjTFpbxllgwoj',
    apiSecret: 'cUNIJLz7VxDbTqNXacsb9XuPIoqS0gV99gr5dazhdUWSd0HaBNyJt50Mhao9Ty1D',
  });

  client.ws.user((message) => {
    console.log('mess', message);
  });
}

main().then(() => {});
// keepStreamAlive(keepDataStream, 'zzDxxLx1VPpbRz6tw7ywZvgnyqK26SjKzfIkI8T3ZYFwA4ZyeSxTG5A5Mjul', correlationId, int)()
