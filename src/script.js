import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import testVertexShader from './shaders/test/vertex.glsl'
import testFragmentShader from './shaders/test/fragment.glsl'
import testVertexShader2 from './shaders/test/vertex2.glsl'
import testFragmentShader2 from './shaders/test/fragment2.glsl'
import testVertexShader3 from './shaders/test/vertex2.glsl'
import testFragmentShader3 from './shaders/test/fragment2.glsl'
import { DoubleSide, Mesh } from 'three'



//// VOICE

// PASO 1 ::: DETECTAR EL NAVEGADOR


let compatible = true
if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
    alert('El Navegador Firefox(Telefono y escritorio) no son compatible con el Reconocimiento de voz, para una mejor experiencia recomendamos Chrome');
    compatible = false
    // Do Firefox-related activities
}











let word = "text"
let word2 = "text"
if(compatible){
    // 2.1 Esta api tiene nombres distintos según el navegador porque aún está en fase experimental, por eso las listamos todas e instanciamos la primera que consiga
      const recognition = new (window.SpeechRecognition ||  window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
                
    // 2.2 Definimos el idioma a escuchar 
    recognition.lang = "es-US";
    
    // 2.3 Configuramos que cuando termine de reconocer algo vuelva a escuchar
    recognition.onend = event => { recognition.start(); };
    // 2.3 Pasamos la función que se llamará cuando haya un resultado del reconocimiento de voz
    recognition.onresult = resultado => { manejarResultado(resultado); }; 
    // 2.4 Empezamos a escuchar
    recognition.start();
    }




    const manejarResultado = resultado => {
        // 3.1 PINTAMOS LOS RESULTADOS EN EL HTML
        console.log(resultado.results[0][0].transcript)

        /* centerimage.style.content = "url('" + arrayinfo.textimagecss[1] + "')" */
        

        let currentword = resultado.results[0][0].transcript
        let currentwords = currentword.split(" ")
        console.log(currentwords)

        
        if(true){
            for(let i = 0; i < currentwords.length; i++){
                console.log("fase1")
                console.log(arrayinfo.length)
                word = currentwords[i]
                console.log(word)
                console.log(arrayinfo.textpalabra)
                for(let j = 0; j < arrayinfo.textpalabra.length; j++){
                    console.log("fase2")
                    word2 = arrayinfo.textpalabra[j]
                    console.log(word2)
                    if(word == word2){
                        centerimage.style.content = "url('" + arrayinfo.textimagecss[j] + "')"
                        break
                    }
                    else{
                        console.log(word + " no se parece a " + word2)
                    }
                }

            }
        }

    
        // *******BONUS*******
        // Si el resultado es igual a 'abrir wikipedia' abriremos wikipedia
        /* if(resultado.results[0][0].transcript.toLowerCase().trim() == 'abrir wikipedia'){
                            const childFrame = document.createElement('iframe');
                            childFrame.src = "https://es.wikipedia.org/wiki/Wikipedia:Portada";
                            childFrame.style.width = "100vw";
                            childFrame.style.height = "500px";
                            document.body.append(childFrame)
        } */
    }




  





    









function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}






/**
 * Textures
 */
 const textureLoader = new THREE.TextureLoader()
 const particleTexture = textureLoader.load('/textures/particles/1.png')


 const juan = textureLoader.load(
	// resource URL
	'/textures/play.png',

	// onLoad callback
	function ( texture ) {
		// in this example we create the material when the texture is loaded
		console.log(texture.image.width)	},

	// onProgress callback currently not supported
	undefined,

	// onError callback
	function ( err ) {
		console.error( 'An error happened.' );
	}
);









 const PlatTexture = textureLoader.load('/textures/play.png')
 PlatTexture.alphaMap = textureLoader.load('/textures/playalpha.png')

 const CloseTexture = textureLoader.load('/textures/close.png')
 CloseTexture.alphaMap = textureLoader.load('/textures/closealpha.png')


 







 var centerimage = document.getElementById("centerimage")
 var closeimage = document.getElementById("closeimage")
 var centervideo = document.getElementById("centervideo")
 var esfera = document.getElementById("esfera")
 var paginaprincipal = document.getElementById("paginaprincipal")


 esfera.onclick = ()=>{
    abierto = true
    clicktrue = true
 }

 paginaprincipal.onclick = ()=>{
     abierto = false
     sound.stop()
     centerimage.style.display = "none"
    centervideo.style.display = "none"
    cantmove = false
    /* centerimage.  */ 
    controls.enabled = true

    closeimage.style.display = "none"
    clicktrue = false
 }


 
 

let cantmove = false

closeimage.onclick = () => {

    centerimage.style.display = "none"
    centervideo.style.display = "none"
    cantmove = false
    /* centerimage.  */ 
    controls.enabled = true

    closeimage.style.display = "none"
    clicktrue = true
        



    
} 




