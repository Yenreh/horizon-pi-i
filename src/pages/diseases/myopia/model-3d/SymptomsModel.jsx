/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function SymptomsModel(props) {
    const { nodes, materials } = useGLTF('/models-3d/myopia/model-2.glb')
    const groupRef = useRef()

    // Variables para controlar la rotación y traslación manual
    let rotationSpeed = 0
    let translationSpeed = 0

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key.toUpperCase() // Convertir la tecla a mayúsculas
            if (key === 'A') {
                rotationSpeed = -0.02 // Rotar hacia la izquierda
            } else if (key === 'D') {
                rotationSpeed = 0.02 // Rotar hacia la derecha
            } else if (key === 'W') {
                translationSpeed = -0.1 // Acercar (mover hacia adelante en el eje Z)
            } else if (key === 'S') {
                translationSpeed = 0.1 // Alejar (mover hacia atrás en el eje Z)
            }
        }

        const handleKeyUp = (event) => {
            const key = event.key.toUpperCase() // Convertir la tecla a mayúsculas
            if (key === 'A' || key === 'D') {
                rotationSpeed = 0 // Detener la rotación al soltar la tecla
            } else if (key === 'W' || key === 'S') {
                translationSpeed = 0 // Detener la traslación al soltar la tecla
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [])


    useFrame(({ clock }) => {
        // Rotación automática leve
        groupRef.current.rotation.y +=  Math.sin(clock.getElapsedTime()) * 0.001
    
        // Rotación manual
        groupRef.current.rotation.y += rotationSpeed
    
        // Traslación manual en el eje Z
        if (groupRef.current) {
            groupRef.current.position.z += translationSpeed
            // Limitar la traslación para evitar que el objeto se aleje demasiado o se acerque demasiado
            if (groupRef.current.position.z > 5) {
                groupRef.current.position.z = 5
            } else if (groupRef.current.position.z < -5) {
                groupRef.current.position.z = -5
            }
        }
    })

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.SnellenTable.geometry}
                material={materials.SnellenTableMaterial}
                castShadow
            />
        </group>
    )
}

export default SymptomsModel

useGLTF.preload('/model-2.glb')