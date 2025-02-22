docker run --rm -it --privileged \
  --name my-node-app \
  --network="host" \
  -v $(pwd):/usr/src/app \
  -w /usr/src/app \
  node:22 bash -c "npm install && npm run dev"
