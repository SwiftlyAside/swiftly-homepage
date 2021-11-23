import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Mesh, Scene } from 'three'

export function loadGLTFModel(
  scene: Scene,
  glbPath: string,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.load(
      glbPath,
      (gltf) => {
        const model = gltf.scene
        model.name = 'something'
        model.position.x = 0
        model.position.y = 0
        model.receiveShadow = receiveShadow
        model.castShadow = castShadow
        scene.add(model)

        model.traverse((node) => {
          if ((<Mesh>node).isMesh) {
            node.castShadow = castShadow
            node.receiveShadow = receiveShadow
          }
        })
        resolve(model)
      },
      undefined,
      reject
    )
  })
}