let pc = null
//phone or pc 
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
if (isMobile) {
  	console.log("You are using Mobile")
     pc = false

    centerimage.style.width = "85%";
    centerimage.style.maxWidth = "85%";
    centerimage.style.maxHeight = "70%";

    closeimage.style.maxWidth = "10%";

} else {
    pc = true
	console.log("You are using Desktop")
}









/**
 * Base
 */
// Debug
/* const gui = new dat.GUI() */

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


// Set background
const BACKGROUND_COLOR = 0xf1f1f1
scene.background = new THREE.Color(BACKGROUND_COLOR)
scene.fog = new THREE.Fog(BACKGROUND_COLOR, 30, 100)


// spheres

const conjunto01 = [
    {imagen:"1.png", palabra : "sabes" }, {imagen:"3.png", palabra : "hierba" }, {imagen:"4.png", palabra : "grillo" }, {imagen:"5.png", palabra : "piedra" }
]
conjunto01.lista = true

const closegaleria = [null, null]

closegaleria.cierre = true
closegaleria.lista = false






console.log(conjunto01)

const disponible = [
    {
        location: new THREE.Vector3(-22,-13,9),
        titulo: "CLUSTER 01",
        color: "verde",
        mp3: "/sounds/s1.ogg",
        images: ["2.png", conjunto01, "3.png", "4.png", "5.png", "6.png", "video02.mp4", "video01.mp4"],
        siz: [[1412,1060],[1462,1006],[2422,632],[1284,918],[774, 1126],[1646,1179], [1000,1000], [1000,1000]],
        nameframe: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
    },{
        location: new THREE.Vector3(45,20,-24), 
        titulo: "CLUSTER 02",
        color: "rojo",
        mp3: "/sounds/s2.ogg",
        images: ["4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png" ],
        siz: [[1284,918],[774, 1126],[1646,1179],[1370, 676], [1296, 1287], [1100, 1198], [1342, 886], ],
        nameframe: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
    },{
        location: new THREE.Vector3(0,38,24),
        titulo: "CLUSTER 03",
        color: "azul",
        mp3: "/sounds/s3.ogg",
        images: ["12.png", "13.png", "14.png", "15.png", "11.png"],
        siz: [[1406, 1116], [4924, 3264], [1132, 1012], [1534, 1014], [1832, 1324]],
        nameframe: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
    },{
        location: new THREE.Vector3(30,-38,5),
        titulo: "CLUSTER 04",
        color: "amarillo",
        mp3: "/sounds/s4.ogg",
        images: ["16.png", "17.png", "18.png, 19.png", "20.png", "21.png", "23.png", "24.png"],
        siz: [[1660, 1134], [1528, 1004], [1176, 786], [692, 1148], [940, 964], [4608, 3456], [4608, 3456], [9449, 3456], [3307, 3307]],
        nameframe: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
    },{
        location: new THREE.Vector3(-19,12,-39),
        titulo: "CLUSTER 05",
        color: "azul",
        mp3: "/sounds/s5.ogg",
        images: ["25.png", "26.png", "27.png", "28.png"],
        siz: [[4068, 3456],[2592, 1936],[4928, 3264],[4928, 3264]],
        nameframe: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
    },{
        location: new THREE.Vector3(42,- 20, 30),
        titulo: "CLUSTER 06",
        color: "amarillo",
        mp3: "/sounds/s4.ogg",
        images: ["29.png", "30.png", "31.png", "32.png", "33.png"],
        siz: [[4928, 3264], [6273, 6273], [4021, 2664], [3412, 2671], [3574, 2628]],
        nameframe: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
    }       
]

console.log(disponible[0].images[1])



//sprite text 


/* function makeTextSprite( message, parameters )
    {
        if ( parameters === undefined ) parameters = {};
        var fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Courier New";
        var fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 18;
        var borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 4;
        var borderColor = parameters.hasOwnProperty("borderColor") ?parameters["borderColor"] : { r:0, g:0, b:0, a:0 };
        var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?parameters["backgroundColor"] : { r:0, g:0, b:255, a:1.0 };
        var textColor = parameters.hasOwnProperty("textColor") ?parameters["textColor"] : { r:0, g:0, b:0, a:1.0 };

        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        context.font = "Bold " + fontsize + "px " + fontface;
        var metrics = context.measureText( message );
        var textWidth = metrics.width;

        context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
        context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";
        context.fillStyle = "rgba("+textColor.r+", "+textColor.g+", "+textColor.b+", 1.0)";
        context.fillText( message, borderThickness, fontsize + borderThickness);

        var texture = new THREE.Texture(canvas) 
        texture.needsUpdate = true;
        var spriteMaterial = new THREE.SpriteMaterial( { map: texture, useScreenCoordinates: false, transparent: true } );
        var sprite = new THREE.Sprite( spriteMaterial );
        sprite.scale.set(0.5 * fontsize, 0.25 * fontsize, 0.75 * fontsize);
        return sprite;  
    }






var spritey = makeTextSprite( " Hello ", { fontsize: 44, textColor: {r:255, g:255, b:255, a:1.0}} )
spritey.position.set(-22,0,9);
scene.add( spritey );
 */




