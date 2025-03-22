import React, { useEffect, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";

const NetworkTopology = () => {
  const [data, setData] = useState({ nodes: [], links: [] });
  const [trafficLinks, setTrafficLinks] = useState([]);
  const [isHorizontal, setIsHorizontal] = useState(true);

  useEffect(() => {
    fetch("/networkJson.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLink =
        data.links[Math.floor(Math.random() * data.links.length)];
      setTrafficLinks([randomLink]);
    }, 2000); 
    return () => clearInterval(interval);
  }, [data.links]);

  const updateBandwidth = (data) => {
    return {
      ...data,
      nodes: data.nodes.map((node) => ({
        ...node,
        uploadSpd: `${Math.floor(Math.random() * 100)} Kbps`, // Random upload speed
        downloadSpd: `${Math.floor(Math.random() * 100)} Kbps`, // Random download speed
      })),
    };
  };

  const toggleLayout = () => {
    setIsHorizontal(!isHorizontal);
  };
  return (
    <div>
      <h1>Network Topology</h1>
      <button style={{backgroundColor: "yellow", color : "black", fontWeight : "bolder"}} onClick={toggleLayout}>
        Toggle Layout: {isHorizontal ? "Horizontal" : "Vertical"}
      </button>
      <ForceGraph2D
        backgroundColor="black"
        graphData={data}
        nodeLabel={(node) => `Name: ${node.download}, Type: ${node.type}`}
        linkLabel={(link) => `Speed: ${link.upload}`}
        nodeAutoColorBy="type"
        linkDirectionalArrowLength={3.5}
        linkDirectionalArrowRelPos={1}
        linkCurvature={0}
        linkLineDash={trafficLinks.length ? [1, 0.5] : undefined}
        linkColor={(link) => "grey"}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.label || node.name;
          const uploadSpd = node.upload || "N/A";
          const downloadSpd = node.download || "N/A";
          const fontSize = 12 / globalScale;
          const lineHeight = fontSize * 1.2;
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = node.color || "black";
          ctx.beginPath();
          ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI, false);
          ctx.fill();
          ctx.fillText(label, node.x, node.y + 10);
          ctx.fillText(
            `↑ ${uploadSpd} ↓ ${downloadSpd}`,
            node.x,
            node.y + 10 + lineHeight
          );
        }}
        onNodeClick={(node) => {
          console.log("Node clicked:", node);
        }}
        onLinkClick={(link) => {
          console.log("Link clicked:", link);
        }}
        linkDirectionalParticleWidth={2}
        linkDirectionalParticleSpeed={0.01}
        linkDirectionalParticleColor={() => "gray"}
        linkDirectionalParticles={trafficLinks.length}
        enableNodeDrag={true}
        dagMode={isHorizontal ? "lr" : "td"}
      />
    </div>
  );
};

export default NetworkTopology;
