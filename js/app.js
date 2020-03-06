// scene initilization
const checkoutBtn = document.getElementById("checkout_btn");
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
const container = document.getElementById("canvas");
const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
);
const text = document.getElementById("textNode");
const slider = document.querySelector(".slider");
let rocket;

checkoutBtn.addEventListener("click", () => {
    window.location = "./cart.html";
});
const initThree = () => {
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setClearColor(0x171717, 1);
    addLight();
    addLight(500, -50, -50, -10);
    addRocket();
    camera.position.z = 42;
    container.appendChild(renderer.domElement);
};

const resize = () => {
    renderer.width = container.clientWidth;
    renderer.height = container.clientHeight;
    renderer.setSize(renderer.width, renderer.height);
    camera.aspect = renderer.width / renderer.height;
    camera.updateProjectionMatrix();
};

const addLight = (brightness = 500, pos1 = 50, pos2 = 50, pos3 = 50) => {
    let light = new THREE.PointLight(0xffffff, 1, brightness);
    light.position.set(pos1, pos2, pos3);
    scene.add(light);
};

const addRocket = () => {
    const loader = new THREE.GLTFLoader();
    // Load a glTF resource
    loader.load(
        // resource URL
        "/assets/rocket.glb",
        // called when the resource is loaded
        function(gltf) {
            rocket = gltf.scene;
            scene.add(rocket);

            gltf.animations; // Array<THREE.AnimationClip>
            gltf.scene; // THREE.Group
            gltf.scenes; // Array<THREE.Group>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object
        },
        // called while loading is progressing
        function(xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        // called when loading has errors
        function(error) {
            console.log("An error happened");
        }
    );
};

window.addEventListener("resize", resize);
const render = () => {
    rocket.rotation.y = slider.value * 0.065;
    rocket.rotation.z = window.scrollY * 0.0003;
    renderer.render(scene, camera);
};

function animate() {
    requestAnimationFrame(animate);
    render();
}

initThree();
animate();