/**
 * Galaxy
 */
const parameters = {}

if(pc == true){
    parameters.count = 1000000
    console.log(parameters.count)
    parameters.size = 0.005
    console.log(parameters.size)
}
else{
    parameters.count = 10000
    console.log(parameters.count)
    parameters.size = 0.09
    console.log(parameters.size)
}

parameters.radius = 5
parameters.branches = 3
parameters.spin = 1
parameters.randomness = 0.2
parameters.randomnessPower = 1
parameters.insideColor = '#ff6030'
parameters.outsideColor = '#1b3984'

let geometry = null
let materialp = null
let points = null


materialp = new THREE.PointsMaterial({
    size: parameters.size,
    sizeAttenuation: true,
    transparent : true,
    alphaMap : particleTexture,
    depthWrite: false,
    /* blending: THREE.AdditiveBlending, */
    vertexColors: true,
    color: new THREE.Color('#ff88cc')
})





const generateGalaxy = () =>
{
    // Destroy old galaxy
    if(points !== null)
    {
        geometry.dispose()
        materialp.dispose()
        scene.remove(points)
    }

    /**
     * Geometry
     */
    geometry = new THREE.BufferGeometry()

    const positions = new Float32Array(parameters.count * 3)
    const colors = new Float32Array(parameters.count * 3)

    const colorInside = new THREE.Color(parameters.insideColor)
    const colorOutside = new THREE.Color(parameters.outsideColor)

    for(let i = 0; i < parameters.count; i++)
    {
        // Position
        const i3 = i * 3

        const radius = Math.random() * parameters.radius + 5

        const spinAngle = radius * parameters.spin
        const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2
        
        const randomX =  Math.cos(Math.pow(Math.random(), parameters.randomnessPower)) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius 
        const randomY = Math.cos(Math.pow(Math.random(), parameters.randomnessPower)) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * (radius - 5) * 4 
        const randomZ =  Math.cos(Math.pow(Math.random(), parameters.randomnessPower) ) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius 

        positions[i3    ] = Math.sin(randomY) * (Math.cos(branchAngle + spinAngle) * radius + randomX)
        positions[i3 + 1] = randomY
        positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

        // Color
        const mixedColor = new THREE.Color("rgb(0, 0, 0)")
        
        colors[i3    ] = mixedColor.r
        colors[i3 + 1] = mixedColor.g
        colors[i3 + 2] = mixedColor.b
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.scale(10,13,10)
    

    /**
     * Materialp
     */
    

    /**
     * Points
     */
    points = new THREE.Points(geometry, materialp)
    scene.add(points)
}





const parameters2 = {}
parameters2.count = 700000
parameters2.size = 0.7




let materialp2 = new THREE.PointsMaterial({
    size: parameters2.size,
    sizeAttenuation: true,
    transparent : true,
    alphaMap : particleTexture,
    depthWrite: false,
    /* blending: THREE.AdditiveBlending, */
    vertexColors: true,
    color: new THREE.Color('#ff88cc')
})







const generateGalaxy2 = () =>
{
    /**
     * Geometry
     */
    const geometry2 = new THREE.BufferGeometry()

    const positions2 = new Float32Array(parameters2.count * 3)

    for(let i = 0; i < parameters2.count; i++)
    {
        const i3 = i * 3

        positions2[i3    ] = (Math.random() - 0.5) * 1000
        positions2[i3 + 1] = (Math.random() - 0.5) * 1000
        positions2[i3 + 2] = (Math.random() - 0.5) * 1000
    }

    geometry2.setAttribute('position', new THREE.BufferAttribute(positions2, 3))
 

    const material2 = new THREE.PointsMaterial({
        size: parameters2.size,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    })

    /**
     * Points
     */
     const points = new THREE.Points(geometry2, materialp2)
     scene.add(points)


}
generateGalaxy2()







/* gui.add(parameters, 'count').min(100).max(1000000).step(100).onFinishChange(generateGalaxy)
gui.add(parameters, 'size').min(0.001).max(0.1).step(0.001).onFinishChange(generateGalaxy)
gui.add(parameters, 'radius').min(0.01).max(50).step(0.01).onFinishChange(generateGalaxy)
gui.add(parameters, 'branches').min(2).max(20).step(1).onFinishChange(generateGalaxy)
gui.add(parameters, 'spin').min(- 5).max(5).step(0.001).onFinishChange(generateGalaxy)
gui.add(parameters, 'randomness').min(0).max(2).step(0.001).onFinishChange(generateGalaxy)
gui.add(parameters, 'randomnessPower').min(1).max(10).step(0.001).onFinishChange(generateGalaxy) */
        

generateGalaxy()

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.01, 1000)
camera.position.x = 0.5
camera.position.y = 0.5
camera.position.z = 0.5
scene.add(camera)


