
// SCENE, CAMERA, RENDERER
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x181818)

scene.add( new THREE.GridHelper( 1000, 10, 0x888888, 0x444444 ) );

renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.01, 30000 );
// cameraOrtho = new THREE.OrthographicCamera( - 600 * window.innerWidth / window.innerHeight, 600 * window.innerWidth / window.innerHeight, 600, - 600, 0.01, 30000 );
// currentCamera = cameraPersp;

camera.position.set( 1000, 500, 1000 );
camera.lookAt( 0, 200, 0 );


// LIGHTS

const light = new THREE.DirectionalLight( 0xffffff, 2 );
light.position.set( 1, 1, 1 );
scene.add( light );

const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

// GEOMETRY

const geometry = new THREE.BoxGeometry( 200, 200, 200 );
const material = new THREE.MeshLambertMaterial( { color: 0x1700FF } );
const mesh = new THREE.Mesh( geometry, material );
// scene.add( mesh );



// ORBIT CONTROLS

orbit = new THREE.OrbitControls( camera, renderer.domElement );
orbit.update();
orbit.addEventListener( 'change', render );



// TRANSFORM CONTROLS
control = new THREE.TransformControls( camera, renderer.domElement );
control.addEventListener( 'change', render );

control.addEventListener( 'dragging-changed', function ( event ) {
orbit.enabled = ! event.value;
} );
control.attach( mesh );
scene.add( control );

let wireframe = true
// BUTTONS

// REVEAL MENU
$('#container-logo').mouseenter(()=>{
    $('#container').css({"display":"flex", "width": "100%", "transition": ".5s all ease-out"})
    $("#container-logo").css({"opacity":"0"})

    console.log("flexed!")
})

$('#container').mouseleave(()=>{
    $('#container').css({"display":"none", "width": "0%"})
    $('#container-logo').css({"opacity":"1"})
    console.log("flexed!")
})

// BUILDING 1
$('.btn1').click(()=>{
    loader.load(
        'assets/models/building1/building1.glb',
        function ( gltf ) {
    
            const building1 = gltf.scene
            scene.add( building1 );
            building1.position.y = -15
            building1.position.z = -5
            building1.position.x = -4
            building1.scale.set(22, 22,22)
    
            control.attach(building1)
        },
    );  


   
})

// BUILDING 2
$('.btn2').click(()=>{

    loader.load(
        'assets/models/building2/building2.glb',
        function ( gltf ) {
    
            const building2 = gltf.scene
            scene.add( building2 );
            building2.position.y = -15
            building2.position.z = -5
            building2.position.x = -4
            building2.scale.set(22, 22,22)
    
            control.attach(building2)
        },
    );  
})

// BUILDING 3
$('.btn3').click(()=>{

    loader.load(
        'assets/models/building3/building3.glb',
        function ( gltf ) {
    
            const building3 = gltf.scene
            scene.add( building3 );
            building3.position.y = -15
            building3.position.z = -5
            building3.position.x = -4
            building3.scale.set(22, 22,22)
    
            control.attach(building3)
        },
    );  
    })

// BUILDING 4
$('.btn4').click(()=>{

    loader.load(
        'assets/models/building4/building4.glb',
        function ( gltf ) {
    
            const building4 = gltf.scene
            scene.add( building4 );
            building4.position.y = -15
            building4.position.z = -5
            building4.position.x = -4
            building4.scale.set(22, 22,22)
    
            control.attach(building4)
        },
    );  
    })

// ROAD
$('.btn5').click(()=>{

    loader.load(
        'assets/models/road/road.glb',
        function ( gltf ) {
    
            const road = gltf.scene
            scene.add( road );
            road.position.y = -15
            road.position.z = -5
            road.position.x = -4
            road.scale.set(22, 22,22)
    
            control.attach(road)
        },
    );  
    })

// MOUNTAIN
$('.btn6').click(()=>{

    loader.load(
        'assets/models/mountain/mountain.glb',
        function ( gltf ) {
    
            const mountain = gltf.scene
            scene.add( mountain );
            mountain.position.y = -15
            mountain.position.z = -5
            mountain.position.x = -4
            mountain.scale.set(22, 22,22)
    
            control.attach(mountain)
        },
    );  
    })


// LAKE
$('.btn7').click(()=>{

    loader.load(
        'assets/models/lake/lake.glb',
        function ( gltf ) {
    
            const lake = gltf.scene
            scene.add( lake );
            lake.position.y = -15
            lake.position.z = -5
            lake.position.x = -4
            lake.scale.set(22, 22,22)
    
            control.attach(lake)
        },
    );  
    })


    
// TEMPLE
$('.btn8').click(()=>{

    loader.load(
        'assets/models/temple/temple.glb',
        function ( gltf ) {
    
            const temple = gltf.scene
            scene.add( temple );
            temple.position.y = -15
            temple.position.z = -5
            temple.position.x = -4
            temple.scale.set(22, 22,22)
    
            control.attach(temple)
        },
    );  
    })



// LOADERS

const loader = new THREE.GLTFLoader();


// Load a glTF resource
loader.load(
	// resource URL
	'assets/models/crane/glb/DistrictDAO Crane.glb',
	// called when the resource is loaded
	function ( gltf ) {

        const crane = gltf.scene
		scene.add( crane );
        crane.position.y = -15
        crane.position.z = -5
        crane.position.x = -4
        crane.scale.set(22, 22,22)

        control.attach(crane)

       

        // window.addEventListener('scroll', ()=>{
        //                 // crane.position.z += -0.1
        //                 crane.position.z = this.oldScroll * 0.006 - 5
        //                 crane.position.y = this.oldScroll * 0.006 - 15
                        
        //             })
            
        //             window.onscroll = ()=>{
        //                 // print "false" if direction is down and "true" if up
        //                 console.log(this.oldScroll > this.scrollY);
        //                 this.oldScroll = this.scrollY;
        //               }

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);



// RESPONSIVE
window.addEventListener( 'resize', onWindowResize );


// KEY COMMANDS
window.addEventListener( 'keydown', function ( event ) {

switch ( event.keyCode ) {


case 87: // W
control.setMode( 'translate' );
break;

case 69: // E
control.setMode( 'rotate' );
break;

case 82: // R
control.setMode( 'scale' );
break;

case 192: // ` for WIREFRAME boxess
if (wireframe == true){
    wireframe = false
}else{
    wireframe = true
}

console.log(wireframe)
break

case 67: // C
control.attach()


}
} );



// RESPONSIVENESS

function onWindowResize() {

    const aspect = window.innerWidth / window.innerHeight;

    camera.aspect = aspect;
    camera.updateProjectionMatrix();


    renderer.setSize( window.innerWidth, window.innerHeight );

    render();

}

function render() {

    renderer.render( scene, camera );

}


// Animations go here
let update = ()=>{

}




let SceneLoop = ()=>{
    requestAnimationFrame(SceneLoop)

    update()
    render()
}

SceneLoop()




