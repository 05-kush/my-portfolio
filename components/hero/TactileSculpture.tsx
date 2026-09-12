"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function TactileSculpture() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Warm Studio Lighting (Atelier natural light)
    const ambientLight = new THREE.AmbientLight(0xf4f0e8, 1.5);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xfffaed, 2.4);
    mainLight.position.set(5, 8, 6);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const rimLight = new THREE.DirectionalLight(0xd94b2b, 0.9);
    rimLight.position.set(-6, -4, -3);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xdcd7cc, 1.3);
    fillLight.position.set(-4, 3, 4);
    scene.add(fillLight);

    // Master Sculpture Group
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Materials Palette (Physical matte paper, charcoal, brass, terracotta)
    const charcoalMat = new THREE.MeshStandardMaterial({
      color: 0x181817,
      roughness: 0.65,
      metalness: 0.2,
    });

    const warmPaperMat = new THREE.MeshStandardMaterial({
      color: 0xe8e1d3,
      roughness: 0.85,
      metalness: 0.05,
    });

    const terracottaMat = new THREE.MeshStandardMaterial({
      color: 0xd94b2b,
      roughness: 0.5,
      metalness: 0.1,
    });

    const brassWireMat = new THREE.MeshStandardMaterial({
      color: 0x9c8360,
      roughness: 0.3,
      metalness: 0.8,
    });

    const translucentPlasterMat = new THREE.MeshPhysicalMaterial({
      color: 0xf2ece1,
      roughness: 0.4,
      transmission: 0.3,
      thickness: 0.5,
      transparent: true,
      opacity: 0.85,
    });

    // 1. Central Core Block
    const coreBox = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 1.5, 1.5),
      charcoalMat
    );
    coreBox.castShadow = true;
    sculptureGroup.add(coreBox);

    // Core Fine Wireframe
    const wireGeo = new THREE.WireframeGeometry(new THREE.BoxGeometry(1.52, 1.52, 1.52));
    const wireLines = new THREE.LineSegments(
      wireGeo,
      new THREE.LineBasicMaterial({ color: 0xdcd7cc, linewidth: 1.5 })
    );
    sculptureGroup.add(wireLines);

    // 2. Interlocking Architectural Planes
    const plane1 = new THREE.Mesh(
      new THREE.BoxGeometry(3.2, 0.04, 2.0),
      translucentPlasterMat
    );
    plane1.position.set(0, 0.85, 0);
    plane1.rotation.set(0.1, 0.4, 0.1);
    sculptureGroup.add(plane1);

    const plane2 = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 0.04, 3.0),
      warmPaperMat
    );
    plane2.position.set(0, -0.9, 0.2);
    plane2.rotation.set(-0.15, -0.3, 0);
    sculptureGroup.add(plane2);

    // 3. Terracotta Indicator Block
    const accentNode = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      terracottaMat
    );
    accentNode.position.set(1.4, 0.4, 0.9);
    sculptureGroup.add(accentNode);

    const accentNode2 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.18, 0.6, 16),
      terracottaMat
    );
    accentNode2.position.set(-1.3, -0.5, -0.7);
    accentNode2.rotation.z = Math.PI / 3;
    sculptureGroup.add(accentNode2);

    // 4. Structural Rods
    const rodGeo = new THREE.CylinderGeometry(0.02, 0.02, 4.2, 8);
    
    const rod1 = new THREE.Mesh(rodGeo, brassWireMat);
    rod1.position.set(1.1, 0, -0.8);
    rod1.rotation.x = Math.PI / 6;
    sculptureGroup.add(rod1);

    const rod2 = new THREE.Mesh(rodGeo, brassWireMat);
    rod2.position.set(-1.1, 0, 0.8);
    rod2.rotation.z = -Math.PI / 5;
    sculptureGroup.add(rod2);

    const rod3 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.015, 3.4, 8),
      brassWireMat
    );
    rod3.position.set(0, 1.2, 0);
    rod3.rotation.y = Math.PI / 4;
    rod3.rotation.z = Math.PI / 2;
    sculptureGroup.add(rod3);

    // 5. Orbital Kinetic Ring
    const ringGeo = new THREE.TorusGeometry(2.1, 0.018, 8, 48);
    const ring1 = new THREE.Mesh(ringGeo, brassWireMat);
    ring1.rotation.x = Math.PI / 2.8;
    ring1.rotation.y = Math.PI / 6;
    sculptureGroup.add(ring1);

    // 6. Cluster Nodes
    const nodePositions = [
      [1.6, 1.2, 0.4],
      [-1.8, 0.9, -0.5],
      [0.9, -1.4, 0.7],
      [-1.1, -1.2, -0.9],
      [0, 1.9, -0.3],
    ];

    const nodesGroup = new THREE.Group();
    nodePositions.forEach(([x, y, z], idx) => {
      const isAccent = idx === 0 || idx === 3;
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(0.09, 16, 16),
        isAccent ? terracottaMat : charcoalMat
      );
      node.position.set(x, y, z);
      nodesGroup.add(node);
    });
    sculptureGroup.add(nodesGroup);

    // Interaction State
    let targetRotationX = 0.2;
    let targetRotationY = -0.3;
    let isVisible = true;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.75;
      targetRotationX = -y * 0.55 + 0.2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const time = clock.getElapsedTime();

      sculptureGroup.rotation.y += 0.003;
      sculptureGroup.rotation.x += (targetRotationX - sculptureGroup.rotation.x) * 0.04;
      sculptureGroup.rotation.y += (targetRotationY - (sculptureGroup.rotation.y % (Math.PI * 2))) * 0.02;

      coreBox.rotation.x = Math.sin(time * 0.5) * 0.1;
      coreBox.rotation.y = Math.cos(time * 0.4) * 0.15;
      plane1.position.y = 0.85 + Math.sin(time * 0.8) * 0.04;
      plane2.position.y = -0.9 + Math.cos(time * 0.7) * 0.04;
      ring1.rotation.z += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[500px] flex items-center justify-center">
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />
    </div>
  );
}