// AUDIO


// create an AudioListener and add it to the camera
const listener = new THREE.AudioListener();
camera.add( listener )
// create a global audio source
const sound = new THREE.Audio( listener )
// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader()


function getaudio(){
    console.log(currentaudio)
    sound.pause()
    audioLoader.load( currentaudio, function( buffer ) {
        sound.setBuffer( buffer )
        sound.setLoop( false )
        sound.setVolume( 0.5 )
        sound.play()
    })

}




//raycaster

const raycaster = new THREE.Raycaster()


// Cursor
const cursor = {
    x: 0,
    y: 0
}

const mouse = new THREE.Vector2()

let rotatex = null
let rotatey = null
let rotatez = null

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


let abierto = false

window.addEventListener('mousemove', (event) =>
{
    if(abierto){
        if(moveon == false){
        
            mouse.x = event.clientX / sizes.width * 2 - 1
            mouse.y = - (event.clientY / sizes.height) * 2 + 1
    
        //console.log(mouse)
    
        if(pc == true){
    
            if(cantmove == false){
                rotatex = locationgoto.x + Math.sin(mouse.x * Math.PI * 1.2)* 0.05
        
                rotatez = locationgoto.z + Math.cos(mouse.x * Math.PI * 1.2)* -0.05
        
                rotatey = locationgoto.y + mouse.y * Math.PI * 0.07* -0.2
                //console.log(camera.position.y)
    
                camera.position.y = rotatey
                camera.position.x = rotatex
                camera.position.z = rotatez
            }
            
    
    
        }
            
    
    
    
        }
    

    }
    
    
})




/// objetos
const objectsToTest = []
let cantidadoriginal = 0
const material = new THREE.MeshToonMaterial(new THREE.Color(0x1c1c1c))
const geometria = new THREE.SphereGeometry(2, 9, 9)
let current = 0
let lista = []


/* const disponible = [
    new THREE.Vector3(2,0,5),
    new THREE.Vector3(5,0,-4),
    new THREE.Vector3(0,8,4),
    new THREE.Vector3(9,-8,0)
] */


for(let i = 0; i < disponible.length; i++ ){
    current = i
    createsphere()
    
}

function createsphere(){
    let currentsp = new THREE.Mesh(geometria, material)
    currentsp.position.copy(disponible[current].location)
    lista.push(currentsp)
    lista[current].titulo = disponible[current].titulo
    lista[current].color = disponible[current].color
    lista[current].location = disponible[current].location  
    lista[current].mp3 = disponible[current].mp3
    lista[current].nameframe = disponible[current].nameframe
    lista[current].siz = disponible[current].siz
    lista[current].cierre = disponible[current].cierre
    lista[current].tipo = "punto"
    
    if( disponible[current].images == undefined){
        console.log("no imagenes en esfera")
    }
    else{
        for(let i = 0; i < disponible[current].images.length; i++){
        console.log(disponible[current].images[i])
        }
    }
    
    lista[current].images = disponible[current].images
    console.log(lista[current].images)
    scene.add(lista[current])
    console.log("se creo una sphere")
    objectsToTest.push(lista[current])
    objectsToTest.updateProjectionMatrix
    cantidadoriginal = objectsToTest.length
    console.log(cantidadoriginal + " cantidad original")
}    


// material shader

