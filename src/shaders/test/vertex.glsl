varying vec2 vUv;
varying float vElevation;

uniform float uscale;

void main()
{
    vUv = uv;

    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    /* float elevation = sin(modelPosition.x * uFrequency.x - uTime) * 0.1; */
    /* elevation += sin(modelPosition.y * uFrequency.y - uTime) * 0.1; */

    /* modelPosition.z += modelPosition.z + sin(uv.x * 3.1415)* -0.15; */

    

    /* vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition; */
    /* gl_Position = projectedPosition; */

    gl_Position = projectionMatrix * (modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0 ) + vec4((position.x * uscale), position.y, (position.z  + sin(uv.x * 3.1415)* -0.1), 0.0));



    
   
    
    /* vElevation = elevation; */
}