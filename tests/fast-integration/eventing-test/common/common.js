const fs = require('fs');
const eventMeshSecretFilePath = process.env.EVENTMESH_SECRET_FILE || '';
const eventMeshNamespace = getEventMeshNamespace();
const natsBackend = 'nats';
const bebBackend = 'beb';

// returns the EventMesh namespace from the secret.
function getEventMeshNamespace() {
  try {
    const eventMeshSecret = JSON.parse(fs.readFileSync(eventMeshSecretFilePath, {encoding: 'utf8'}));
    return '/' + eventMeshSecret['namespace'];
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

module.exports = {
  eventMeshSecretFilePath,
  eventMeshNamespace,
  natsBackend,
  bebBackend,
};