// Material geometry
const materialsh = new THREE.ShaderMaterial({
    vertexShader: testVertexShader,
     fragmentShader: testFragmentShader,
     side:DoubleSide,
     transparent: true,
     uniforms:
    {   
        uFrequency: { value: new THREE.Vector2(10, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('orange') },
        uTexture: { value: null},
        ucss : { value: null},
        uscale : { value: null}
    }
})


const materialsh2 = new THREE.ShaderMaterial({
    vertexShader: testVertexShader2,
     fragmentShader: testFragmentShader2,
     /* uniforms:
    {   
        uFrequency: { value: new THREE.Vector2(10, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('orange') },
        uTexture: { value: null},
        ucss : { value: null},
        uscale : { value: null}
    } */
})






let  plane = new THREE.PlaneGeometry(4, 4, 20, 20)


const spheresimple = new THREE.SphereGeometry( 3, 3, 5, 5 )
const materialspheresimple = new THREE.MeshBasicMaterial( )
materialspheresimple.transparent= true
materialspheresimple.opacity= 0









let materialshaderlist = []
let planes = new THREE.Mesh
let spheres = new THREE.Mesh

let valorgrados = 0

const grados = []
let radius = 15
const currentimages = []
const currensizes = []
const escalafix = []

function createimages(){


    if(cantidadoriginal < objectsToTest.length){

        objectsToTest.splice(cantidadoriginal , currentimages.length)

            console.log("cantidad eliminada es"+ currentimages.length + "cantidad de esfera originales es " + cantidadoriginal)

    }


    for(let i = 0; i < currentimages.length; i++){
        
        scene.remove(currentimages[i])
        
        console.log(currentimages)
    }
    
    
    materialshaderlist = null
    materialshaderlist = []
    planes = new THREE.Mesh
     
    

    valorgrados = (Math.PI * 2) / imageslist.length 

    for(let i = 0; i < imageslist.length; i++){
        
        let mingrade = valorgrados * (i + 1) 
        grados.push(mingrade)
    }

    

    console.log(grados)





    let nameframecarteles = []


    for (var p = 0; p < imageslist.length; p++){

        

        let random = Math.floor(Math.random() * grados.length)
        let randomgrado = grados[random]

        

        console.log(randomgrado)   




        materialshaderlist[p] = materialsh.clone()

        /// check url 
        console.log(imageslist[p].textimagecss[0])

        let checkimage = null
        
        if (Array.isArray(imageslist[p].textimagecss)){
            checkimage = true
        }
        else{
            checkimage = checkURL(imageslist[p].textimagecss)
        }

        const escala = imageslist[p].siz[0] / ( imageslist[p].siz[1]*1)
        escalafix[p] = escala.toFixed(3)
        console.log(escalafix[p])

        console.log(checkimage + "la imagen fue check")
        if(checkimage){
            materialshaderlist[p].uniforms.uTexture =  { value: imageslist[p] }
            materialshaderlist[p].uniforms.uscale = { value: escalafix[p] }
            //escala    
        }

        else {
            // agregar cierre
            if(imageslist[p].cierre){
                materialshaderlist[p].uniforms.uTexture =  { value: CloseTexture }
                materialshaderlist[p].uniforms.uscale = { value: 1 }
                materialshaderlist[p].depthWrite = false
            }
            else{
                materialshaderlist[p].uniforms.uTexture =  { value: PlatTexture }
                materialshaderlist[p].uniforms.uscale = { value: 1 }
                materialshaderlist[p].depthWrite = false
            }
            
        }

        /* if(checkimage == ) */


        
        materialshaderlist[p].update = true

        
        planes[p]  = new THREE.Mesh(spheresimple, materialsh2)
        planes[p].depthWrite = false




       
        console.log("escala")
        console.log(imageslist[p].siz)
        console.log("escala")

        
         
        
        let smallplane = new THREE.PlaneGeometry(2.5, 2.5, 20, 20)
        
        spheres[p] = new THREE.Mesh(smallplane, materialshaderlist[p])

        /* spheres[p].scale.set(3, 3, 1) */
        
       
        
        
        
/* 
        let currentporcentaje = imageslist[p].currentwidth / (1 * imageslist[p].currentheight)

            
        spheres[p].scale(1, currentporcentaje,) */

        


        //scale

        /* console.log( "width es" + imageslist[p].currentwidth) */

        
        ///texto



        
        var canvas2 = document.createElement('canvas');
        var size = 256; // CHANGED
        canvas2.width = size;
        canvas2.height = size;
        var context = canvas2.getContext('2d');
        context.fillStyle = '#ff0000'; // CHANGED
        context.textAlign = 'center';
        context.font = '40px Arial';
        context.fillText(imageslist[p].nameframe[p], size / 2, size / 2);
        

        var amap = new THREE.Texture(canvas2);
        amap.needsUpdate = true;

        var mat = new THREE.SpriteMaterial({
            map: amap,
            transparent: true,
            useScreenCoordinates: false,
            color: 0, // CHANGED,
            depthWrite : false
        });

        var sp = new THREE.Sprite(mat);

        sp.position.y += 1.3

        
        sp.scale.set( 2, 2, 0.1 ); // CHANGED

        planes[p].add(sp)


////////////////



        planes[p].add(spheres[p])



        planes[p].position.copy(locationgoto)


         
        let rotatex = Math.sin(randomgrado) * (radius - Math.floor(Math.random() * (radius/8)) * (Math.random() < 0.5 ? 1 : - 1) )
        let rotatez = Math.cos(randomgrado) * (radius - Math.floor(Math.random() * (radius/8)) * (Math.random() < 0.5 ? 1 : - 1) )
        let rotatey =  Math.floor(Math.random() * (radius / 3)) * (Math.random() < 0.5 ? 1 : - 1) 




        planes[p].position.y += rotatey
        planes[p].position.x += rotatex
        planes[p].position.z += rotatez





        if(checkimage){
            planes[p].tipo = "imagen"
        }

        else {
            if(imageslist[p].cierre){
                planes[p].tipo = "cierre"
            }
            else{
                planes[p].tipo = "video"
            }
            
        }

        
        planes[p].textimagecss = imageslist[p].textimagecss
        planes[p].textpalabra = imageslist[p].textpalabra
        currentimages[p] = planes[p]
        





        //// texto magico
        /* imageslist[p].nameframe

        planes[p].position.y += rotatey
        planes[p].position.x += rotatex
        planes[p].position.z += rotatez */






        scene.add(planes[p])

        objectsToTest.push(currentimages[p])
        objectsToTest.updateProjectionMatrix


        
        grados.splice(random, 1)

        
        
    }

    imageslist = []
    
}






/* locationgoto es la direccion del planeta  */

function createplanes(){
    for (var p = 0; p < imageslist.length; p++){
        console.log("nada")
        
    }
}







// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = false


controls.enableZoom = false
controls.minPolarAngle = 0.2*Math.PI


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))





