// 在页面加载完成后执行代码
window.addEventListener('DOMContentLoaded', init);

function init() {
  // 创建场景
  var scene = new THREE.Scene();

  // 创建相机
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 5);

  // 创建渲染器
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);

  // 创建地图对象（示例使用一个简单的立方体作为地图）
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  var map = new THREE.Mesh(geometry, material);
  scene.add(map);

  // 添加光源
  var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // 创建摄像机控制器
  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableZoom = true;
  controls.enablePan = true;
  controls.update();

  // 渲染场景
  function animate(time) {
    // calculate the current animation state
    let progress = timing(timeFraction);
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();
}