// touch



let timetouchstar = 0
let timetouchend = 0
let timetouchdelta = 0
window.addEventListener('touchend', () =>
{
    timetouchend = clock.getElapsedTime()
    

    timetouchdelta = timetouchend - timetouchstar

    console.log('diferencia de tiempo')
    console.log(timetouchdelta)

    if(timetouchdelta < 0.2){
        goto()
        timetouchstar = 0
        timetouchend = 0
        timetouchdelta = 0
        
    }
    else
        timetouchstar = 0
        timetouchend = 0
        timetouchdelta = 0


})

window.addEventListener('touchstart', () =>
{
    timetouchstar = clock.getElapsedTime()
    console.log('touch star')
    console.log(timetouchstar)
})














// Animate
const clock = new THREE.Clock()

let rayOn = true



let currentIntersect = null
let locationgoto= new THREE.Vector3()
let currentaudio = "nada"
let currentworld = null
let currentp = null

// carga de imagenes 
let imageslist = []
function Loadimages(){
    
    for (var p = 0; p < currentworld.images.length; p++){
        console.log("current world es =" + currentworld.images[p])
        let textimage = "text"
        let textimagecss = "text"
        let textpalabra = []
        console.log(currentworld.images[p])
        currentp = p
        if( currentworld.images[p].lista){
            
            textimagecss = []
            textpalabra = []

            for (var i = 0; i < currentworld.images[currentp].length; i++){
                console.log("es arayyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
                
                if(i==0){
                    textimage = '/textures/'+currentworld.images[currentp][0].imagen
                }
                
                textimagecss[i] = '/textures/'+currentworld.images[currentp][i].imagen
                textpalabra[i] = currentworld.images[currentp][i].palabra
                console.log(textpalabra[i])
                console.log(textimagecss[i].imagen)

            }            

        }
        else if( currentworld.images[p].cierre){
            console.log("preparando imagen cierre")
        }

        else if (currentworld.images[currentp].lista == undefined){
            console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO es aray")
            textimage = '/textures/'+currentworld.images[currentp]
            textimagecss = '/textures/'+currentworld.images[currentp] 
        }
        
        console.log(textimage)
        console.log(textimagecss)
        

        
        
        

        imageslist[p] = textureLoader.load(
            // resource URL
            textimage,
        
            // onLoad callback
            function ( texture ) {
                
                console.log("termino cargar textura")
                let currentwidth = texture.image.width
                let currentheight = texture.image.height
                console.log(currentwidth, currentheight)
                console.log(texture.textimagecss)
                let currentcss = texture.textimagecss
        
            	},
        
            // onProgress callback currently not supported
            undefined,
        
            // onError callback
            function ( err ) {
                console.error( 'An error happened.' );
        
            }
        );


        if( currentworld.images[p].lista){

            imageslist[p].textimagecss = []
        }

        if( currentworld.images[p].cierre){
            imageslist[p].cierre = currentworld.images[p].cierre
        }


        imageslist[p].textimagecss = textimagecss
        imageslist[p].textpalabra =  textpalabra
        imageslist[p].siz = currentworld.siz[currentp]
        imageslist[p].nameframe = currentworld.nameframe

       
        console.log(imageslist[p].textimagecss)
        
    
        
    }
}










/// goto

let clicktrue = true


window.addEventListener('click', goto, clicktrue)
let arrayinfo 

function goto(){
    
    for (var p = 0; p <= objectsToTest.length; p++){
    if(currentIntersect.object){
        switch(currentIntersect.object){

                       case objectsToTest[p]:



                if (objectsToTest[p].tipo == "punto") {


                    document.getElementById("centertext").innerHTML = objectsToTest[p].titulo
                    document.getElementById("centertext").style.color = "white"
                    document.getElementById("centertext").style.width = "50%"
                    
                    
                    




                    console.log('Punto numero '+ p)
                    console.log(objectsToTest[p].titulo)
                    console.log(objectsToTest[p].color)
                    locationgoto = objectsToTest[p].location
                    console.log(locationgoto)
                    moveon =     true
                    controls.target = locationgoto
                    currentaudio = objectsToTest[p].mp3
                    console.log(currentaudio)
                    getaudio()
                    currentworld = objectsToTest[p]
                    console.log("current world es =" + currentworld.images)
                    Loadimages()
                    createimages()
                
                     
                    break

                }
                 
                else if (objectsToTest[p].tipo == "imagen") {


                   
                    if(clicktrue){
                        centerimage.style.display = "block";
                        closeimage.style.display = "block"

                        if(Array.isArray(objectsToTest[p].textimagecss)){
                            arrayinfo = objectsToTest[p]
                            centerimage.style.content = "url('" + arrayinfo.textimagecss[0] + "')"
                            console.log(arrayinfo.textpalabra)
                        }

                        else{
                            centerimage.style.content = "url('" + objectsToTest[p].textimagecss + "')"
                        }
                        
                        cantmove = true 
                        controls.enabled = false

                        

                        

                        console.log(centerimage.style.content)
                        

                        

                        objectsToTest[p].textimagecss
                        console.log("imagen aparece")
                        clicktrue = false
                        break
                    }
            
                }

                else if (objectsToTest[p].tipo == "video") {

                    if(clicktrue){
                        centervideo.src = objectsToTest[p].textimagecss
                        
                        centervideo.style.display = "block";
                        closeimage.style.display = "block"


                        
                        cantmove = true 
                        controls.enabled = false

                        

                        

                        console.log(centerimage.style.content)
                        

                        

                        objectsToTest[p].textimagecss
                        console.log("imagen aparece")
                        clicktrue = false
                        break
                    }
            
                }

                else if (objectsToTest[p].tipo == "cierre") {

                    
                    if(cantidadoriginal < objectsToTest.length){

                        objectsToTest.splice(cantidadoriginal , currentimages.length)
                    
                        console.log("cantidad eliminada es"+ currentimages.length + "cantidad de esfera originales es " + cantidadoriginal)
                    
                    }
                    
                    
                    for(let i = 0; i < currentimages.length; i++){
                            
                        scene.remove(currentimages[i])
                            
                        console.log(currentimages)
                    }

                   

                    break
                    
                }



            default:
                /* console.log('ah??') */

            }
        }
    }
    }




var travel1 = document.getElementById("01")
var travel2 = document.getElementById("02")
var travel3 = document.getElementById("03")
var travel4 = document.getElementById("04")
var travel5 = document.getElementById("05")
var travel6 = document.getElementById("06")



travel1.onclick = () => {
                    let p = 0
                    document.getElementById("centertext").innerHTML = objectsToTest[p].titulo
                    document.getElementById("centertext").style.color = "white"
                    document.getElementById("centertext").style.width = "50%"
                    
                    console.log('Punto numero '+ p)
                    console.log(objectsToTest[p].titulo)
                    console.log(objectsToTest[p].color)
                    locationgoto = objectsToTest[p].location
                    console.log(locationgoto)
                    moveon =     true
                    controls.target = locationgoto
                    currentaudio = objectsToTest[p].mp3
                    console.log(currentaudio)
                    getaudio()
                    currentworld = objectsToTest[p]
                    console.log("current world es =" + currentworld.images)
                    Loadimages()
                    createimages()
}
travel2.onclick = () => {
    let p = 1
    document.getElementById("centertext").innerHTML = objectsToTest[p].titulo
    document.getElementById("centertext").style.color = "white"
    document.getElementById("centertext").style.width = "50%"
    console.log('Punto numero '+ p)
    console.log(objectsToTest[p].titulo)
    console.log(objectsToTest[p].color)
    locationgoto = objectsToTest[p].location
    console.log(locationgoto)
    moveon =     true
    controls.target = locationgoto
    currentaudio = objectsToTest[p].mp3
    console.log(currentaudio)
    getaudio()
    currentworld = objectsToTest[p]
    console.log("current world es =" + currentworld.images)
    Loadimages()
    createimages()
}

travel3.onclick = () => {
    let p = 2
    document.getElementById("centertext").innerHTML = objectsToTest[p].titulo
    document.getElementById("centertext").style.color = "white"
    document.getElementById("centertext").style.width = "50%"
    console.log('Punto numero '+ p)
    console.log(objectsToTest[p].titulo)
    console.log(objectsToTest[p].color)
    locationgoto = objectsToTest[p].location
    console.log(locationgoto)
    moveon =     true
    controls.target = locationgoto
    currentaudio = objectsToTest[p].mp3
    console.log(currentaudio)
    getaudio()
    currentworld = objectsToTest[p]
    console.log("current world es =" + currentworld.images)
    Loadimages()
    createimages()
}

travel4.onclick = () => {
    let p = 3
    document.getElementById("centertext").innerHTML = objectsToTest[p].titulo
    document.getElementById("centertext").style.color = "white"
    document.getElementById("centertext").style.width = "50%"
    console.log('Punto numero '+ p)
    console.log(objectsToTest[p].titulo)
    console.log(objectsToTest[p].color)
    locationgoto = objectsToTest[p].location
    console.log(locationgoto)
    moveon =     true
    controls.target = locationgoto
    currentaudio = objectsToTest[p].mp3
    console.log(currentaudio)
    getaudio()
    currentworld = objectsToTest[p]
    console.log("current world es =" + currentworld.images)
    Loadimages()
    createimages()
}

travel4.onclick = () => {
    let p = 3
    document.getElementById("centertext").innerHTML = objectsToTest[p].titulo
    document.getElementById("centertext").style.color = "white"
    document.getElementById("centertext").style.width = "50%"
    console.log('Punto numero '+ p)
    console.log(objectsToTest[p].titulo)
    console.log(objectsToTest[p].color)
    locationgoto = objectsToTest[p].location
    console.log(locationgoto)
    moveon =     true
    controls.target = locationgoto
    currentaudio = objectsToTest[p].mp3
    console.log(currentaudio)
    getaudio()
    currentworld = objectsToTest[p]
    console.log("current world es =" + currentworld.images)
    Loadimages()
    createimages()
}

travel5.onclick = () => {
    let p = 4
    document.getElementById("centertext").innerHTML = objectsToTest[p].titulo
    document.getElementById("centertext").style.color = "white"
    document.getElementById("centertext").style.width = "50%"
    console.log('Punto numero '+ p)
    console.log(objectsToTest[p].titulo)
    console.log(objectsToTest[p].color)
    locationgoto = objectsToTest[p].location
    console.log(locationgoto)
    moveon =     true
    controls.target = locationgoto
    currentaudio = objectsToTest[p].mp3
    console.log(currentaudio)
    getaudio()
    currentworld = objectsToTest[p]
    console.log("current world es =" + currentworld.images)
    Loadimages()
    createimages()
}

travel6.onclick = () => {
    let p = 5
    document.getElementById("centertext").innerHTML = objectsToTest[p].titulo
    document.getElementById("centertext").style.color = "white"
    document.getElementById("centertext").style.width = "50%"
    console.log('Punto numero '+ p)
    console.log(objectsToTest[p].titulo)
    console.log(objectsToTest[p].color)
    locationgoto = objectsToTest[p].location
    console.log(locationgoto)
    moveon =     true
    controls.target = locationgoto
    currentaudio = objectsToTest[p].mp3
    console.log(currentaudio)
    getaudio()
    currentworld = objectsToTest[p]
    console.log("current world es =" + currentworld.images)
    Loadimages()
    createimages()
}










let distance = null
let moveon = false


let oldElapsedTime = 0
 







const tick = () =>
{
    
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - oldElapsedTime
    oldElapsedTime = elapsedTime

    ///// moivimiento

    if(moveon){
        camera.position.lerp(locationgoto, 0.043)
        distance = camera.position.distanceTo(locationgoto)

        if( distance < 2.5 ){
        
            document.getElementById("centertext").style.color = "transparent"
            document.getElementById("centertext").innerHTML = ""
            document.getElementById("centertext").style.width = "0%"
        }

        if( distance < 0.05 ){
            moveon = false
            document.getElementById("centertext").style.color = "transparent"
        }
    }
    
    
    //cast a ray
    
     raycaster.setFromCamera(mouse, camera)

     
 
     
     
     
     const intersects = raycaster.intersectObjects(objectsToTest)
 
 
     for(const object of objectsToTest)
     {
         //aqui directamente toda la lista cambiar a
         
     }

     for(const intersect of intersects)
    {
        if(rayOn){
            //object es el atributo del ray intersectado de la lista. osea  alos objectos dentro de la lista. tambien se puede usar parasacar el punto de interseccion
            //console.log(intersect.point)
           
        }
        
    }

    if(intersects.length)
    {   
        if(currentIntersect == null)
        {
            console.log('mouse enter')
        }
        currentIntersect = intersects[0]




        for (var p = 0; p <= objectsToTest.length; p++){
            if(currentIntersect.object){
                switch(currentIntersect.object){
        
                               case objectsToTest[p]:
                                if(objectsToTest[p].tipo == "punto"){

                                    document.getElementById("p1").innerHTML = objectsToTest[p].titulo
                                    document.body.style.cursor = "pointer"
    
                             
                                    break
                                }
                        
                                else if (objectsToTest[p].tipo == "imagen" || objectsToTest[p].tipo == "video" || objectsToTest[p].tipo == "cierre" ) {

                                    document.body.style.cursor = "pointer"
                                    break
                            
                                }  
        
                    }
                }
            }

    }
    


    else{
        if(currentIntersect)
        {
            console.log('mouse leave')
            document.getElementById("p1").innerHTML = "fractales"
            document.body.style.cursor = "default"
        }
        currentIntersect = null
    }







    // Update controls
    controls.update()




    setTimeout( function() {

        window.requestAnimationFrame(tick)
        //console.log(deltaTime)

    }, 1000 / 60 );



    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    
    raycaster.updateProjectionMatrix
}

tick()

